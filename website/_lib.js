/* Shared layout library for SeniorNavigator Services website */
const BIZ = {
  name: 'SeniorNavigator Services',
  legal: 'SeniorNavigator Services Limited',
  ocn: '1001484077',
  tagline: 'By your side, every step of the way.',
  phone: '+1 (437) 559-2990',
  tel: '+14375592990',
  email: 'info@seniornavigator.ca',
  domain: 'www.seniornavigator.ca',
  url: 'https://www.seniornavigator.ca',
  addr: '448 Gibraltar Drive, Unit 9, Mississauga, Ontario L5T 2N8, Canada',
  city: 'Mississauga', region: 'ON', postal: 'L5T 2N8',
  fb: 'https://www.facebook.com/SeniorNavigatorServices',
  ig: 'https://www.instagram.com/seniornavigatorservices',
};

/* ---- Icons (Lucide-style, 24x24, stroke=currentColor) ---- */
const P = (d) => `<path d="${d}"/>`;
const ICONS = {
  stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 12 0V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6 6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  clipboard: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  checkc: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  star: '<path d="M11.5 2.6a.6.6 0 0 1 1 0l2.6 5.3 5.8.8a.6.6 0 0 1 .3 1l-4.2 4.1 1 5.8a.6.6 0 0 1-.8.6L12 17.5l-5.2 2.7a.6.6 0 0 1-.8-.6l1-5.8-4.2-4.1a.6.6 0 0 1 .3-1l5.8-.8Z"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 2v4M16 2v4"/><path d="m9 16 2 2 4-4"/>',
  car: '<path d="M19 17h2l.6-3.4a4 4 0 0 0-.3-2.2l-1.6-3.6A2 2 0 0 0 17.9 6.7H6.1a2 2 0 0 0-1.8 1.1L2.7 11.4a4 4 0 0 0-.3 2.2L3 17h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
  snow: '<path d="M2 12h20M12 2v20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"/><path d="M12 2 9 5m3-3 3 3M2 12l3-3m-3 3 3 3m9 7-3-3m3 3 3-3m4-9-3 3m3-3-3-3"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  quote: '<path d="M3 21c3 0 7-1 7-8V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2c0 2-1 4-3 4zm12 0c3 0 7-1 7-8V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2c0 2-1 4-3 4z"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>',
  award: '<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/><circle cx="12" cy="8" r="6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/>',
  language: '<path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6"/>',
  hand: '<path d="M11 14h2a2 2 0 0 0 2-2 2 2 0 0 0-2-2h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 15 6 6M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"/>',
  route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
};
function icon(name, cls) { return `<svg class="${cls || ''}" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`; }

