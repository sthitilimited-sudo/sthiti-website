/* =========================================================
   STHITI LIMITED — COMMON UTILITIES
   ========================================================= */
'use strict';

window.esc = function(s){
  if(s == null) return '';
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
};

window.escAttr = function(s){
  if(s == null) return '';
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
};

window.safeUrl = function(u){
  if(!u) return '';
  var s = String(u).trim();
  if(s.indexOf('javascript:') === 0) return '';
  if(s.indexOf('data:') === 0) return '';
  if(s.indexOf('vbscript:') === 0) return '';
  if(/^https?:\/\//i.test(s)) return s;
  if(/^mailto:/i.test(s)) return s;
  if(/^tel:/i.test(s)) return s;
  if(s.charAt(0) === '#') return s;
  if(s.charAt(0) === '/') return s;
  if(/^[a-zA-Z0-9_\-]+\.(html|jpg|jpeg|png|webp|svg|gif|pdf)/i.test(s)) return s;
  if(/^[a-zA-Z0-9_\-]+\.html\?/.test(s)) return s;
  return '';
};

/* SVG ICONS */
window.ICON_FB = '<svg viewBox="0 0 24 24"><path d="M9.2 21.5h4v-8.01h3.6l.4-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.4 3.98h2.4v8.01Z"/></svg>';
window.ICON_IG = '<svg viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3Zm11 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>';
window.ICON_WA = '<svg viewBox="0 0 24 24"><path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.48-1.77-1.66-2.07-.17-.3-.02-.47.13-.62.14-.13.3-.34.45-.52.15-.18.2-.3.3-.5.1-.21.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.51-.67-.51h-.57c-.2 0-.52.07-.8.36-.27.3-1.04 1.02-1.04 2.48s1.07 2.86 1.22 3.07c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.48 1.7.63.71.22 1.36.19 1.88.12.57-.09 1.77-.72 2.02-1.43.25-.7.25-1.29.18-1.42-.07-.14-.27-.22-.57-.36ZM12.06 21.79c-1.95 0-3.86-.52-5.55-1.52L6.12 20l-4.11 1.08 1.1-4-.26-.42a9.92 9.92 0 0 1-1.52-5.26C1.33 6.94 5.78 2.5 11.25 2.5c2.65 0 5.14 1.03 7.01 2.91s2.91 4.36 2.91 7C21.16 17.86 16.71 22.31 11.24 22.31"/></svg>';
window.ICON_X = '<svg viewBox="0 0 24 24"><path d="M18.24 2.25h3.3l-7.22 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z"/></svg>';
window.ICON_LI = '<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67V9.67h2.67v8.67zM7 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.84h-2.67v-4.25c0-1.01-.02-2.32-1.41-2.32-1.42 0-1.63 1.1-1.63 2.24v4.33h-2.67V9.67h2.56v1.19h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09v4.78z"/></svg>';
window.ICON_LINK = '<svg viewBox="0 0 24 24"><path d="M10.59 13.41a1 1 0 0 1 0-1.41l3-3a1 1 0 1 1 1.41 1.41l-3 3a1 1 0 0 1-1.41 0Zm-2.13 5.66a4 4 0 0 1-5.66-5.66l3-3a4 4 0 0 1 5.66 0 1 1 0 0 1-1.41 1.41 2 2 0 0 0-2.83 0l-3 3a2 2 0 1 0 2.83 2.83l1.06-1.06a1 1 0 0 1 1.41 1.41Zm12.83-12.83a4 4 0 0 1 0 5.66l-3 3a4 4 0 0 1-5.66 0 1 1 0 1 1 1.41-1.41 2 2 0 0 0 2.83 0l3-3a2 2 0 0 0-2.83-2.83l-1.06 1.06a1 1 0 0 1-1.41-1.41l1.06-1.06a4 4 0 0 1 5.66 0Z"/></svg>';

/* FOOTER */
window.injectFooter = function(){
  var f = document.getElementById('siteFooter');
  if(!f) return;
  var s = window.COMPANY_SOCIAL || {};
  var link = function(u, svg, title){
    var safeUrl = window.safeUrl(u);
    if(safeUrl){
      return '<a href="'+ window.escAttr(safeUrl) +'" target="_blank" rel="noopener noreferrer" title="'+ window.escAttr(title) +'" aria-label="'+ window.escAttr(title) +'">'+ svg +'</a>';
    }
    return '<a aria-disabled="true" title="'+ window.escAttr(title) +' \u2014 not configured" aria-label="'+ window.escAttr(title) +'">'+ svg +'</a>';
  };
  f.innerHTML =
    '<div class="footer-logo"><img src="sthiti-logo.jpg" alt="" style="height:42px;width:auto;"> <span>Sthiti Limited</span></div>'+
    '<div class="footer-copy">\u00a9 2026 Sthiti Limited \u2014 Noor Mahal, Ground Floor, 44/2 Lake Circus, Kolabagan, Dhaka-1205, Bangladesh</div>'+
    '<div class="footer-links">'+
      '<a href="work.html">Work</a><a href="studio.html">Studio</a>'+
      '<a href="services.html">Service</a><a href="journal.html">Journal</a>'+
      '<a href="newsletter.html">Newsletter</a><a href="mail.html">Email</a>'+
      '<a href="contact.html">Contact</a>'+
    '</div>'+
    '<div class="footer-socials">'+
      link(s.facebook,  window.ICON_FB, 'Facebook')+
      link(s.whatsapp,  window.ICON_WA, 'WhatsApp')+
      link(s.x,         window.ICON_X,  'X (Twitter)')+
      link(s.instagram, window.ICON_IG, 'Instagram')+
      link(s.linkedin,  window.ICON_LI, 'LinkedIn')+
    '</div>';
};

window.toggleMobileNav = function(){
  var m = document.getElementById('mobileNav');
  var h = document.getElementById('hamburger');
  if(m) m.classList.toggle('open');
  if(h) h.classList.toggle('open');
};

window.initNavScroll = function(){
  var nav = document.getElementById('nav');
  if(!nav) return;
  var onScroll = function(){ nav.classList.toggle('scrolled', window.scrollY > 60); };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
};

window.initAdminShortcut = function(){
  document.addEventListener('keydown', function(e){
    if(e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')){
      e.preventDefault();
      if(typeof window.openAdmin === 'function') window.openAdmin();
    }
  });
};

/* SHARE BAR — Facebook, X, LinkedIn (working), Instagram (copy link with feedback) */
window.buildShareBar = function(opts){
  opts = opts || {};
  var url   = opts.url   || (typeof window !== 'undefined' && window.location ? window.location.href : '');
  var title = opts.title || document.title || 'Sthiti Limited';
  var label = opts.label !== false;

  var eUrl   = encodeURIComponent(url);
  var eTitle = encodeURIComponent(title);

  var html = '<div class="share-bar">';
  if(label) html += '<span class="share-label">Share</span>';
  html += '<a href="https://www.facebook.com/sharer/sharer.php?u='+ eUrl +'" target="_blank" rel="noopener noreferrer" title="Share on Facebook" aria-label="Share on Facebook">'+ window.ICON_FB +'</a>';
  html += '<a href="https://twitter.com/intent/tweet?url='+ eUrl +'&text='+ eTitle +'" target="_blank" rel="noopener noreferrer" title="Share on X" aria-label="Share on X">'+ window.ICON_X +'</a>';
  html += '<a href="https://www.linkedin.com/sharing/share-offsite/?url='+ eUrl +'" target="_blank" rel="noopener noreferrer" title="Share on LinkedIn" aria-label="Share on LinkedIn">'+ window.ICON_LI +'</a>';
  html += '<button type="button" onclick="window.shareToInstagram(this)" title="Instagram has no web share API \u2014 click to copy link" aria-label="Copy link for Instagram">'+ window.ICON_IG +'</button>';
  html += '<button type="button" onclick="window.copyShareLink(this)" title="Copy link" aria-label="Copy link">'+ window.ICON_LINK +'</button>';
  html += '<span class="copy-feedback">Link copied</span>';
  html += '</div>';
  return html;
};

window.copyShareLink = function(btnEl){
  var url = window.location.href;
  var feedback = btnEl.parentNode.querySelector('.copy-feedback');
  var done = function(){
    if(feedback){ feedback.classList.add('visible'); setTimeout(function(){ feedback.classList.remove('visible'); }, 2200); }
  };
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(done, function(){ window.prompt('Copy this link:', url); });
  } else {
    window.prompt('Copy this link:', url);
  }
};

window.shareToInstagram = function(btnEl){
  var feedback = btnEl.parentNode.querySelector('.copy-feedback');
  var url = window.location.href;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(function(){
      if(feedback){ feedback.textContent = 'Link copied \u2014 paste into Instagram'; feedback.classList.add('visible'); setTimeout(function(){ feedback.classList.remove('visible'); feedback.textContent='Link copied'; }, 3500); }
    });
  } else {
    window.prompt('Copy this link and paste into Instagram:', url);
  }
};

document.addEventListener('DOMContentLoaded', function(){
  window.injectFooter();
  window.initNavScroll();
  window.initAdminShortcut();
});
