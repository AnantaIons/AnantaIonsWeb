import { hydrate, render } from 'preact';
import './styles/index.css';

/* `js` switches on every progressive enhancement in the CSS. It is set from
   the bundle rather than inline, so a bundle that never arrives leaves the
   prerendered page in its fully readable no-JS state rather than a
   half-hidden one. */

/* Deep links and hydration.

   The server renders every stack panel — that is what makes the page readable
   without JavaScript — and hydration then hides all but the active one. The
   document gets shorter, and the browser's scroll anchoring compensates by
   moving the scroll position, which lands a fragment link several hundred
   pixels away from its target.

   So once the hydrated layout has settled, put the fragment back where the
   visitor asked for it. Runs only on the first two frames after mount, so it
   can never fight a visitor who has already started scrolling. */
function restoreFragment() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
}

/* Gentle reveal as sections scroll in. Only elements still below the fold
   are hidden, and only after hydration, so nothing a visitor can already see
   ever blinks out; without JavaScript, or with reduced motion, everything is
   simply visible. */
function revealOnScroll() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll(
    '.section .section-head, .section .grid > *, .section .steps > li, .section .project, ' +
    '.section .shop-mini, .section .demo, .section .calc, .shop-cat, .shop-ask, .cta-strip .container'
  );
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  const fold = window.innerHeight;
  els.forEach((el, i) => {
    if (el.getBoundingClientRect().top < fold) return;
    el.classList.add('reveal');
    el.style.setProperty('--d', `${(i % 4) * 70}ms`);
    io.observe(el);
  });
}

export default function mount(Page) {
  document.documentElement.classList.add('js');
  document.documentElement.classList.remove('no-js');
  const root = document.getElementById('root');
  if (!root) return;
  // Prerendered markup is hydrated; an empty root (dev server) is rendered.
  if (root.firstElementChild) hydrate(<Page />, root);
  else render(<Page />, root);

  if (window.location.hash) {
    requestAnimationFrame(() => requestAnimationFrame(restoreFragment));
  }
  requestAnimationFrame(() => requestAnimationFrame(revealOnScroll));
}
