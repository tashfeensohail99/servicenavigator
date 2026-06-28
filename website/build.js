/* Builds every page of the SeniorNavigator Services website. */
const fs = require('fs');
const path = require('path');
const L = require('./_lib.js');
const { icon, BIZ } = L;
const OUT = __dirname;

/* ---------- Reusable content components ---------- */
const SERVICES = [
  ['stethoscope', 'Medical Appointment Companionship', 'A calm, familiar companion to and from every appointment — door-to-door transport, check-in support, and help understanding what the doctor said.', 'Seniors make up nearly 50% of healthcare visits'],
  ['bag', 'Essential Errand Assistance', 'Groceries, pharmacy pick-ups, and everyday errands — safely handled, especially through Canada’s harsh winters when leaving home is hardest.', '34% of seniors struggle with winter errands'],
  ['clipboard', 'Hospital Check-in & Documentation', 'Help with self-check-in kiosks, QR codes, forms and patient portals — and moving confidently between hospital departments.', '60% of seniors struggle with digital check-in'],
  ['heart', 'Companionship & Wellness Checks', 'Regular friendly visits and gentle wellness observations that ease isolation and give families real peace of mind.', 'Over 40% of seniors feel lonely'],
];

function serviceCard(s, link) {
  return `<article class="card card--hover reveal">
    <div class="ic">${icon(s[0])}</div>
    <h3>${s[1]}</h3>
    <p>${s[2]}</p>
    <div class="stat-note">${icon('checkc')} ${s[3]}</div>
    ${link ? `<a class="card-link" href="${link}">Learn more ${icon('arrow')}</a>` : ''}
  </article>`;
}

function quote(text, name, role, initials) {
  return `<figure class="quote reveal">
    <div class="stars" aria-label="5 out of 5 stars">${'★★★★★'}</div>
    <blockquote>“${text}”</blockquote>
    <figcaption class="who"><span class="av">${initials}</span><span><b>${name}</b><span>${role}</span></span></figcaption>
  </figure>`;
}

const TESTIMONIALS = [
  ['My father refuses to miss his dialysis check-ups now. Kamran arrives early, explains everything afterward, and texts me a summary before I’ve even left work. It has lifted an enormous weight off our family.', 'Ayesha R.', 'Daughter · Mississauga', 'AR'],
  ['Being able to speak with someone in Urdu made my mother finally feel comfortable. She looks forward to her companionship visits — it’s the highlight of her week.', 'Bilal K.', 'Son · Brampton', 'BK'],
  ['After my hip surgery I couldn’t manage groceries or my pharmacy runs. Reliable, kind and always on time. I never felt like a burden.', 'Margaret T.', 'Client · Etobicoke', 'MT'],
];

const ARTICLES = [
  ['resource-appointment-prep.html', 'sun', 'Preparing a senior for a medical appointment', 'A simple checklist that turns a stressful clinic visit into a calm, well-organized one.'],
  ['resource-caregiver-burnout.html', 'heart', 'Spotting & easing caregiver burnout', '74% of caregivers report burnout. Here are the early signs — and practical ways to get support.'],
  ['resource-loneliness.html', 'users', 'Helping seniors beat loneliness', 'Why companionship matters for health, and small routines that make a real difference.'],
];

function articleCard(a) {
  return `<article class="card card--hover reveal">
    <div class="ic card--feature-ic" style="background:var(--gold-100);color:var(--gold-700);border-color:var(--gold-200)">${icon(a[1])}</div>
    <h3 style="font-size:1.2rem">${a[2]}</h3>
    <p>${a[3]}</p>
    <a class="card-link" href="${a[0]}">Read article ${icon('arrow')}</a>
  </article>`;
}

