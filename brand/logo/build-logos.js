// Generates the full SeniorNavigator logo system from one source of truth.
const fs = require('fs');
const path = require('path');
const OUT = __dirname;

// NOTE: & must be &amp; so the SVG remains valid XML when loaded via <img>.
const FONT_IMPORT =
  `@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&amp;family=Nunito+Sans:wght@700;800&amp;display=swap');`;

// ---- Compass rose mark (100x100 coordinate space) ----
function defs() {
  return `
  <defs>
    <radialGradient id="snTeal" cx="38%" cy="32%" r="80%">
      <stop offset="0%" stop-color="#176A80"/>
      <stop offset="55%" stop-color="#0C4A5A"/>
      <stop offset="100%" stop-color="#08323D"/>
    </radialGradient>
    <linearGradient id="snGoldLight" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#F2DDA1"/><stop offset="48%" stop-color="#D9B569"/><stop offset="100%" stop-color="#C29A45"/>
    </linearGradient>
    <linearGradient id="snGoldDark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B68C3B"/><stop offset="100%" stop-color="#8A6A2C"/>
    </linearGradient>
    <linearGradient id="snGoldMed" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#D7B264"/><stop offset="100%" stop-color="#A9863C"/>
    </linearGradient>
  </defs>`;
}

// mode: 'color' | 'mono' (single flat color, facets via opacity) | 'gold' (flat gold tones)
function rose(mode, opts = {}) {
  const c = opts.color || '#FFFFFF';
  const showBadge = opts.badge !== false;
  let badge = '';
  if (mode === 'color') {
    badge = showBadge ? `
  <circle cx="50" cy="50" r="48" fill="url(#snTeal)"/>
  <circle cx="50" cy="50" r="47" fill="none" stroke="#D9B569" stroke-width="0.8" opacity="0.55"/>
  <circle cx="50" cy="50" r="40.5" fill="none" stroke="#D9B569" stroke-width="0.6" opacity="0.3"/>` : '';
  } else if (showBadge) {
    badge = `
  <circle cx="50" cy="50" r="48" fill="none" stroke="${c}" stroke-width="1.4" opacity="0.9"/>
  <circle cx="50" cy="50" r="40.5" fill="none" stroke="${c}" stroke-width="0.7" opacity="0.4"/>`;
  }

  const fL = mode === 'color' ? 'url(#snGoldLight)' : c;
  const fD = mode === 'color' ? 'url(#snGoldDark)'  : c;
  const fM = mode === 'color' ? 'url(#snGoldMed)'   : c;
  const fN = mode === 'color' ? '#F4E4B4'           : c;
  const oD = mode === 'color' ? '1' : '0.55';
  const oM = mode === 'color' ? '0.92' : '0.78';
  const hub = mode === 'color' ? 'url(#snGoldLight)' : c;

  const card = (deg, tip, fl, fd, od) => `
    <g transform="rotate(${deg} 50 50)">
      <path d="M50,${tip} L55.5,41 L50,50 Z" fill="${fl}"/>
      <path d="M50,${tip} L50,50 L44.5,41 Z" fill="${fd}" opacity="${od}"/>
    </g>`;
  const inter = (deg) => `<path d="M50,22 L54.5,44 L50,50 L45.5,44 Z" transform="rotate(${deg} 50 50)" fill="${fM}" opacity="${oM}"/>`;

  // Hub: a small heart at the centre — "compassion at the centre of the compass".
  const HEART = 'M12 20.5 C 11 19.5, 4 14.5, 4 9.2 C 4 6.4, 6.1 4.5, 8.6 4.5 C 10.3 4.5, 11.5 5.6, 12 6.6 C 12.5 5.6, 13.7 4.5, 15.4 4.5 C 17.9 4.5, 20 6.4, 20 9.2 C 20 14.5, 13 19.5, 12 20.5 Z';
  const heartMk = (cx, cy, s, fill) => `<path d="${HEART}" transform="translate(${(cx - 12 * s / 24).toFixed(2)} ${(cy - 12.2 * s / 24).toFixed(2)}) scale(${(s / 24).toFixed(4)})" fill="${fill}"/>`;
  const hubMk = mode === 'color'
    ? `<circle cx="50" cy="50" r="6.5" fill="#0C4A5A"/>${heartMk(50, 50.4, 8.8, 'url(#snGoldLight)')}`
    : heartMk(50, 50.4, 9.4, c);

  return `${badge}
  <g>
    ${[45,135,225,315].map(inter).join('')}
    ${card(90,7,fL,fD,oD)}${card(180,7,fL,fD,oD)}${card(270,7,fL,fD,oD)}
    <g><path d="M50,5 L55.5,41 L50,50 Z" fill="${fN}"/><path d="M50,5 L50,50 L44.5,41 Z" fill="${fL}"/></g>
  </g>
  ${hubMk}`;
}