/* ---- Compass sprite (defined once, referenced via <use>) ---- */
const SPRITE = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<radialGradient id="snT" cx="38%" cy="32%" r="80%"><stop offset="0" stop-color="#176A80"/><stop offset=".55" stop-color="#0C4A5A"/><stop offset="1" stop-color="#08323D"/></radialGradient>
<linearGradient id="snL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F2DDA1"/><stop offset=".48" stop-color="#D9B569"/><stop offset="1" stop-color="#C29A45"/></linearGradient>
<linearGradient id="snD" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#B68C3B"/><stop offset="1" stop-color="#8A6A2C"/></linearGradient>
<linearGradient id="snM" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#D7B264"/><stop offset="1" stop-color="#A9863C"/></linearGradient>
</defs>
<symbol id="sn-mark" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="48" fill="url(#snT)"/><circle cx="50" cy="50" r="47" fill="none" stroke="#D9B569" stroke-width=".8" opacity=".55"/><circle cx="50" cy="50" r="40.5" fill="none" stroke="#D9B569" stroke-width=".6" opacity=".3"/>
<g opacity=".92" fill="url(#snM)"><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(45 50 50)"/><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(135 50 50)"/><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(225 50 50)"/><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(315 50 50)"/></g>
<g transform="rotate(90 50 50)"><path d="M50,7 L55.5,41 L50,50 Z" fill="url(#snL)"/><path d="M50,7 L50,50 L44.5,41 Z" fill="url(#snD)"/></g>
<g transform="rotate(180 50 50)"><path d="M50,7 L55.5,41 L50,50 Z" fill="url(#snL)"/><path d="M50,7 L50,50 L44.5,41 Z" fill="url(#snD)"/></g>
<g transform="rotate(270 50 50)"><path d="M50,7 L55.5,41 L50,50 Z" fill="url(#snL)"/><path d="M50,7 L50,50 L44.5,41 Z" fill="url(#snD)"/></g>
<path d="M50,5 L55.5,41 L50,50 Z" fill="#F4E4B4"/><path d="M50,5 L50,50 L44.5,41 Z" fill="url(#snL)"/>
<circle cx="50" cy="50" r="6.5" fill="#0C4A5A"/><path d="M12 20.5 C 11 19.5, 4 14.5, 4 9.2 C 4 6.4, 6.1 4.5, 8.6 4.5 C 10.3 4.5, 11.5 5.6, 12 6.6 C 12.5 5.6, 13.7 4.5, 15.4 4.5 C 17.9 4.5, 20 6.4, 20 9.2 C 20 14.5, 13 19.5, 12 20.5 Z" transform="translate(45.60 45.93) scale(0.3667)" fill="url(#snL)"/>
</symbol>
<symbol id="sn-compass-line" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" stroke-width="1.1"/><circle cx="50" cy="50" r="40.5" fill="none" stroke="currentColor" stroke-width=".7"/>
<g fill="currentColor"><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(45 50 50)"/><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(135 50 50)"/><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(225 50 50)"/><path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(315 50 50)"/><path d="M50,6 L55,41 L50,50 L45,41 Z"/><path d="M50,6 L55,41 L50,50 L45,41 Z" transform="rotate(90 50 50)"/><path d="M50,6 L55,41 L50,50 L45,41 Z" transform="rotate(180 50 50)"/><path d="M50,6 L55,41 L50,50 L45,41 Z" transform="rotate(270 50 50)"/></g>
</symbol></svg>`;
const markSvg = (cls) => `<svg class="mark ${cls || ''}" viewBox="0 0 100 100" role="img" aria-label="SeniorNavigator"><use href="#sn-mark"/></svg>`;

/* ---- Navigation ---- */
const NAV = [
  ['services.html', 'Services', 'services'],
  ['pricing.html', 'Pricing', 'pricing'],
  ['service-areas.html', 'Service Areas', 'service-areas'],
  ['about.html', 'About', 'about'],
  ['resources.html', 'Resources', 'resources'],
  ['contact.html', 'Contact', 'contact'],
];
const MOBILE_NAV = [
  ['services.html', 'Services'], ['how-it-works.html', 'How It Works'], ['pricing.html', 'Pricing'],
  ['service-areas.html', 'Service Areas'], ['about.html', 'About'], ['resources.html', 'Resources'],
  ['partners.html', 'For Healthcare Partners'], ['careers.html', 'Careers'], ['faq.html', 'FAQ'], ['contact.html', 'Contact'],
];

/* ---- <head> ---- */
function head(opts) {
  const title = opts.title;
  const desc = opts.desc;
  const path = opts.path || '';
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    name: BIZ.legal, alternateName: BIZ.name, '@id': BIZ.url + '/#org',
    url: BIZ.url, telephone: BIZ.tel, email: BIZ.email,
    image: BIZ.url + '/assets/img/og-image.png', priceRange: '$$',
    description: 'Non-medical senior support and medical-appointment companionship in Mississauga and the Greater Toronto Area. Multilingual care in English, Urdu and Pashto.',
    address: { '@type': 'PostalAddress', streetAddress: '448 Gibraltar Drive, Unit 9', addressLocality: 'Mississauga', addressRegion: 'ON', postalCode: 'L5T 2N8', addressCountry: 'CA' },
    areaServed: ['Mississauga', 'Brampton', 'Etobicoke', 'Oakville', 'Toronto', 'Greater Toronto Area'],
    knowsLanguage: ['English', 'Urdu', 'Pashto'],
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '08:00', closes: '20:00' }],
    sameAs: [BIZ.fb, BIZ.ig],
  };
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${BIZ.url}/${path}">
<meta name="theme-color" content="#0C4A5A">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${BIZ.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${BIZ.url}/${path}">
<meta property="og:image" content="${BIZ.url}/assets/img/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${desc}">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="icon" href="assets/img/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="assets/img/favicon-180.png">
<link rel="manifest" href="site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Nunito+Sans:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/styles.css">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${SPRITE}`;
}