/* ---------- HOME ---------- */
const home = `
<section class="hero">
  <svg class="hero-compass" viewBox="0 0 100 100" aria-hidden="true" style="color:#fff"><use href="#sn-compass-line"/></svg>
  <div class="wrap">
    <div class="hero-copy">
      <span class="kicker">Non-medical senior support · Mississauga &amp; the GTA</span>
      <h1>By your side, <span class="accent">every step of the way.</span></h1>
      <p class="lead">Trusted companions who take seniors to medical appointments, navigate hospitals and clinics, run essential errands — and keep families informed after every visit. Warm, reliable care in <strong style="color:#fff">English, Urdu &amp; Pashto</strong>.</p>
      <div class="hero-chips">
        <span class="chip">${icon('shield')} Insured &amp; background-checked</span>
        <span class="chip">${icon('stethoscope')} Founded by a clinical professional</span>
        <span class="chip">${icon('globe')} Multilingual care</span>
      </div>
      <div class="hero-cta btn-row">
        <a class="btn btn--primary btn--lg" href="contact.html">Book a free consultation</a>
        <a class="btn btn--outline-light btn--lg" href="tel:${BIZ.tel}">${icon('phone')} ${BIZ.phone}</a>
      </div>
    </div>
    <div class="hero-card" role="img" aria-label="Example of a visit summary sent to a family">
      <div class="hc-top"><span class="hc-av">SN</span><span><span class="hc-title">Visit summary — Mom’s cardiology appointment</span><br><span class="hc-sub">Today, 2:40 pm · sent securely to family</span></span></div>
      <ul>
        <li>${icon('checkc')} Arrived 15 minutes early and checked in at Credit Valley Hospital.</li>
        <li>${icon('checkc')} Dr. Singh adjusted her blood-pressure medication — notes attached.</li>
        <li>${icon('checkc')} Next appointment booked for July 14, 10:00 am.</li>
        <li>${icon('checkc')} Prescription picked up on the way home.</li>
      </ul>
      <div class="hc-foot">${icon('users')} Shared with 2 family members</div>
    </div>
  </div>
</section>

<section class="section bg-ivory">
  <div class="wrap">
    <div class="center" style="max-width:46rem;margin-inline:auto">
      <span class="kicker" style="justify-content:center">The gap families face</span>
      <h2>Canada is aging faster than almost any country — and families can’t do it all alone</h2>
      <p class="lead">Work, distance and busy lives make it hard to be there for every appointment and errand. That’s exactly where we step in.</p>
    </div>
    <div class="grid g-4" style="margin-top:2.5rem">
      <div class="card center reveal"><div class="stat-big" style="font-family:var(--font-head);font-weight:600;font-size:2.6rem;color:var(--teal-800);line-height:1">7.6M</div><p style="margin:.4rem 0 0;color:var(--muted)">seniors in Canada today — 1 in 5 Canadians, rising to 9.5M by 2035.</p></div>
      <div class="card center reveal"><div class="stat-big" style="font-family:var(--font-head);font-weight:600;font-size:2.6rem;color:var(--teal-800);line-height:1">74%</div><p style="margin:.4rem 0 0;color:var(--muted)">of caregivers report burnout balancing work with caring for a parent.</p></div>
      <div class="card center reveal"><div class="stat-big" style="font-family:var(--font-head);font-weight:600;font-size:2.6rem;color:var(--teal-800);line-height:1">62%</div><p style="margin:.4rem 0 0;color:var(--muted)">of families struggle to get a parent to medical appointments.</p></div>
      <div class="card center reveal"><div class="stat-big" style="font-family:var(--font-head);font-weight:600;font-size:2.6rem;color:var(--teal-800);line-height:1">1.6M</div><p style="margin:.4rem 0 0;color:var(--muted)">seniors now live alone, often without nearby family support.</p></div>
    </div>
  </div>
</section>

<section class="section bg-paper" id="services">
  <div class="wrap">
    <div class="center" style="max-width:44rem;margin-inline:auto">
      <span class="kicker" style="justify-content:center">What we do</span>
      <h2>Dependable, non-medical support — wherever seniors need a hand</h2>
      <p class="lead">Four core services, designed around real daily challenges. Always non-medical, always delivered with patience and dignity.</p>
    </div>
    <div class="grid g-4" style="margin-top:2.5rem">
      ${SERVICES.map(s => serviceCard(s, 'services.html')).join('')}
    </div>
    <div class="card reveal" style="margin-top:1.6rem;display:flex;gap:1.3rem;align-items:center;border:2px solid var(--gold-200);background:var(--gold-100)">
      <div class="ic" style="background:#fff;color:var(--gold-700);border-color:var(--gold-200);flex:none">${icon('message')}</div>
      <div><h3 style="margin-bottom:.2em">Family Update &amp; Care Coordination <span class="badge">Signature add-on</span></h3><p style="margin:0;color:var(--ink-soft)">After every visit, families receive a clear summary — what happened, what the doctor said, and what’s next. The reassurance of being there, even when you can’t be.</p></div>
    </div>
  </div>
</section>

<section class="section bg-cream">
  <div class="wrap">
    <div class="center" style="max-width:42rem;margin-inline:auto"><span class="kicker" style="justify-content:center">How it works</span><h2>Getting started is simple</h2></div>
    <div class="grid g-3" style="margin-top:2.5rem">
      <div class="step reveal" style="grid-template-columns:1fr"><div class="num"></div><div><h3>Free consultation</h3><p>We listen, understand your loved one’s needs, and build a simple care profile — no obligation, no pressure.</p></div></div>
      <div class="step reveal" style="grid-template-columns:1fr"><div class="num"></div><div><h3>Matched, scheduled visits</h3><p>We arrange reliable visits that fit your routine — single appointments or ongoing weekly support.</p></div></div>
      <div class="step reveal" style="grid-template-columns:1fr"><div class="num"></div><div><h3>After-visit family update</h3><p>You receive a clear summary after every visit, so the whole family stays informed and reassured.</p></div></div>
    </div>
    <div class="center" style="margin-top:2.5rem"><a class="btn btn--teal" href="how-it-works.html">See how it works ${icon('arrow')}</a></div>
  </div>
</section>

<section class="section bg-paper">
  <div class="wrap"><div class="split">
    <div class="split-media"><div class="media-panel">
      <svg class="illus" viewBox="0 0 100 100" aria-hidden="true" style="color:var(--gold-300)"><use href="#sn-compass-line"/></svg>
      <span class="ph-note">Replace with founder / care photography</span>
    </div></div>
    <div>
      <span class="kicker">Why families choose us</span>
      <h2>The reassurance of a professional — the warmth of a friend</h2>
      <p class="lead">SeniorNavigator was founded by Kamran Hamayun, who spent years caring for vulnerable patients in dialysis units and hospitals. That clinical calm now guides every visit.</p>
      <ul class="checks">
        <li>${icon('check')}<span><strong>Clinically experienced founder.</strong> Years in real hospital and dialysis settings — comfortable navigating complex healthcare environments.</span></li>
        <li>${icon('check')}<span><strong>Insured &amp; accountable.</strong> Non-medical liability coverage, background checks and clear safety protocols.</span></li>
        <li>${icon('check')}<span><strong>Multilingual &amp; culturally sensitive.</strong> Care in English, Urdu and Pashto for Canada’s diverse senior community.</span></li>
        <li>${icon('check')}<span><strong>Slow-paced, patient communication.</strong> We move at the senior’s pace and explain everything clearly.</span></li>
        <li>${icon('check')}<span><strong>Families always informed.</strong> A summary after every visit — never left wondering.</span></li>
      </ul>
      <div class="btn-row" style="margin-top:1.6rem"><a class="btn btn--primary" href="about.html">Meet the founder ${icon('arrow')}</a></div>
    </div>
  </div></div>
</section>

<section class="section bg-gradient">
  <div class="wrap">
    <div class="stats">
      <div class="stat reveal"><div class="num">Free</div><div class="lab">Your first consultation — always no-obligation</div></div>
      <div class="stat reveal"><div class="num">3</div><div class="lab">Languages — English, Urdu &amp; Pashto</div></div>
      <div class="stat reveal"><div class="num">$35–55</div><div class="lab">Transparent hourly rate — no hidden fees</div></div>
      <div class="stat reveal"><div class="num">6&nbsp;days</div><div class="lab">A week, 8 am – 8 pm, including evenings &amp; weekends</div></div>
    </div>
  </div>
</section>

<section class="section bg-ivory">
  <div class="wrap">
    <div class="center" style="max-width:42rem;margin-inline:auto"><span class="kicker" style="justify-content:center">Trusted by families</span><h2>Kind words from the families we serve</h2></div>
    <div class="grid g-3" style="margin-top:2.5rem">${TESTIMONIALS.map(t => quote(t[0], t[1], t[2], t[3])).join('')}</div>
    <p class="center form-note" style="margin-top:1.4rem">Illustrative testimonials for launch — to be replaced with real, consented client reviews.</p>
  </div>
</section>

<section class="section bg-paper">
  <div class="wrap">
    <div class="split">
      <div>
        <span class="kicker">Where we serve</span>
        <h2>Proudly based in Mississauga, serving the Greater Toronto Area</h2>
        <p class="lead">Reliable, local support across Peel and the western GTA — with culturally familiar care that immigrant families can trust.</p>
        <div class="grid g-2" style="gap:.6rem 1rem;margin-top:1rem">
          ${['Mississauga','Brampton','Etobicoke','Oakville','Toronto (West)','Streetsville'].map(c => `<span style="display:flex;gap:.5em;align-items:center;font-weight:700;color:var(--ink)">${icon('pin','')} ${c}</span>`).join('')}
        </div>
        <div class="btn-row" style="margin-top:1.6rem"><a class="btn btn--ghost" href="service-areas.html">View all service areas ${icon('arrow')}</a></div>
      </div>
      <div class="split-media"><div class="media-panel" style="min-height:300px;background:linear-gradient(150deg,var(--teal-600),var(--teal-900))">
        <svg class="illus" viewBox="0 0 100 100" aria-hidden="true" style="color:rgba(255,255,255,.85);width:46%"><use href="#sn-mark"/></svg>
        <span class="ph-note">Service-area map placeholder — embed Google Map</span>
      </div></div>
    </div>
  </div>
</section>

<section class="section bg-cream">
  <div class="wrap">
    <div class="center" style="max-width:42rem;margin-inline:auto"><span class="kicker" style="justify-content:center">Helpful resources</span><h2>Guidance for seniors &amp; the families who love them</h2></div>
    <div class="grid g-3" style="margin-top:2.5rem">${ARTICLES.map(articleCard).join('')}</div>
    <div class="center" style="margin-top:2rem"><a class="btn btn--teal" href="resources.html">Browse all resources ${icon('arrow')}</a></div>
  </div>
</section>

<section class="section bg-ivory">
  <div class="wrap"><div class="cta-band">
    <span class="kicker" style="justify-content:center;color:var(--gold-300)">Ready when you are</span>
    <h2>Let’s make the next appointment an easy one</h2>
    <p>Book a free, no-obligation consultation today. We’ll listen, answer your questions, and show you exactly how we can help your family.</p>
    <div class="btn-row btn-row--center" style="margin-top:1.6rem">
      <a class="btn btn--primary btn--lg" href="contact.html">Book a free consultation</a>
      <a class="btn btn--outline-light btn--lg" href="tel:${BIZ.tel}">${icon('phone')} Call ${BIZ.phone}</a>
    </div>
  </div></div>
</section>`;

