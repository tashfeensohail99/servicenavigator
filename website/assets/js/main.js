/* SeniorNavigator Services — site interactions (progressive enhancement) */
(function () {
  'use strict';

  // Enable reveal animation only when JS is available (content is visible by default otherwise)
  document.documentElement.classList.add('js');

  // Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  var scrim = document.querySelector('.scrim');
  var closeBtn = document.querySelector('.mm-close');
  function openMenu() { if (!menu) return; menu.classList.add('open'); scrim.classList.add('show'); menu.setAttribute('aria-hidden', 'false'); toggle.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; }
  function closeMenu() { if (!menu) return; menu.classList.remove('open'); scrim.classList.remove('show'); menu.setAttribute('aria-hidden', 'true'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; }
  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (scrim) scrim.addEventListener('click', closeMenu);
  if (menu) menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  // FAQ / accordion
  document.querySelectorAll('.acc-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var expanded = q.getAttribute('aria-expanded') === 'true';
      var panel = q.nextElementSibling;
      q.setAttribute('aria-expanded', String(!expanded));
      if (expanded) { panel.style.maxHeight = null; panel.classList.remove('open'); }
      else { panel.classList.add('open'); panel.style.maxHeight = panel.scrollHeight + 40 + 'px'; }
    });
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  var revealAll = function () { reveals.forEach(function (el) { el.classList.add('in'); }); };
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
    // Safety net: ensure nothing ever stays hidden if the observer misses an element.
    window.addEventListener('load', function () { setTimeout(revealAll, 2500); });
  } else {
    revealAll();
  }

  // Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Booking form (front-end demo handler; wire to Formspree/Netlify in production)
  var form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      if (form.getAttribute('data-live') === 'true') return; // real backend handles it
      e.preventDefault();
      var note = document.getElementById('form-status');
      if (note) {
        note.hidden = false;
        note.textContent = 'Thank you — your request has been received. We will call you within one business day. For anything urgent, please call +1 (437) 559-2990.';
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }
})();