function svg(viewBox, body, withDefs = true) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${withDefs ? defs() : ''}${body}</svg>\n`;
}

// ---- Wordmark ----
function wordmark({ x, y1, y2, size, anchor = 'start', name = '#0C4A5A', sub = '#C9A24B' }) {
  return `
  <style>${FONT_IMPORT}
    .nm{font-family:'Fraunces',Georgia,serif;font-weight:600;fill:${name};}
    .sb{font-family:'Nunito Sans',sans-serif;font-weight:800;fill:${sub};letter-spacing:0.42em;}
  </style>
  <text x="${x}" y="${y1}" text-anchor="${anchor}" class="nm" font-size="${size}">Senior Navigator</text>
  <text x="${x + (anchor==='start'?2:0)}" y="${y2}" text-anchor="${anchor}" class="sb" font-size="${size*0.30}">SERVICES</text>`;
}

const files = {};

// 1. Mark with badge (color) — primary icon
files['sn-mark.svg'] = svg('0 0 100 100', rose('color', { badge: true }));

// 2. Mark plain (rose only, no badge) — for favicons on light / watermarks
files['sn-mark-plain.svg'] = svg('0 0 100 100', rose('color', { badge: false }));

// 3. Horizontal lockup — on light
files['sn-logo-horizontal.svg'] = svg('0 0 640 170',
  `<g transform="translate(14,25) scale(1.2)">${rose('color',{badge:true})}</g>` +
  wordmark({ x: 172, y1: 82, y2: 116, size: 54 }));

// 4. Horizontal lockup — on dark (wordmark cream)
files['sn-logo-horizontal-dark.svg'] = svg('0 0 640 170',
  `<g transform="translate(14,25) scale(1.2)">${rose('color',{badge:true})}</g>` +
  wordmark({ x: 172, y1: 82, y2: 116, size: 54, name: '#FBF8F2', sub: '#E7CE8E' }));

// 5. Stacked lockup — on light
files['sn-logo-stacked.svg'] = svg('0 0 380 330',
  `<g transform="translate(130,14) scale(1.2)">${rose('color',{badge:true})}</g>` +
  wordmark({ x: 190, y1: 210, y2: 244, size: 46, anchor: 'middle' }));

// 6. Monochrome white (all white) — for photos / dark brand backgrounds
files['sn-logo-mono-white.svg'] = svg('0 0 640 170',
  `<g transform="translate(14,25) scale(1.2)">${rose('mono',{badge:true,color:'#FFFFFF',hubHole:'none'})}</g>` +
  wordmark({ x: 172, y1: 82, y2: 116, size: 54, name: '#FFFFFF', sub: '#FFFFFF' }), false);

// 7. Monochrome teal (one-color) — for single-colour print / stamps
files['sn-logo-mono-teal.svg'] = svg('0 0 640 170',
  `<g transform="translate(14,25) scale(1.2)">${rose('mono',{badge:true,color:'#0C4A5A',hubHole:'none'})}</g>` +
  wordmark({ x: 172, y1: 82, y2: 116, size: 54, name: '#0C4A5A', sub: '#0C4A5A' }), false);

// 8. Favicon (mark, color)
files['favicon.svg'] = svg('0 0 100 100', rose('color', { badge: true }));

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(OUT, name), content);
  console.log('wrote', name, content.length + 'b');
}
