# SeniorNavigator Services — Website & Brand

Official website and brand assets for **SeniorNavigator Services** — compassionate, **non-medical** senior support and medical-appointment companionship in **Mississauga & the Greater Toronto Area**. Care in **English, Urdu & Pashto**.

🌐 `www.seniornavigator.ca` · ✉️ `admin@seniornavigator.ca` · ☎️ +1 (437) 559-2990

---

## Repository contents

| Folder | What's inside |
|---|---|
| **`website/`** | The complete website — 17 hand-built, responsive, accessible static pages (HTML/CSS/JS). See `website/README.md` for the deployment guide. |
| **`brand/logo/`** | Logo system — vector lockups (`.svg`), transparent PNGs, and a full favicon set. |
| **`brand/previews/`** | Quick-look preview images of the brand, website and stationery. |
| **`letterhead/`** | Premium letterhead — editable Word `.docx`, plus print-ready HTML & PDF (sample + blank template). |

## Quick start

```bash
# Preview the website locally
cd website
npx serve .        # or: python -m http.server 8000
# then open http://localhost:8000
```

Or simply open `website/index.html` in a browser.

## Deploying the website

The site is static — host it anywhere:

- **Netlify / Cloudflare Pages:** connect this repo (or drag-and-drop the `website/` folder). Free SSL + CDN.
- **GitHub Pages:** enable Pages and serve from the `/website` folder (Settings → Pages).
- **Any web host:** upload the contents of `website/`.

Point the `seniornavigator.ca` domain at your host and you're live. Full step-by-step instructions are in [`website/README.md`](website/README.md).

## Editing

Pages are generated from a small build for consistency — edit `website/_lib.js` (shared header/footer/contact details) and `website/build.js` (page content), then run `node build.js`. You can also edit the generated `.html` files directly.

---

© SeniorNavigator Services Limited · Mississauga, Ontario, Canada.
*Strictly non-medical companionship, navigation and errand support — no nursing, personal care, or regulated health services.*