/* ---------- inner-page helpers ---------- */
function crumbs(items) {
  return `<nav class="crumbs" aria-label="Breadcrumb">` + items.map((it, i) =>
    i < items.length - 1 ? `<a href="${it[1]}">${it[0]}</a>${icon('chevron')}` : `<span>${it[0]}</span>`
  ).join('') + `</nav>`;
}
function pageHero(kic, title, sub, crumbItems) {
  return `<section class="page-hero"><div class="wrap">
    ${crumbs(crumbItems)}
    <span class="kicker">${kic}</span>
    <h1>${title}</h1>
    <p>${sub}</p>
  </div></section>`;
}
function ctaBand(title, text) {
  return `<section class="section bg-ivory"><div class="wrap"><div class="cta-band">
    <span class="kicker" style="justify-content:center;color:var(--gold-300)">Ready when you are</span>
    <h2>${title}</h2><p>${text}</p>
    <div class="btn-row btn-row--center" style="margin-top:1.6rem">
      <a class="btn btn--primary btn--lg" href="contact.html">Book a free consultation</a>
      <a class="btn btn--outline-light btn--lg" href="tel:${BIZ.tel}">${icon('phone')} ${BIZ.phone}</a>
    </div></div></div></section>`;
}
const nonMedicalBox = `<div class="card reveal" style="border-left:5px solid var(--gold-500);background:var(--gold-100)">
  <h3 style="display:flex;align-items:center;gap:.5em">${icon('shield')} A clear, non-medical scope</h3>
  <p style="margin:0">For your family’s protection and ours, SeniorNavigator provides <strong>companionship, navigation and errand support only</strong>. We do not provide nursing, personal care, medication administration, medical advice, or any regulated health service. This keeps our care simple, transparent and trustworthy.</p></div>`;

/* ================= SERVICES ================= */
const serviceDetail = (ic, name, lead, included, helps, featured) => `
<section class="section ${featured ? 'bg-paper' : 'bg-ivory'}"><div class="wrap"><div class="split ${featured ? '' : 'split--reverse'}">
  <div class="split-media"><div class="media-panel" style="${featured ? '' : 'background:linear-gradient(150deg,var(--teal-600),var(--teal-900))'}">
    <svg class="illus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color:var(--gold-300);width:40%">${L.ICONS[ic]}</svg>
  </div></div>
  <div><span class="kicker">Service</span><h2>${name}</h2><p class="lead">${lead}</p>
    <h4 style="margin-top:1.2rem">What’s included</h4>
    <ul class="checks" style="margin-top:.6rem">${included.map(i => `<li>${icon('check')}<span>${i}</span></li>`).join('')}</ul>
    <p style="margin-top:1.1rem;color:var(--gold-700);font-weight:800;display:flex;gap:.5em;align-items:center">${icon('users')} ${helps}</p>
  </div>
</div></div></section>`;

const servicesPage = `
${pageHero('What we do', 'Non-medical senior support, done with warmth and care', 'Four dependable services — plus our signature family-update add-on — designed around the real daily challenges seniors and their families face across the GTA.', [['Home', 'index.html'], ['Services', 'services.html']])}
<section class="section bg-paper"><div class="wrap" style="max-width:var(--wrap-narrow)">${nonMedicalBox}</div></section>
${serviceDetail('stethoscope', 'Medical Appointment Companionship', 'A calm, familiar face from your door to the clinic and back again. We make sure no senior has to face an appointment — or a confusing set of instructions — alone.', ['Door-to-door transport in a safe, clean vehicle', 'Check-in support at the clinic, hospital or lab', 'A reassuring presence during the appointment', 'Help understanding and remembering follow-up instructions', 'A pharmacy or lab stop on the way home', 'A clear summary sent to your family afterward'], 'For seniors who attend regular check-ups, specialists or dialysis — nearly half of all healthcare visits in Canada are by seniors.', true)}
${serviceDetail('bag', 'Essential Errand Assistance', 'Groceries, prescriptions and everyday errands handled safely and reliably — especially through Canada’s harsh winters, when leaving home is hardest.', ['Grocery shopping and delivery to the door', 'Pharmacy pick-ups and refills', 'Help carrying, unpacking and organizing', 'Bill payments and small household errands', 'Winter-safe support when sidewalks are icy'], 'For seniors with mobility or transport challenges — 34% struggle with errands in winter.', false)}
${serviceDetail('clipboard', 'Hospital Check-in & Documentation Support', 'Modern hospitals run on kiosks, QR codes and patient portals. We help seniors navigate the paperwork and move confidently through every department.', ['Self-check-in kiosks and QR codes', 'Forms, paperwork and patient portals', 'Navigating between departments and floors', 'Keeping appointment documents organized', 'Explaining next steps in plain language'], 'For seniors overwhelmed by digital systems — 60% struggle with hospital check-in technology.', true)}
${serviceDetail('heart', 'Companionship & Wellness Checks', 'Regular, friendly visits that ease isolation, lift spirits, and give families the comfort of knowing someone is checking in.', ['Warm, unhurried companionship and conversation', 'Gentle wellness observations and check-ins', 'Support with routines and staying active', 'Multilingual company in English, Urdu or Pashto', 'A note to family after each visit'], 'For seniors living alone — more than 40% of Canadian seniors experience loneliness.', false)}
<section class="section bg-paper"><div class="wrap">
  <div class="card reveal" style="border:2px solid var(--gold-300);background:linear-gradient(160deg,#fff,var(--gold-100));display:flex;gap:1.4rem;align-items:center;flex-wrap:wrap">
    <div class="ic" style="background:var(--teal-800);color:var(--gold-300);width:64px;height:64px;flex:none">${icon('message')}</div>
    <div style="flex:1;min-width:260px"><h3>Family Update &amp; Care Coordination <span class="badge">Signature add-on</span></h3>
    <p style="margin:0">The difference families feel most. After every visit, you receive a clear, written summary — what happened, what the doctor said, and what’s next — so the whole family stays informed and reassured, wherever they are. Included with appointment companionship; available as an add-on to any service.</p></div>
  </div>
</div></section>
${ctaBand('Not sure which service fits? Let’s talk it through.', 'Tell us about your loved one and we’ll recommend the right support — with no obligation. Most families start with a single appointment or a weekly visit.')}`;

/* ================= HOW IT WORKS ================= */
const howPage = `
${pageHero('Simple from day one', 'How SeniorNavigator works', 'From your first call to the summary after every visit — getting dependable support for your loved one is calm, clear and easy.', [['Home', 'index.html'], ['How It Works', 'how-it-works.html']])}
<section class="section bg-paper"><div class="wrap" style="max-width:820px">
  <div class="steps">
    <div class="step reveal"><div class="num"></div><div><h3>A free, friendly consultation</h3><p>Call or book online and we’ll have a relaxed conversation about your loved one — their routine, their appointments, the languages they’re most comfortable in, and where a hand would help most. We build a simple care profile. No cost, no pressure.</p></div></div>
    <div class="step reveal"><div class="num"></div><div><h3>A matched, scheduled plan</h3><p>We arrange visits that fit your family’s routine — a single appointment, a weekly errand run, or ongoing companionship. You’ll know exactly who is coming, when, and what to expect.</p></div></div>
    <div class="step reveal"><div class="num"></div><div><h3>Reliable, caring visits</h3><p>Your companion arrives on time, in uniform and fully prepared — moving at your loved one’s pace, communicating clearly, and treating them with patience and dignity throughout.</p></div></div>
    <div class="step reveal"><div class="num"></div><div><h3>A summary after every visit</h3><p>You receive a clear update — what happened, any instructions from the doctor, and what’s coming next. The reassurance of being there, even when you can’t be.</p></div></div>
  </div>
</div></section>
<section class="section bg-cream"><div class="wrap"><div class="grid g-3">
  <div class="card reveal"><div class="ic">${icon('shield')}</div><h3>Insured &amp; accountable</h3><p>We carry non-medical liability coverage, complete background checks, and follow clear safety protocols on every visit.</p></div>
  <div class="card reveal"><div class="ic">${icon('globe')}</div><h3>Multilingual by design</h3><p>Care delivered in English, Urdu and Pashto — so seniors and families feel understood and respected.</p></div>
  <div class="card reveal"><div class="ic">${icon('clock')}</div><h3>Flexible scheduling</h3><p>Available six days a week, 8 am – 8 pm, including evenings and weekends to match appointment times.</p></div>
</div></div></section>
${ctaBand('Your first consultation is free', 'Let’s find the right support for your family. It starts with a simple conversation.')}`;

