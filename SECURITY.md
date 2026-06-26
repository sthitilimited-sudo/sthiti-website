# Security Checklist — Before Launch

This is a static site (no backend, no database) so the attack surface is small. The items below cover the few things that still need attention before you go live.

---

## Must-do before launch

### 1. Change the admin password
- Open `admin.js` in a text editor.
- Find the SHA-256 hash near the top (the constant that gates the admin panel).
- Generate a new hash for your chosen password: open any browser console and run:
  ```js
  crypto.subtle.digest('SHA-256', new TextEncoder().encode('your-new-password-here'))
    .then(b => console.log(Array.from(new Uint8Array(b)).map(x=>x.toString(16).padStart(2,'0')).join('')))
  ```
- Paste the printed hash into `admin.js` replacing the default.
- Use a password with **at least 12 characters**, mixing uppercase, lowercase, digits and a symbol.
- Note that the admin gate is a soft lock, not security against a determined attacker — anyone who downloads the page source can brute-force the hash offline. Keep it strong; do not use admin to store anything sensitive.

### 2. Replace the Web3Forms access keys
- Go to [web3forms.com](https://web3forms.com), sign up free, get your access key.
- Open `newsletter.html` and `mail.html`.
- Find `YOUR-WEB3FORMS-KEY-HERE` (once in each file) and paste your real key.
- Without this, the contact and newsletter forms will not deliver messages to you.

### 3. Enable HTTPS at your host
- **Netlify / Cloudflare Pages**: automatic, no action needed.
- **Hostinger / cPanel**: cPanel → SSL/TLS → enable Let's Encrypt for `sthitilimited.com`.
- **Once HTTPS is working**, uncomment the `Strict-Transport-Security` line in `.htaccess` (or `_headers` for Netlify/Cloudflare). Do NOT enable HSTS before HTTPS works, or browsers will be locked out.

### 4. Confirm the security headers loaded
- Apache hosts (Hostinger, most cPanel): `.htaccess` in the site root is loaded automatically.
- Netlify / Cloudflare Pages: `_headers` (no extension) is loaded automatically — make sure it stays at the site root after deploy.
- After deploy, open the site in a browser → DevTools → Network tab → click the document → Response Headers. You should see `Content-Security-Policy`, `X-Frame-Options: DENY`, `Referrer-Policy`, and `X-Content-Type-Options: nosniff`. If they're missing, your host may need manual config — search "[your host] custom HTTP headers" for instructions.

---

## What's already protected

- **XSS**: all user-supplied input passes through `esc()`, `escAttr()`, or `safeUrl()` in `common.js` before insertion. The `safeUrl()` helper blocks `javascript:`, `data:` and `vbscript:` URL schemes.
- **Clickjacking**: `X-Frame-Options: DENY` + CSP `frame-ancestors 'none'` prevents the site from being framed by other domains.
- **MIME sniffing**: `X-Content-Type-Options: nosniff` prevents browsers from re-interpreting files.
- **Tab-nabbing**: every external link carries `rel="noopener noreferrer"`.
- **Mixed content**: all external resources (Google Fonts, Web3Forms) use HTTPS.
- **Form spam**: Web3Forms includes a honeypot field. For higher traffic, add hCaptcha to the form (see web3forms.com docs).
- **No server attack surface**: static HTML/CSS/JS only, no PHP, no database, no admin endpoint reachable from the network.

---

## Periodic checks

- Once a quarter, browse to [securityheaders.com](https://securityheaders.com) and enter `https://sthitilimited.com`. Aim for an A grade.
- If you add new third-party services later (analytics, embeds, chat widgets), you'll need to extend the CSP in `.htaccess` and `_headers` to allow their domains under the appropriate directive.

---

## If something breaks after launch

- **Fonts not loading**: CSP `font-src` or `style-src` may be too tight — verify `https://fonts.gstatic.com` is in `font-src` and `https://fonts.googleapis.com` is in `style-src`.
- **Contact form failing**: CSP `form-action` and `connect-src` must include `https://api.web3forms.com`.
- **Admin panel won't open**: the CSP currently allows `'unsafe-inline'` for scripts because some buttons use inline `onclick`. If a future tightening removes that, the admin shortcut may stop working until handlers are rewritten as `addEventListener`.
