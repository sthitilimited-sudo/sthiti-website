/* =========================================================
   STHITI LIMITED — ADMIN PANEL
   Activated by Ctrl+Shift+A or the floating gear button.
   ---------------------------------------------------------
   THREAT MODEL
   The admin gate is a SOFT LOCK against casual access.
   Anything edited via this panel lives in the visitor's
   browser localStorage and never reaches a server, so even
   a fully broken gate cannot leak anything beyond that one
   browser's view of the site. This is content drafting, not
   authentication.

   That said, the implementation below uses PBKDF2 with
   100,000 iterations and a per-installation salt to make
   offline brute-force expensive, plus an in-browser rate
   limit (5 attempts then 60 seconds locked) to slow down
   anyone trying passwords in the UI.

   BEFORE LAUNCH:
   1. Change ADMIN_SALT to a random string of your own.
   2. Compute the PBKDF2 hash of your chosen password using
      the helper button in the panel (How to change password).
   3. Replace ADMIN_HASH below with the printed hash.
   4. Use 12+ characters with mixed case, digits and a symbol.

   The default password is 'sthiti-change-me' to make the
   reminder unmissable.
   ========================================================= */
'use strict';

/* Per-installation salt — regenerate for your deployment. */
var ADMIN_SALT = 'sthiti-c8b66b7bf358f12d4a1e9e49ab7b5bd4';

/* PBKDF2 iteration count. Higher = slower per attempt = more
   resistant to offline brute force. 100k is reasonable for
   one-time login on modern hardware (~50ms). */
var ADMIN_ITER = 100000;

/* PBKDF2-SHA256 of 'sthiti-change-me' with the salt above and 100,000 iterations.
   REPLACE BEFORE LAUNCH (see header above). */
var ADMIN_HASH = 'e4ae0fc40b378d8c524ac8ef157cb735bfefc94e126aea39ce042a8434558aa9';

/* Rate-limit configuration */
var MAX_ATTEMPTS = 5;
var LOCKOUT_MS   = 60 * 1000;
var LS_ATTEMPTS  = '__sthiti_admin_attempts';
var LS_LOCKED_UNTIL = '__sthiti_admin_locked_until';

/* PBKDF2-SHA256, returning hex digest */
function pbkdf2hex(password, saltStr, iterations){
  if(!window.crypto || !window.crypto.subtle){
    return Promise.resolve(null);
  }
  var enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    'raw', enc.encode(password), { name: 'PBKDF2' }, false, ['deriveBits']
  ).then(function(key){
    return window.crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt: enc.encode(saltStr), iterations: iterations, hash: 'SHA-256' },
      key, 256
    );
  }).then(function(buf){
    var b = new Uint8Array(buf), s = '';
    for(var i=0;i<b.length;i++){ s += b[i].toString(16).padStart(2,'0'); }
    return s;
  });
}

/* Rate-limit helpers (sessionStorage so it resets on tab close,
   but persists across reloads within the same session) */
function getAttempts(){
  try { return parseInt(sessionStorage.getItem(LS_ATTEMPTS) || '0', 10); }
  catch(e){ return 0; }
}
function setAttempts(n){
  try { sessionStorage.setItem(LS_ATTEMPTS, String(n)); } catch(e){}
}
function getLockedUntil(){
  try { return parseInt(sessionStorage.getItem(LS_LOCKED_UNTIL) || '0', 10); }
  catch(e){ return 0; }
}
function setLockedUntil(ts){
  try { sessionStorage.setItem(LS_LOCKED_UNTIL, String(ts)); } catch(e){}
}
function clearRateLimit(){
  try {
    sessionStorage.removeItem(LS_ATTEMPTS);
    sessionStorage.removeItem(LS_LOCKED_UNTIL);
  } catch(e){}
}