/* ================= PRICING ================= */
const priceCard = (tag, name, amt, unit, per, items, featured) => `
<div class="price ${featured ? 'price--featured' : ''} reveal">${tag ? `<span class="tag">${tag}</span>` : ''}
  <h3>${name}</h3>
  <div class="amt">${amt}<span> ${unit}</span></div>
  <div class="per">${per}</div>
  <ul>${items.map(i => `<li>${icon('check')}<span>${i}</span></li>`).join('')}</ul>
  <a class="btn ${featured ? 'btn--primary' : 'btn--ghost'}" href="contact.html" style="width:100%">Book a free consultation</a>
</div>`;
const pricingPage = `
${pageHero('Transparent pricing', 'Honest, simple rates — no hidden fees', 'Quality non-medical support at fair, market-aligned rates. Your first consultation is always free, and you’ll never be surprised by a bill.', [['Home', 'index.html'], ['Pricing', 'pricing.html']])}
<section class="section bg-paper"><div class="wrap">
  <div class="price-grid">
    ${priceCard('Most popular', 'Appointment Companionship', '$45–$70', '/ visit', 'Per medical-appointment visit', ['Door-to-door transport', 'Check-in &amp; paperwork support', 'In-appointment companionship', 'Help with follow-up instructions', 'Pharmacy / lab stop included', 'After-visit family summary'], true)}
    ${priceCard('', 'Hourly Companion Care', '$35–$55', '/ hour', 'For errands, wellness &amp; daily support', ['Groceries &amp; pharmacy errands', 'Friendly companionship visits', 'Gentle wellness check-ins', 'Light help around appointments', 'Multilingual care', 'Minimum 2 hours per visit'], false)}
    ${priceCard('Best value', 'Ongoing Care Plans', 'Custom', '', 'Weekly or monthly bundles', ['Priority, recurring scheduling', 'A consistent, dedicated companion', 'Discounted bundled rates', 'Monthly family care report', 'Coordination across appointments', 'Tailored to your family’s needs'], false)}
  </div>
  <div class="grid g-2" style="margin-top:2rem">
    <div class="card reveal"><h3 style="display:flex;gap:.5em;align-items:center">${icon('checkc')} What’s always included</h3>
      <ul class="checks" style="margin-top:.6rem">
        <li>${icon('check')}<span>A free, no-obligation first consultation</span></li>
        <li>${icon('check')}<span>An insured, background-checked companion</span></li>
        <li>${icon('check')}<span>Patient, slow-paced, multilingual communication</span></li>
        <li>${icon('check')}<span>A summary shared with your family after each visit</span></li>
      </ul></div>
    <div class="card reveal"><h3 style="display:flex;gap:.5em;align-items:center">${icon('clock')} Good to know</h3>
      <ul class="checks" style="margin-top:.6rem">
        <li>${icon('check')}<span>Evening, weekend or longer-distance visits may carry an adjusted rate — always quoted up front.</span></li>
        <li>${icon('check')}<span>Errand purchases (groceries, prescriptions) are billed at cost.</span></li>
        <li>${icon('check')}<span>Simple cancellation: 24 hours’ notice, no fee.</span></li>
        <li>${icon('check')}<span>Pay by e-transfer, credit card or invoice.</span></li>
      </ul></div>
  </div>
  <p class="form-note center" style="margin-top:1.4rem">Rates reflect typical Canadian non-medical senior-support pricing and may be tailored to your family’s situation. Contact us for an exact quote.</p>
</div></section>
${ctaBand('Let’s build a plan that fits your budget', 'Tell us what you need and we’ll recommend the most cost-effective way to support your loved one.')}`;

/* ================= SERVICE AREAS ================= */
const AREAS_PRIMARY = ['Mississauga', 'Streetsville', 'Port Credit', 'Cooksville', 'Erin Mills', 'Meadowvale'];
const AREAS_GTA = ['Brampton', 'Etobicoke', 'Oakville', 'Toronto (West)', 'Milton', 'Halton', 'Vaughan*', 'North York*'];
const areasPage = `
${pageHero('Where we serve', 'Local, reliable care across Mississauga &amp; the GTA', 'Proudly based in Mississauga, we provide dependable senior support throughout Peel Region and the western Greater Toronto Area — with the cultural familiarity immigrant families value.', [['Home', 'index.html'], ['Service Areas', 'service-areas.html']])}
<section class="section bg-paper"><div class="wrap"><div class="split">
  <div>
    <span class="kicker">Primary service area</span><h2>Mississauga &amp; surrounding neighbourhoods</h2>
    <p class="lead">Our home base. Same-week scheduling and the fastest response across these communities.</p>
    <div class="grid g-2" style="gap:.6rem 1rem;margin-top:1rem">${AREAS_PRIMARY.map(c => `<span style="display:flex;gap:.5em;align-items:center;font-weight:700;color:var(--ink)">${icon('pin')} ${c}</span>`).join('')}</div>
    <h4 style="margin-top:1.8rem">Also serving across the GTA</h4>
    <div class="grid g-2" style="gap:.6rem 1rem;margin-top:.6rem">${AREAS_GTA.map(c => `<span style="display:flex;gap:.5em;align-items:center;font-weight:700;color:var(--ink-soft)">${icon('pin')} ${c}</span>`).join('')}</div>
    <p class="form-note" style="margin-top:1rem">* Expanding to these areas — call to confirm current availability.</p>
  </div>
  <div class="split-media"><div class="media-panel" style="min-height:360px">
    <svg class="illus" viewBox="0 0 100 100" aria-hidden="true" style="color:var(--gold-300);width:46%"><use href="#sn-compass-line"/></svg>
    <span class="ph-note">Embed an interactive Google Map of the service area here</span>
  </div></div>
</div></div></section>
<section class="section bg-cream"><div class="wrap center" style="max-width:42rem;margin-inline:auto">
  <h2>Don’t see your community?</h2><p class="lead">We’re growing across the GTA. Call us — there’s a good chance we can help, or we’ll point you to someone who can.</p>
  <div class="btn-row btn-row--center"><a class="btn btn--teal" href="tel:${BIZ.tel}">${icon('phone')} ${BIZ.phone}</a></div>
</div></section>
${ctaBand('Care that comes to your neighbourhood', 'Wherever you are in the western GTA, dependable support is one call away.')}`;