/* ---- Header ---- */
function header(active) {
  const links = NAV.map(([href, label, key]) =>
    `<li><a href="${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a></li>`).join('');
  const mlinks = MOBILE_NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join('');
  return `
<div class="topbar"><div class="wrap">
  <span class="tb-item tb-hide">${icon('pin')} Serving Mississauga &amp; the Greater Toronto Area</span>
  <span class="tb-item tb-langs">${icon('globe')} We assist in English · Urdu · Pashto</span>
  <a class="tb-item tb-hide" href="tel:${BIZ.tel}">${icon('phone')} ${BIZ.phone}</a>
</div></div>
<header class="site-header"><div class="wrap"><nav class="nav" aria-label="Primary">
  <a class="brand" href="index.html" aria-label="${BIZ.name} home">
    ${markSvg()}
    <span><span class="bt-name">Senior Navigator</span><br><span class="bt-sub">SERVICES</span></span>
  </a>
  <ul class="nav-links">${links}</ul>
  <div class="nav-cta">
    <a class="nav-phone" href="tel:${BIZ.tel}">${icon('phone')}<span>${BIZ.phone}</span></a>
    <a class="btn btn--primary" href="contact.html">Book a free consultation</a>
    <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">${icon('menu') || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>'}</button>
  </div>
</nav></div></header>
<div class="scrim" tabindex="-1"></div>
<aside class="mobile-menu" id="mobile-menu" aria-hidden="true" aria-label="Menu">
  <div class="mm-head"><a class="brand" href="index.html">${markSvg()}<span class="bt-name" style="font-size:1.1rem">Senior Navigator</span></a>
  <button class="mm-close" aria-label="Close menu"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button></div>
  ${mlinks}
  <div class="mm-cta">
    <a class="btn btn--primary" href="contact.html">Book a free consultation</a>
    <a class="btn btn--ghost" href="tel:${BIZ.tel}">${icon('phone')} ${BIZ.phone}</a>
  </div>
</aside>`;
}

/* ---- Footer ---- */
function footer() {
  return `
<footer class="site-footer"><div class="wrap">
  <div class="foot-grid">
    <div class="foot-brand">
      ${markSvg()}
      <div class="fb-name">Senior Navigator Services</div>
      <p>Compassionate, non-medical senior support and medical-appointment companionship across Mississauga and the Greater Toronto Area. ${BIZ.tagline}</p>
      <div class="foot-social">
        <a href="${BIZ.fb}" aria-label="Facebook" rel="noopener">${icon('facebook')}</a>
        <a href="${BIZ.ig}" aria-label="Instagram" rel="noopener">${icon('instagram')}</a>
      </div>
    </div>
    <div class="foot-col"><h4>Services</h4><ul>
      <li><a href="services.html">Appointment Companionship</a></li>
      <li><a href="services.html">Errand Assistance</a></li>
      <li><a href="services.html">Hospital Check-in Support</a></li>
      <li><a href="services.html">Companionship &amp; Wellness</a></li>
      <li><a href="pricing.html">Pricing</a></li>
    </ul></div>
    <div class="foot-col"><h4>Company</h4><ul>
      <li><a href="about.html">About &amp; Founder</a></li>
      <li><a href="how-it-works.html">How It Works</a></li>
      <li><a href="service-areas.html">Service Areas</a></li>
      <li><a href="resources.html">Resources</a></li>
      <li><a href="partners.html">For Healthcare Partners</a></li>
      <li><a href="careers.html">Careers</a></li>
    </ul></div>
    <div class="foot-col"><h4>Get in touch</h4>
      <ul class="foot-contact">
        <li>${icon('phone')}<a href="tel:${BIZ.tel}">${BIZ.phone}</a></li>
        <li>${icon('mail')}<a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
        <li>${icon('globe')}<span>${BIZ.domain}</span></li>
        <li>${icon('pin')}<span>448 Gibraltar Drive, Unit 9,<br>Mississauga, ON L5T 2N8</span></li>
        <li>${icon('clock')}<span>Mon–Sat, 8:00 am – 8:00 pm</span></li>
      </ul>
    </div>
  </div>
  <div class="foot-bottom">
    <span>© <span id="year">2026</span> ${BIZ.legal} · Ontario Corporation No. ${BIZ.ocn}</span>
    <span class="fb-links"><a href="privacy.html">Privacy Policy</a><a href="accessibility.html">Accessibility</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a></span>
  </div>
  <p class="foot-disclaimer">SeniorNavigator Services provides strictly <strong style="color:#cfe0e4">non-medical</strong> companionship, navigation and errand support. We do not provide nursing, personal care, medication administration, diagnosis, or any regulated health service. In an emergency, call 911.</p>
</div></footer>
<script src="assets/js/main.js" defer></script>
</body></html>`;
}

function layout({ title, desc, path, active, body }) {
  return head({ title, desc, path }) + header(active) + `<main id="main">` + body + `</main>` + footer();
}

module.exports = { BIZ, ICONS, icon, markSvg, SPRITE, NAV, head, header, footer, layout };