window.openAdmin = function(){
  if(document.getElementById('adminPanel')) return;
  var el = document.createElement('div');
  el.id = 'adminPanel';
  el.style.cssText = 'position:fixed;inset:0;background:rgba(20,15,10,.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px;';
  el.innerHTML =
    '<div style="background:#FBF8F1;padding:40px;max-width:560px;width:100%;border-radius:4px;box-shadow:0 24px 80px rgba(0,0,0,.3);">'+
      '<h2 style="font-family:\'Playfair Display\',serif;font-size:1.6rem;margin-bottom:8px;color:#2A2520;">Admin Panel</h2>'+
      '<p style="color:#7A6F5E;font-size:.85rem;margin-bottom:24px;line-height:1.6;">Sthiti Limited \u2014 internal tools. Enter password to continue.</p>'+
      '<input type="password" id="adminPass" placeholder="Password" autocomplete="off" style="width:100%;padding:14px 16px;font-size:.95rem;border:1px solid #D4CDB8;border-radius:2px;font-family:inherit;background:#fff;margin-bottom:18px;" autofocus />'+
      '<div id="adminMsg" style="color:#B85C38;font-size:.8rem;margin-bottom:14px;min-height:18px;"></div>'+
      '<div style="display:flex;gap:10px;">'+
        '<button id="adminGo" style="flex:1;padding:13px;background:#1F5F3A;color:#F4EFE6;border:none;border-radius:2px;letter-spacing:.18em;font-size:.7rem;text-transform:uppercase;font-weight:500;cursor:pointer;">Sign In</button>'+
        '<button id="adminClose" style="padding:13px 22px;background:transparent;color:#7A6F5E;border:1px solid #D4CDB8;border-radius:2px;letter-spacing:.18em;font-size:.7rem;text-transform:uppercase;cursor:pointer;">Close</button>'+
      '</div>'+
      '<div id="adminContent" style="display:none;margin-top:28px;border-top:1px solid #D4CDB8;padding-top:24px;">'+
        '<h3 style="font-family:\'Playfair Display\',serif;font-size:1.15rem;margin-bottom:14px;color:#2A2520;">Tools</h3>'+
        '<div style="display:flex;flex-direction:column;gap:10px;">'+
          '<button id="adminExport" class="adm-btn">Export site data (JSON)</button>'+
          '<button id="adminReset" class="adm-btn">Reset local edits (clear drafts)</button>'+
          '<button id="adminPwdInfo" class="adm-btn">How to change password</button>'+
        '</div>'+
        '<div id="adminOut" style="margin-top:18px;padding:14px;background:#F4EFE6;border-radius:2px;color:#7A6F5E;font-size:.78rem;font-family:monospace;display:none;white-space:pre-wrap;max-height:240px;overflow:auto;"></div>'+
      '</div>'+
    '</div>'+
    '<style>.adm-btn{padding:11px 16px;background:#fff;border:1px solid #D4CDB8;border-radius:2px;text-align:left;font-size:.82rem;color:#2A2520;cursor:pointer;font-family:inherit;transition:.2s;} .adm-btn:hover{border-color:#1F5F3A;color:#1F5F3A;}</style>';
  document.body.appendChild(el);

  var pwd = document.getElementById('adminPass');
  var msg = document.getElementById('adminMsg');
  var go  = document.getElementById('adminGo');
  var close = document.getElementById('adminClose');
  var content = document.getElementById('adminContent');
  var out = document.getElementById('adminOut');

  function showOut(text){ out.style.display='block'; out.textContent = text; }

  /* Check lockout on open */
  function checkLockout(){
    var until = getLockedUntil();
    var now = Date.now();
    if(until > now){
      var secs = Math.ceil((until - now) / 1000);
      msg.textContent = 'Too many attempts. Locked for ' + secs + ' more second' + (secs === 1 ? '' : 's') + '.';
      pwd.disabled = true;
      go.disabled = true;
      setTimeout(function(){
        msg.textContent = '';
        pwd.disabled = false;
        go.disabled = false;
        pwd.focus();
      }, until - now);
      return true;
    }
    return false;
  }
  checkLockout();

  function trySignIn(){
    if(checkLockout()) return;
    msg.textContent = '';
    var p = pwd.value;
    if(!p){ msg.textContent = 'Password required.'; return; }
    go.disabled = true;
    msg.textContent = 'Verifying\u2026';
    pbkdf2hex(p, ADMIN_SALT, ADMIN_ITER).then(function(h){
      go.disabled = false;
      msg.textContent = '';
      if(h === null){
        msg.textContent = 'Browser does not support secure hashing. Please use a modern browser.';
        return;
      }
      if(h === ADMIN_HASH){
        clearRateLimit();
        pwd.parentNode.removeChild(pwd);
        msg.parentNode.removeChild(msg);
        go.parentNode.removeChild(go);
        content.style.display = 'block';
      } else {
        var n = getAttempts() + 1;
        setAttempts(n);
        var remaining = MAX_ATTEMPTS - n;
        if(remaining <= 0){
          setLockedUntil(Date.now() + LOCKOUT_MS);
          setAttempts(0);
          checkLockout();
        } else {
          msg.textContent = 'Incorrect password. ' + remaining + ' attempt' + (remaining === 1 ? '' : 's') + ' remaining.';
          pwd.value = '';
          pwd.focus();
        }
      }
    }).catch(function(err){
      go.disabled = false;
      msg.textContent = 'Verification error: ' + (err && err.message ? err.message : 'unknown');
    });
  }

  go.addEventListener('click', trySignIn);
  pwd.addEventListener('keydown', function(e){ if(e.key === 'Enter') trySignIn(); });
  close.addEventListener('click', function(){ el.parentNode.removeChild(el); });

  document.getElementById('adminExport').addEventListener('click', function(){
    var data = {
      projects: window.loadProjects(),
      team: {
        active_architects: window.ACTIVE_ARCHITECTS,
        active_engineers:  window.ACTIVE_ENGINEERS,
        active_admin:      window.ACTIVE_ADMIN,
        advisors:          window.ADVISORY_PANEL,
        contrib_directors: window.CONTRIB_DIRECTORS,
        contrib_architects:window.CONTRIB_ARCHITECTS,
        contrib_engineers: window.CONTRIB_ENGINEERS
      },
      social: window.COMPANY_SOCIAL,
      exported_at: new Date().toISOString()
    };
    var blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
    var url  = URL.createObjectURL(blob);
    var a    = document.createElement('a');
    a.href   = url;
    a.download = 'sthiti-site-data-' + new Date().toISOString().slice(0,10) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showOut('Exported. Download started.');
  });

  document.getElementById('adminReset').addEventListener('click', function(){
    if(!confirm('Clear all local edits and revert to defaults? This cannot be undone.')) return;
    try{
      localStorage.removeItem('sthiti_projects');
      localStorage.removeItem('sthiti_team');
      showOut('Local edits cleared. Reload the page to see defaults.');
    }catch(e){
      showOut('Error clearing localStorage: ' + e.message);
    }
  });

  document.getElementById('adminPwdInfo').addEventListener('click', function(){
    showOut(
      'CHANGE YOUR ADMIN PASSWORD (do this before going live):\n\n'+
      '1. Open admin.js in any text editor.\n\n'+
      '2. Change ADMIN_SALT to a random string of your own.\n'+
      '   (Any phrase or random characters \u2014 just make it\n'+
      '    different from the default and keep a private copy.)\n\n'+
      '3. Compute the hash of your new password.\n'+
      '   Open this admin panel in any browser DevTools and run\n'+
      '   in the console (replace YOUR-PASSWORD and YOUR-SALT):\n\n'+
      '     pbkdf2hex("YOUR-PASSWORD", "YOUR-SALT", 100000)\n'+
      '       .then(h => console.log(h))\n\n'+
      '4. Copy the printed hash and paste it as the value\n'+
      '   of ADMIN_HASH in admin.js.\n\n'+
      '5. Use 12+ characters with mixed case + digits + symbol.\n\n'+
      'CURRENT STATUS: default password is "sthiti-change-me".\n'+
      'You must change this before launch.'
    );
  });
};