/* ================= ABOUT ================= */
const VALUES = [
  ['heart', 'Compassionate care', 'Warm, respectful, patient-centred support that reflects Canada’s commitment to dignity in aging.'],
  ['shield', 'Trust &amp; reliability', 'Dependable, on-time assistance — because in healthcare, showing up matters.'],
  ['globe', 'Cultural inclusivity', 'Multilingual, culturally sensitive care for Canada’s diverse senior community.'],
  ['checkc', 'Safety &amp; accountability', 'High safety standards on every visit, hospital trip and errand.'],
  ['users', 'Community commitment', 'Helping seniors stay independent and socially connected in their own neighbourhoods.'],
  ['clipboard', 'Integrity &amp; privacy', 'Protecting client information and respecting confidentiality at all times.'],
];
const aboutPage = `
${pageHero('Our story', 'Care born from real experience', 'SeniorNavigator Services was founded on a simple belief: no older adult should have to navigate a hospital corridor, a check-in kiosk, or a confusing set of instructions alone.', [['Home', 'index.html'], ['About', 'about.html']])}
<section class="section bg-paper"><div class="wrap"><div class="split">
  <div class="split-media"><div class="media-panel" style="min-height:420px">
    <svg class="illus" viewBox="0 0 100 100" aria-hidden="true" style="color:var(--gold-300);width:48%"><use href="#sn-mark"/></svg>
    <span class="ph-note">Replace with a professional photo of the founder</span>
  </div></div>
  <div>
    <span class="kicker">Meet the founder</span><h2>Kamran Hamayun</h2>
    <p class="lead">Founder &amp; Director — and the steady, reassuring presence behind every visit.</p>
    <p>Kamran spent years on the front lines of healthcare as a <strong>Clinical Dialysis Technician</strong> at the Institute of Kidney Diseases and Mercy Teaching Hospital, caring for elderly and medically fragile patients during life-sustaining treatments. He learned to stay calm under pressure, to communicate clearly with frightened patients, and to treat every person with patience and dignity.</p>
    <p>He holds a <strong>Paramedical Diploma in Dialysis Technology</strong> and an <strong>LLB (Bachelor of Law)</strong> from the University of Peshawar — a rare combination that brings both healthcare familiarity and careful, accurate handling of documents and privacy. He is fluent in <strong>English, Urdu and Pashto</strong>.</p>
    <p>SeniorNavigator is strictly non-medical, but Kamran’s clinical background gives families a deep sense of trust: their loved one is accompanied by someone who genuinely understands hospital systems — and who treats every senior the way he would his own family.</p>
  </div>
</div></div></section>
<section class="section bg-cream"><div class="wrap"><div class="grid g-2">
  <div class="card reveal"><div class="ic">${icon('route')}</div><h3>Our mission</h3><p>To provide compassionate, reliable, culturally sensitive non-medical support that helps seniors in Canada navigate medical appointments, daily errands and essential tasks with dignity, confidence and independence — easing the burden on families and caregivers.</p></div>
  <div class="card reveal"><div class="ic">${icon('award')}</div><h3>Our vision</h3><p>To become Canada’s most trusted senior support and companionship provider — setting a national standard for non-medical appointment navigation, community-based assistance and dignified aging.</p></div>
</div></div></section>
<section class="section bg-paper"><div class="wrap">
  <div class="center" style="max-width:42rem;margin-inline:auto"><span class="kicker" style="justify-content:center">What we stand for</span><h2>Our values</h2></div>
  <div class="grid g-3" style="margin-top:2.5rem">${VALUES.map(v => `<div class="card reveal"><div class="ic">${icon(v[0])}</div><h3 style="font-size:1.2rem">${v[1]}</h3><p style="margin:0">${v[2]}</p></div>`).join('')}</div>
</div></section>
${ctaBand('Let our family care for yours', 'We’d be honoured to support your loved one. Start with a free, friendly consultation.')}`;

/* ================= RESOURCES (blog index) ================= */
const ALL_ARTICLES = [
  ['resource-appointment-prep.html', 'sun', 'Preparing a senior for a medical appointment', 'A simple checklist that turns a stressful clinic visit into a calm, well-organized one — what to bring, what to ask, and how to remember it all.'],
  ['resource-caregiver-burnout.html', 'heart', 'Spotting &amp; easing caregiver burnout', '74% of caregivers report burnout. Learn the early warning signs — and practical, judgement-free ways to get support before you’re running on empty.'],
  ['resource-loneliness.html', 'users', 'Helping seniors beat loneliness', 'Loneliness affects more than 40% of seniors and harms their health. Here’s why companionship matters and small routines that make a real difference.'],
  ['resource-winter-safety.html', 'snow', 'A winter safety checklist for seniors', 'Canadian winters are hard on older adults. A practical guide to staying safe, mobile and well-supplied when the sidewalks turn to ice.'],
];
const resourcesPage = `
${pageHero('Resources', 'Guidance for seniors &amp; the families who love them', 'Practical, compassionate advice on appointments, caregiving, loneliness and staying safe — written for Canadian families navigating the journey of aging.', [['Home', 'index.html'], ['Resources', 'resources.html']])}
<section class="section bg-paper"><div class="wrap"><div class="grid g-2">
  ${ALL_ARTICLES.map(a => `<article class="card card--hover reveal" style="display:flex;gap:1.2rem;align-items:flex-start">
    <div class="ic" style="background:var(--gold-100);color:var(--gold-700);border-color:var(--gold-200);flex:none">${icon(a[1])}</div>
    <div><h3 style="font-size:1.25rem">${a[2]}</h3><p>${a[3]}</p><a class="card-link" href="${a[0]}">Read article ${icon('arrow')}</a></div>
  </article>`).join('')}
</div>
<div class="card reveal" style="margin-top:1.6rem;text-align:center;background:var(--teal-50);border-color:var(--teal-100)">
  <p style="margin:0;font-size:1.05rem"><strong>New resources every month.</strong> Follow us on
  <a href="${BIZ.fb}">Facebook</a> and <a href="${BIZ.ig}">Instagram</a> for weekly tips, or
  <a href="contact.html">get in touch</a> with a question about your loved one.</p>
</div>
</div></section>
${ctaBand('Have a question we haven’t answered?', 'Our team is glad to help — no obligation, just honest guidance for your family.')}`;

/* ================= ARTICLE template ================= */
function article(file, ic, title, sub, intro, sections, takeaway) {
  return {
    file, title: title.replace(/&amp;/g, '&') + ' — SeniorNavigator Services', desc: sub.replace(/<[^>]+>/g, '').slice(0, 155), path: file, active: 'resources',
    body: `${pageHero('Resource', title, sub, [['Home', 'index.html'], ['Resources', 'resources.html'], [title.replace(/&amp;/g, '&'), file]])}
<section class="section bg-paper"><div class="wrap" style="max-width:760px"><div class="prose">
  <p class="lead">${intro}</p>
  ${sections.map(s => `<h2>${s[0]}</h2>${s[1]}`).join('')}
  <div class="card" style="margin-top:2rem;background:var(--gold-100);border-color:var(--gold-200)">
    <h3 style="display:flex;gap:.5em;align-items:center">${icon('checkc')} The takeaway</h3><p style="margin:0">${takeaway}</p>
  </div>
  <div class="card" style="margin-top:1.2rem;background:var(--teal-50);border-color:var(--teal-100);text-align:center">
    <p style="margin:0"><strong>SeniorNavigator can help with this.</strong> We support seniors across Mississauga and the GTA with appointments, errands and companionship — in English, Urdu and Pashto.</p>
    <div class="btn-row btn-row--center" style="margin-top:1rem"><a class="btn btn--primary" href="contact.html">Book a free consultation</a><a class="btn btn--ghost" href="tel:${BIZ.tel}">${icon('phone')} ${BIZ.phone}</a></div>
  </div>
</div></div></section>`
  };
}
const articleAppt = article('resource-appointment-prep.html', 'sun', 'Preparing a senior for a medical appointment',
  'A little preparation turns a stressful clinic visit into a calm, well-organized one. Here’s a simple checklist families can use.',
  'Medical appointments can feel overwhelming for older adults — new buildings, digital check-ins, rushed conversations, and a lot of information to remember. A short routine before, during and after the visit makes an enormous difference.',
  [
    ['Before the appointment', '<ul><li>Write down the reason for the visit and the top 3 questions to ask.</li><li>Gather a current medication list (or bring the bottles).</li><li>Bring the health card, glasses, hearing aids and a small snack and water.</li><li>Confirm the time, location, parking and whether a fasting or sample is needed.</li><li>Plan to arrive 15 minutes early for check-in.</li></ul>'],
    ['During the appointment', '<ul><li>Help with the check-in kiosk or QR code so it isn’t a barrier.</li><li>Take simple notes — what the doctor said, any changes to medication, next steps.</li><li>Don’t be afraid to ask the doctor to slow down or repeat instructions.</li><li>Confirm the follow-up: tests, referrals, or the next appointment date.</li></ul>'],
    ['After the appointment', '<ul><li>Review the instructions together in plain language before leaving the parking lot.</li><li>Pick up any prescriptions on the way home.</li><li>Add the next appointment to a shared family calendar.</li><li>Share a quick summary with other family members.</li></ul>'],
  ],
  'Preparation and a calm companion are the two biggest factors in a smooth appointment. If your family can’t always be there, a trusted companion can handle every step — and keep you informed afterward.');
