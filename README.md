# Sthiti Limited — Website

Bangladesh-based architecture studio. Founded 16 December 2016 as **Sthiti Sthapotto** by Tajbir Ahmed Khan Rupok. Incorporated as **Sthiti Limited** in December 2025.

Site domain (planned): **www.sthitilimited.com**

---

## What's in this package

A complete static website — no build step, no server required. Open `index.html` in any modern browser or upload the whole folder to any web host (Hostinger, Netlify, GitHub Pages, etc.).

### Pages

| File | Purpose |
|---|---|
| `index.html` | Homepage — fullscreen featured-project slideshow |
| `work.html` | Project archive — filtered by discipline, grouped by project, all 38 photos visible |
| `project.html` | Per-project case study (use `?id=doyal-residence` etc.) |
| `studio.html` | About the studio — origin, principles, timeline, team preview strip |
| `services.html` | Five disciplines with deliverable lists |
| `deliverable.html` | Per-deliverable detail page (e.g. `?d=interior&i=millwork`) |
| `team.html` | Full team — Active / Honorary Advisors / Past Contributors / Events tabs |
| `person.html` | Individual team profile (use `?id=tajbir-rupok` etc.) |
| `journal.html` | Studio writing (placeholder entries — content to be added) |
| `newsletter.html` | Subscribe form (Web3Forms placeholder — replace `access_key`) |
| `mail.html` | Direct enquiry form (Web3Forms placeholder — replace `access_key`) |
| `contact.html` | Contact page with office address, map, social links |
| `404.html` | Fallback page |

### Supporting files

- `sthiti.css` — all styling (one stylesheet, earthy biophilic palette)
- `data.js` — all content (projects, team, advisors, disciplines, deliverables)
- `common.js` — utilities, social-icon SVGs, share-bar helpers, footer, mobile nav
- `admin.js` — hidden admin gate (Ctrl+Shift+A) for content overrides via localStorage
- `sthiti-logo.jpg` — recropped, brightened studio mark
- `_watermark.png` — brand-green Sthiti glyph applied to all project photos
- `sitemap.xml`, `robots.txt` — SEO basics

### Folders

- `images/` — 38 watermarked project photographs
- `team/` — 14 team and advisor portraits

---

## The 11 real projects

| Project | Discipline | Location | Year |
|---|---|---|---|
| Police Liberation War Museum | Civic | Rajarbag, Dhaka | 2017 |
| Doyal Residence | Interior | Tikatuli, Dhaka | 2024 |
| Sobuj Residence | Interior | Mirpur 10, Dhaka | 2025 |
| Samiul Residence | Interior | Mirpur 10, Dhaka | 2024 |
| Shefali Residence | Residential | Sherpur | 2025 |
| Apartments at Kawla | Residential | Dhaka | 2025 |
| Apartment Building at POHS | Residential | Dhaka | 2024 |
| BEPZA Economic Zone Masterplan | Masterplan | Mirsarai | 2024 |
| Netrokona University Masterplan | Masterplan | Netrokona | Jan 2019 (proposed) |
| Daudpur General Hospital | Healthcare | Daudpur, Narayanganj | Dec 2024 — present |
| Narail Vacation House | Residential | Lohagora, Narail | Mar 2023 — Nov 2024 |

All 38 photographs are watermarked with the brand-green Sthiti glyph in the bottom-left corner.

---

## Honorary advisors

- **Prof. Dr. Rafique Ullah Khan** — Writer, Founding Vice Chancellor, Netrokona University. Advisor since 2023.
- **Shaikh Mohammad Saleh Rabbi** — Philosopher, BRAC Content Strategist. Advisor since 2024.
- **Kajal Abdullah** — CEO, Jahaji Ltd, Technology Product Designer. Advisor since 2024.

---

## Before launch — security checklist

**Read `SECURITY.md` for the full checklist.** Short version:

1. Change the admin password in `admin.js` (default is `sthiti2024` and published in source).
2. Replace `YOUR-WEB3FORMS-KEY-HERE` in `newsletter.html` and `mail.html` with your real Web3Forms access key.
3. Enable HTTPS at your host.
4. The `.htaccess` (Apache/Hostinger) and `_headers` (Netlify/Cloudflare Pages) files apply security headers automatically — leave them in the site root.

---

## Customising

### Edit content without re-deploying

Press **Ctrl + Shift + A** on any page to open the admin gate. Default password is in `admin.js` (`sthiti2024` — **change before deploying, see `SECURITY.md`**). Admin lets you override projects, add events, etc., stored in browser localStorage. For permanent edits, modify `data.js` directly.

### Change colours / typography

All design tokens are CSS variables at the top of `sthiti.css`. The palette is earthy biophilic — cream backgrounds, forest green primary, terracotta accents.

---

## Deploying

### Option 1 — Hostinger / cPanel (typical Bangladesh hosting)
1. Zip the whole folder (already done — `sthitilimited-website.zip`).
2. Log into your hosting control panel → File Manager.
3. Upload the zip into `public_html` and extract.
4. Visit `www.sthitilimited.com` — done.

### Option 2 — Netlify / Vercel
Drag the folder onto netlify.com or import via Vercel. Five-minute deploy with HTTPS included.

### Option 3 — GitHub Pages
Push the folder to a repo, enable Pages in repo settings.

---

## Tech notes

- **No CSP meta tags** — would block local-file viewing in Chrome.
- **All paths relative** — no leading `/` on hrefs, so the site works under any subfolder.
- **All user input escaped** through `esc()` / `escAttr()` / `safeUrl()` helpers in `common.js` before innerHTML.
- **External links** all carry `rel="noopener noreferrer"`.
- **Social share** working on Facebook / X / LinkedIn; Instagram is copy-link-to-paste.
- **Profile pages** open in a new tab from team and studio preview strips.

---

## Credits

Built for Sthiti Limited, Dhaka. Architecture-studio aesthetic with earthy biophilic palette. Logo and watermark by the studio. Photographs by the studio and clients.

© 2026 Sthiti Limited. All rights reserved.
