# SeniorNavigator Services — Website

A premium, fast, accessible **static website** (hand-built HTML/CSS/JS — no framework, no build step required to host). 17 pages, fully responsive, WCAG-minded, SEO-ready.

## Preview locally
Just open `index.html` in any browser (double-click), or run a tiny local server for clean URLs:
```bash
cd website
npx serve .         # or: python -m http.server 8000
```

## Edit content
All pages are generated from one source for consistency:
- **`_lib.js`** — shared header, footer, navigation, icons, logo, SEO `<head>` + business details (phone, email, address, social links live in the `BIZ` object at the top).
- **`build.js`** — the content of every page.
- After editing either file, regenerate the `.html` pages:
```bash
cd website
node build.js
```
> You can also edit the generated `.html` files directly if you prefer not to use Node — just keep header/footer in sync.

## Pages (17)
Home · Services · How It Works · Pricing · Service Areas · About · Resources (+4 articles) · For Healthcare Partners · Careers · Contact/Book · FAQ · Privacy · Accessibility.

## Go-live checklist
1. **Register the domain** `seniornavigator.ca` (CIRA registrar) and point DNS to your host.
2. **Deploy** the `website/` folder to **Netlify** or **Cloudflare Pages** (drag-and-drop the folder, or connect a Git repo). Free SSL is automatic. Any cPanel/static host works too.
3. **Email on the domain** (Google Workspace / Zoho): `info@` (primary), `admin@`, `care@`, `bookings@`.
4. **Connect the contact form** (currently a friendly front-end demo):
   - *Netlify:* add `netlify` to the `<form>` tag (`<form ... netlify>`), or
   - *Formspree:* set the form `action` to your Formspree endpoint and add `data-live="true"` to `#booking-form`.
5. **Embed real-time booking** on `contact.html` — paste a Calendly / Jane / Acuity embed into the marked placeholder card.
6. **Add a Google Map** where the map placeholders appear (Service Areas + Contact).
7. **Replace placeholder visuals** (`.media-panel` blocks marked "Replace with…") with real, consented photography of the founder, team and care moments.
8. **Set up** Google Business Profile, Facebook & Instagram (links already in the footer — update the URLs in `_lib.js` `BIZ.fb` / `BIZ.ig`).
9. **Analytics:** add Google Analytics 4 + Search Console; submit `sitemap.xml`.
10. **Swap illustrative testimonials** for real client reviews (with consent).

## What's already done for you
- SEO: unique titles/descriptions, Open Graph + Twitter cards, `LocalBusiness` JSON-LD, `sitemap.xml`, `robots.txt`, canonical tags, branded social-share image.
- Favicons + web manifest (PWA-installable).
- Accessibility: skip link, semantic landmarks, large legible type, keyboard nav, focus states, reduced-motion support, ARIA labels.
- Click-to-call + click-to-email everywhere; sticky header; mobile menu; FAQ accordion; on-scroll reveals (degrade gracefully without JS).

## Contact details used sitewide (edit in `_lib.js`)
Phone **+1 (437) 559-2990** · Email **info@seniornavigator.ca** · Web **www.seniornavigator.ca**
SeniorNavigator Services Limited · Ontario Corp. No. 1001484077 · 448 Gibraltar Drive, Unit 9, Mississauga, ON L5T 2N8.