const articleBurnout = article('resource-caregiver-burnout.html', 'heart', 'Spotting &amp; easing caregiver burnout',
  'Caring for an aging parent while holding down a job is one of the hardest balancing acts there is. Recognizing burnout early — and accepting help — is not weakness; it’s wisdom.',
  'Roughly <strong>74% of Canadian caregivers</strong> report stress and burnout from juggling work with caring for aging relatives. Burnout creeps in slowly, and many caregivers feel guilty even acknowledging it. You are not alone, and support exists.',
  [
    ['Early warning signs', '<ul><li>Constant exhaustion, even after rest.</li><li>Irritability, anxiety, or feeling resentful then guilty.</li><li>Falling behind at work or withdrawing from friends.</li><li>Neglecting your own health, sleep or appointments.</li><li>Feeling that no amount of effort is ever enough.</li></ul>'],
    ['Practical ways to ease the load', '<ul><li>Share the load — divide tasks among siblings or family, and write them down.</li><li>Delegate the logistics: appointment transport, errands and check-ins can be handled by a trusted companion.</li><li>Protect a small amount of time each week that is just for you.</li><li>Use a shared calendar and a simple update system so you’re not the only one who knows everything.</li><li>Talk to your doctor or a caregiver support line if the weight feels too heavy.</li></ul>'],
    ['Where a companion service helps', '<p>Bringing in dependable, non-medical support for appointments and errands removes the most time-consuming, stressful tasks from your plate — while keeping you fully informed with an update after every visit. It’s often the single change that lets caregivers breathe again.</p>'],
  ],
  'Burnout is a signal, not a failure. Sharing the practical load — especially appointments and errands — protects both you and the person you’re caring for.');
const articleLonely = article('resource-loneliness.html', 'users', 'Helping seniors beat loneliness',
  'Loneliness isn’t just sad — it’s a genuine health risk for older adults. The good news: small, consistent human connection makes a measurable difference.',
  'More than <strong>40% of Canadian seniors</strong> experience loneliness, which is linked to depression, cognitive decline and higher rates of hospitalization. For seniors living alone — now over 1.6 million Canadians — regular connection is as important as any errand.',
  [
    ['Why companionship matters', '<ul><li>Regular interaction supports mood, memory and motivation.</li><li>A familiar visitor notices changes early — a fall risk, low spirits, a missed meal.</li><li>Connection encourages seniors to stay active and engaged.</li></ul>'],
    ['Small routines that help', '<ul><li>A standing weekly visit gives something to look forward to.</li><li>Shared activities — a walk, tea, a card game, a favourite show.</li><li>Conversation in a senior’s first language brings real comfort and ease.</li><li>Gentle wellness check-ins that families hear about afterward.</li></ul>'],
    ['Connection your family can count on', '<p>When relatives live far away or work full-time, a consistent companionship visit fills the gap — providing genuine human warmth and giving families peace of mind that someone is checking in.</p>'],
  ],
  'Loneliness responds to consistency. A regular, friendly visit — ideally in the senior’s own language — protects both emotional and physical health.');
const articleWinter = article('resource-winter-safety.html', 'snow', 'A winter safety checklist for seniors',
  'Canadian winters bring ice, cold and isolation — a dangerous combination for older adults. A little planning keeps seniors safe, mobile and well-supplied.',
  'Around <strong>34% of seniors</strong> report difficulty with errands and mobility in winter. Falls, missed appointments and running low on essentials all spike when the temperature drops. Here’s how to prepare.',
  [
    ['Around the home', '<ul><li>Keep walkways and steps salted and clear of ice.</li><li>Place non-slip mats at entrances and remove trip hazards.</li><li>Ensure good lighting for early-dark evenings.</li><li>Set the heat to a safe, steady temperature and check for drafts.</li></ul>'],
    ['Getting out safely', '<ul><li>Wear sturdy, non-slip winter boots and use a cane or walker if needed.</li><li>Avoid going out alone on icy days — arrange transport or a companion.</li><li>Schedule appointments for daylight hours when possible.</li></ul>'],
    ['Staying stocked &amp; connected', '<ul><li>Keep a two-week supply of medications and essentials on hand.</li><li>Arrange reliable grocery and pharmacy support so no one risks an icy trip.</li><li>Check in regularly — isolation rises sharply in winter months.</li></ul>'],
  ],
  'Winter is when dependable errand and transport support matters most. A trusted companion keeps seniors safe, supplied and connected through the coldest months.');

/* ================= PARTNERS ================= */
const partnersPage = `
${pageHero('For healthcare partners', 'A trusted companion you can refer with confidence', 'Clinics, pharmacies, hospitals and social workers across the GTA refer patients who need a reliable, non-medical hand. We make your patients’ outpatient journeys smoother — and lighten the load on your team.', [['Home', 'index.html'], ['For Partners', 'partners.html']])}
<section class="section bg-paper"><div class="wrap"><div class="grid g-3">
  <div class="card reveal"><div class="ic">${icon('building')}</div><h3>Fewer no-shows</h3><p>Reliable transport and check-in support help your patients arrive on time and prepared — improving appointment compliance.</p></div>
  <div class="card reveal"><div class="ic">${icon('clipboard')}</div><h3>Smoother visits</h3><p>We help seniors with kiosks, paperwork and follow-up instructions, freeing your front-desk and clinical staff.</p></div>
  <div class="card reveal"><div class="ic">${icon('globe')}</div><h3>Language support</h3><p>Multilingual companionship in English, Urdu and Pashto for patients who struggle with language barriers.</p></div>
</div></div></section>
<section class="section bg-cream"><div class="wrap"><div class="split">
  <div><span class="kicker">How referrals work</span><h2>Simple, respectful, and always non-medical</h2>
    <ul class="checks" style="margin-top:1rem">
      <li>${icon('check')}<span>Share our brochure or number with families who need support.</span></li>
      <li>${icon('check')}<span>We handle the consultation, scheduling and transport.</span></li>
      <li>${icon('check')}<span>With consent, we coordinate around your appointment times.</span></li>
      <li>${icon('check')}<span>We stay strictly within a non-medical scope — no clinical overlap.</span></li>
    </ul>
    <div class="btn-row" style="margin-top:1.6rem">
      <a class="btn btn--primary" href="mailto:${BIZ.email}?subject=Healthcare%20partnership%20enquiry">${icon('mail')} Email our partnerships team</a>
      <a class="btn btn--ghost" href="#" onclick="return false">${icon('download')} Download brochure (PDF)</a>
    </div>
    <p class="form-note" style="margin-top:.8rem">Brochure available on request — multilingual versions for clinics and community centres.</p>
  </div>
  <div class="split-media"><div class="media-panel" style="min-height:340px"><svg class="illus" viewBox="0 0 100 100" style="color:var(--gold-300);width:46%" aria-hidden="true"><use href="#sn-mark"/></svg><span class="ph-note">Add a photo of the team at a clinic / community centre</span></div></div>
</div></div></section>
${ctaBand('Let’s support your patients together', 'Reach out to arrange an introductory meeting or request brochures for your waiting room.')}`;

/* ================= CAREERS ================= */
const careersPage = `
${pageHero('Careers', 'Join our team of Canadian companions', 'We’re building a team of warm, dependable people who want to make a real difference in seniors’ lives — and we’re proud to create flexible, meaningful local jobs across the GTA.', [['Home', 'index.html'], ['Careers', 'careers.html']])}
<section class="section bg-paper"><div class="wrap"><div class="split">
  <div><span class="kicker">Why work with us</span><h2>Meaningful work, on a schedule that fits your life</h2>
    <p class="lead">As we grow, we’re creating part-time and flexible Senior Companion roles for caring, reliable people in our community.</p>
    <ul class="checks" style="margin-top:1rem">
      <li>${icon('check')}<span>Flexible part-time hours that fit around your life</span></li>
      <li>${icon('check')}<span>Paid training in senior communication, safety and CPR/First Aid</span></li>
      <li>${icon('check')}<span>Supportive team and clear, structured processes</span></li>
      <li>${icon('check')}<span>The reward of genuinely helping local families</span></li>
    </ul>
  </div>
  <div class="card reveal"><h3>What we look for</h3>
    <ul class="checks" style="margin-top:.6rem">
      <li>${icon('check')}<span>Warmth, patience and reliability</span></li>
      <li>${icon('check')}<span>A valid driver’s licence and clean driving record</span></li>
      <li>${icon('check')}<span>Willingness to complete a background check</span></li>
      <li>${icon('check')}<span>Strong communication — additional languages (Urdu, Pashto, others) a plus</span></li>
      <li>${icon('check')}<span>A genuine respect for seniors and their dignity</span></li>
    </ul>
    <a class="btn btn--primary" style="width:100%;margin-top:1.2rem" href="mailto:${BIZ.email}?subject=Senior%20Companion%20application">${icon('mail')} Apply — email your CV</a>
  </div>
</div></div></section>
<section class="section bg-cream"><div class="wrap center" style="max-width:42rem;margin-inline:auto">
  <h2>Growing in our community</h2>
  <p class="lead">SeniorNavigator is committed to creating local employment and training opportunities as we expand across Mississauga and the GTA — supporting Canadian workers and the communities we serve.</p>
</div></section>
${ctaBand('Ready to make a difference?', 'Send your CV to ' + BIZ.email + ' and tell us why you’d love to support local seniors.')}`;

/* ================= CONTACT ================= */
const contactPage = `
${pageHero('Get in touch', 'Book a free consultation', 'Tell us a little about your loved one and we’ll call you back within one business day. For anything urgent, please call us directly — we’re happy to help.', [['Home', 'index.html'], ['Contact', 'contact.html']])}
<section class="section bg-paper"><div class="wrap"><div class="split" style="align-items:start">
  <div>
    <div class="card" style="padding:1.9rem">
      <h2 style="margin-bottom:.2em">Request your free consultation</h2>
      <p style="color:var(--muted)">No cost, no obligation. Fields marked <span style="color:var(--gold-700)">*</span> are required.</p>
      <form class="form" id="booking-form" name="booking" method="POST" action="#" novalidate>
        <div class="row">
          <div class="field"><label for="name">Your name <span class="req">*</span></label><input id="name" name="name" type="text" autocomplete="name" required></div>
          <div class="field"><label for="phone">Phone <span class="req">*</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" required></div>
        </div>
        <div class="row">
          <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email"></div>
          <div class="field"><label for="relationship">You are the senior’s…</label>
            <select id="relationship" name="relationship"><option>Son / daughter</option><option>Spouse / partner</option><option>The senior myself</option><option>Friend / neighbour</option><option>Healthcare professional</option><option>Other</option></select></div>
        </div>
        <div class="row">
          <div class="field"><label for="service">Service of interest</label>
            <select id="service" name="service"><option>Medical appointment companionship</option><option>Errand &amp; grocery assistance</option><option>Hospital check-in support</option><option>Companionship &amp; wellness visits</option><option>Ongoing care plan</option><option>Not sure yet — please advise</option></select></div>
          <div class="field"><label for="language">Preferred language</label>
            <select id="language" name="language"><option>English</option><option>Urdu</option><option>Pashto</option><option>Other</option></select></div>
        </div>
        <div class="field"><label for="message">How can we help?</label><textarea id="message" name="message" placeholder="Tell us about your loved one’s needs, location, and the best time to call."></textarea></div>
        <button class="btn btn--primary btn--lg" type="submit" style="width:100%">${icon('calendar')} Request my free consultation</button>
        <p class="form-status pill-ok" id="form-status" role="status" hidden style="display:block;text-align:center"></p>
        <p class="form-note">By submitting, you agree to be contacted about your enquiry. We respect your privacy — see our <a href="privacy.html">Privacy Policy</a>.</p>
      </form>
    </div>
    <div class="card reveal" style="margin-top:1.4rem;background:var(--teal-50);border-color:var(--teal-100)">
      <p style="margin:0;display:flex;gap:.6em;align-items:center"><strong>Prefer instant booking?</strong> An online scheduler (Calendly / Jane) can be embedded right here once your account is set up.</p>
    </div>
  </div>
  <div>
    <div class="info-card reveal"><div class="ic">${icon('phone')}</div><div><b>Call or text</b><a href="tel:${BIZ.tel}">${BIZ.phone}</a></div></div>
    <div class="info-card reveal" style="margin-top:1rem"><div class="ic">${icon('mail')}</div><div><b>Email</b><a href="mailto:${BIZ.email}">${BIZ.email}</a></div></div>
    <div class="info-card reveal" style="margin-top:1rem"><div class="ic">${icon('pin')}</div><div><b>Office</b>448 Gibraltar Drive, Unit 9,<br>Mississauga, ON L5T 2N8</div></div>
    <div class="info-card reveal" style="margin-top:1rem"><div class="ic">${icon('clock')}</div><div><b>Hours</b>Monday – Saturday<br>8:00 am – 8:00 pm</div></div>
    <div class="info-card reveal" style="margin-top:1rem"><div class="ic">${icon('globe')}</div><div><b>Languages</b>English · Urdu · Pashto</div></div>
    <div class="media-panel reveal" style="min-height:220px;margin-top:1.4rem;border-radius:var(--r-lg)"><svg class="illus" viewBox="0 0 100 100" style="color:var(--gold-300);width:40%" aria-hidden="true"><use href="#sn-compass-line"/></svg><span class="ph-note">Embed Google Map here</span></div>
  </div>
</div></div></section>`;

/* ================= FAQ ================= */
const FAQS = [
  ['Are you a medical or nursing service?', 'No. SeniorNavigator is strictly <strong>non-medical</strong>. We provide companionship, transport, appointment navigation and errands. We do not provide nursing, personal care, medication administration or medical advice.'],
  ['What areas do you serve?', 'We are based in Mississauga and serve Peel Region and the western GTA, including Brampton, Etobicoke, Oakville and west Toronto. Call us to confirm availability in your area.'],
  ['What does it cost?', 'Hourly companion care is typically $35–$55/hour and appointment-companionship visits $45–$70/visit, with custom rates for ongoing plans. Your first consultation is always free. See our <a href="pricing.html">pricing page</a>.'],
  ['What languages do you speak?', 'We provide care in <strong>English, Urdu and Pashto</strong>, which is especially valued by immigrant senior communities.'],
  ['Are you insured and background-checked?', 'Yes. We carry non-medical liability insurance and our companions complete background checks and safety training, including CPR/First Aid.'],
  ['Will my family be kept informed?', 'Always. After every visit we send a clear summary of what happened and what’s next — our signature Family Update &amp; Care Coordination.'],
  ['Can you help with just one appointment?', 'Absolutely. Many families start with a single appointment or a one-time errand. There’s no requirement to commit to ongoing service.'],
  ['How do I pay?', 'We accept e-transfer, credit card and invoicing. Errand purchases like groceries or prescriptions are billed at cost.'],
  ['How quickly can you start?', 'Often within the same week. Call us and we’ll do our best to accommodate urgent needs.'],
  ['What is your cancellation policy?', 'Simply give us 24 hours’ notice and there’s no cancellation fee.'],
];
const faqPage = `
${pageHero('Questions &amp; answers', 'Frequently asked questions', 'Everything families commonly ask about our non-medical senior support. Can’t find your answer? Call us at ' + BIZ.phone + '.', [['Home', 'index.html'], ['FAQ', 'faq.html']])}
<section class="section bg-paper"><div class="wrap" style="max-width:820px">
  <div class="accordion">${FAQS.map((f, i) => `<div class="acc-item">
    <button class="acc-q" aria-expanded="false"><span>${f[0]}</span><span class="ico">${icon('plus')}</span></button>
    <div class="acc-a"><p>${f[1]}</p></div>
  </div>`).join('')}</div>
</div></section>
${ctaBand('Still have a question?', 'We’re glad to help — no obligation, just honest guidance for your family.')}`;

/* ================= PRIVACY ================= */
const privacyPage = `
${pageHero('Privacy', 'Privacy Policy', 'How SeniorNavigator Services Limited collects, uses and protects your personal information, in line with Canada’s PIPEDA.', [['Home', 'index.html'], ['Privacy', 'privacy.html']])}
<section class="section bg-paper"><div class="wrap" style="max-width:760px"><div class="prose">
  <p class="lead">SeniorNavigator Services Limited (“we”, “us”) respects your privacy and is committed to protecting the personal information of our clients, their families and website visitors, in accordance with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA).</p>
  <h2>Information we collect</h2><p>We collect only the information needed to provide and coordinate our services — such as your name, contact details, the senior’s needs and preferences, appointment information, and language preferences. Website enquiries collect the details you choose to submit.</p>
  <h2>How we use it</h2><ul><li>To respond to enquiries and schedule consultations and visits.</li><li>To coordinate appointments, errands and family updates with your consent.</li><li>To improve our services and communicate important information.</li></ul>
  <h2>Consent</h2><p>We collect, use and disclose personal information with your knowledge and consent, except where required or permitted by law. You may withdraw consent at any time, subject to legal and contractual limits.</p>
  <h2>Disclosure</h2><p>We do not sell your information. We share information only as needed to deliver our services (for example, coordinating with a family member you have authorized) or where required by law.</p>
  <h2>Safeguards</h2><p>We protect personal information with appropriate physical, organizational and technological safeguards, and limit access to those who need it to do their work.</p>
  <h2>Retention</h2><p>We keep personal information only as long as necessary to fulfil the purposes described here or as required by law, after which it is securely destroyed.</p>
  <h2>Your rights</h2><p>You may request access to, or correction of, your personal information. Contact us and we will respond within a reasonable time.</p>
  <h2>Contact us</h2><p>Questions about this policy or your information? Email <a href="mailto:${BIZ.email}">${BIZ.email}</a> or call <a href="tel:${BIZ.tel}">${BIZ.phone}</a>.</p>
  <p class="form-note">This policy is provided for general information and may be updated. It is not legal advice; please consult a professional for advice specific to your situation.</p>
</div></div></section>`;

/* ================= ACCESSIBILITY ================= */
const a11yPage = `
${pageHero('Accessibility', 'Accessibility statement', 'We are committed to making our website and services usable by everyone — including the seniors and families we serve.', [['Home', 'index.html'], ['Accessibility', 'accessibility.html']])}
<section class="section bg-paper"><div class="wrap" style="max-width:760px"><div class="prose">
  <p class="lead">SeniorNavigator Services is committed to digital accessibility and to providing a website that is usable by people of all abilities, in keeping with the spirit of the Accessibility for Ontarians with Disabilities Act (AODA) and WCAG 2.1 Level AA.</p>
  <h2>What we do</h2><ul>
    <li>Large, legible text and high-contrast colours designed with older readers in mind.</li>
    <li>Clear structure, descriptive links and labelled forms.</li>
    <li>Full keyboard navigation and visible focus indicators.</li>
    <li>Generous tap targets for touch and reduced-motion support.</li>
    <li>Plain, jargon-free language throughout.</li>
  </ul>
  <h2>Need help, or another format?</h2><p>If you have trouble using any part of this site, or would like information by phone or in another language (English, Urdu or Pashto), we are glad to help. Call <a href="tel:${BIZ.tel}">${BIZ.phone}</a> or email <a href="mailto:${BIZ.email}">${BIZ.email}</a>.</p>
  <h2>Ongoing commitment</h2><p>Accessibility is an ongoing effort. We welcome your feedback and continually work to improve the experience for everyone.</p>
</div></div></section>`;

/* ---------- page registry ---------- */
const PAGES = {
  'index.html': { title: 'SeniorNavigator Services — Senior Appointment Companions in Mississauga & the GTA', desc: 'Non-medical senior support and medical-appointment companionship in Mississauga and the Greater Toronto Area. Insured, multilingual care in English, Urdu & Pashto. Book a free consultation.', path: '', active: 'home', body: home },
  'services.html': { title: 'Services — Senior Appointment & Errand Companionship | SeniorNavigator', desc: 'Medical appointment companionship, errand assistance, hospital check-in support and wellness visits for seniors in Mississauga and the GTA. Non-medical, multilingual care.', path: 'services.html', active: 'services', body: servicesPage },
  'how-it-works.html': { title: 'How It Works — Senior Support Made Simple | SeniorNavigator', desc: 'From a free consultation to a summary after every visit — see how SeniorNavigator supports seniors and keeps families informed across the GTA.', path: 'how-it-works.html', active: 'how-it-works', body: howPage },
  'pricing.html': { title: 'Pricing — Transparent Senior Companion Rates | SeniorNavigator', desc: 'Honest, transparent pricing for non-medical senior support: $35–$55/hour companion care and $45–$70/visit appointment companionship. Free first consultation.', path: 'pricing.html', active: 'pricing', body: pricingPage },
  'service-areas.html': { title: 'Service Areas — Mississauga & the Greater Toronto Area | SeniorNavigator', desc: 'Senior support across Mississauga, Brampton, Etobicoke, Oakville and the western GTA. See where SeniorNavigator serves and ask about your community.', path: 'service-areas.html', active: 'service-areas', body: areasPage },
  'about.html': { title: 'About & Founder — Kamran Hamayun | SeniorNavigator Services', desc: 'Meet founder Kamran Hamayun — a clinically experienced, multilingual professional — and learn the mission and values behind SeniorNavigator Services.', path: 'about.html', active: 'about', body: aboutPage },
  'resources.html': { title: 'Resources — Senior Care Guidance for Families | SeniorNavigator', desc: 'Practical guidance on medical appointments, caregiver burnout, loneliness and winter safety for Canadian seniors and their families.', path: 'resources.html', active: 'resources', body: resourcesPage },
  'partners.html': { title: 'For Healthcare Partners — Refer with Confidence | SeniorNavigator', desc: 'Clinics, pharmacies and social workers: refer seniors to a reliable, non-medical companion service that reduces no-shows and supports your patients across the GTA.', path: 'partners.html', active: '', body: partnersPage },
  'careers.html': { title: 'Careers — Join Our Team of Senior Companions | SeniorNavigator', desc: 'Flexible, meaningful part-time Senior Companion roles across Mississauga and the GTA. Paid training, supportive team. Apply today.', path: 'careers.html', active: '', body: careersPage },
  'contact.html': { title: 'Contact & Book a Free Consultation | SeniorNavigator Services', desc: 'Book a free, no-obligation consultation for senior appointment companionship and support in Mississauga and the GTA. Call +1 (437) 559-2990.', path: 'contact.html', active: 'contact', body: contactPage },
  'faq.html': { title: 'FAQ — Senior Support Questions Answered | SeniorNavigator', desc: 'Common questions about our non-medical senior support: scope, pricing, languages, service areas, insurance and family updates.', path: 'faq.html', active: '', body: faqPage },
  'privacy.html': { title: 'Privacy Policy | SeniorNavigator Services', desc: 'How SeniorNavigator Services Limited collects, uses and protects personal information in line with Canada’s PIPEDA.', path: 'privacy.html', active: '', body: privacyPage },
  'accessibility.html': { title: 'Accessibility Statement | SeniorNavigator Services', desc: 'Our commitment to an accessible website and services for seniors and families of all abilities (WCAG 2.1 AA / AODA).', path: 'accessibility.html', active: '', body: a11yPage },
};
for (const a of [articleAppt, articleBurnout, articleLonely, articleWinter]) {
  PAGES[a.file] = { title: a.title, desc: a.desc, path: a.path, active: a.active, body: a.body };
}

/* ---------- write ---------- */
let count = 0;
for (const [file, cfg] of Object.entries(PAGES)) {
  fs.writeFileSync(path.join(OUT, file), L.layout(cfg));
  count++;
}
console.log('built', count, 'pages:', Object.keys(PAGES).join(', '));
