import { useEffect, useRef } from 'react';

/* CURSOR DUST

   Gold dust off the pointer, denser the faster it moves, and brighter over
   anything interactive — so the cursor reports what it is on as well as where
   it is. One canvas, one rAF loop, drawn in the brand's own gold, copper and
   ivory.

   It is a flourish, so it is built to cost nothing when it should not run:
     - mouse pointers only (`pointer: fine`), so touch never pays for it
     - off entirely under prefers-reduced-motion, and it re-checks if the
       visitor changes that setting without reloading
     - the loop stops when the dust has settled and restarts on the next move,
       so an idle tab is not burning frames
     - paused while the tab is hidden
     - pointer-events: none, so it can never intercept a click
   Nothing about the page depends on it: with JavaScript off, or on a phone,
   the site behaves exactly as it does with the effect running. */

const MAX = 150;
const TINTS = ['212, 175, 55', '212, 175, 55', '198, 106, 37', '243, 225, 173'];
const INTERACTIVE = 'a, button, input, select, textarea, summary, [role="tab"], [tabindex]:not([tabindex="-1"])';

export default function CursorDust() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const fine = window.matchMedia?.('(pointer: fine)');
    const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!fine?.matches) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let dpr = 1, w = 0, h = 0;
    let frame = 0, running = false, enabled = !calm?.matches;
    const dust = [];
    const pointer = { x: -999, y: -999, px: -999, py: -999, hot: false, seen: false };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    resize();

    const emit = (x, y, speed) => {
      // Faster movement throws more dust, but never more than the pool allows.
      const n = Math.min(3, 1 + Math.floor(speed / 26)) * (pointer.hot ? 2 : 1);
      for (let i = 0; i < n && dust.length < MAX; i += 1) {
        const a = Math.random() * Math.PI * 2;
        const v = Math.random() * (pointer.hot ? 0.9 : 0.55);
        dust.push({
          x, y,
          vx: Math.cos(a) * v - (x - pointer.px) * 0.02,
          vy: Math.sin(a) * v - (y - pointer.py) * 0.02,
          life: 1,
          decay: 0.012 + Math.random() * 0.022,
          size: (pointer.hot ? 1.5 : 1.1) + Math.random() * 1.5,
          tint: TINTS[(Math.random() * TINTS.length) | 0],
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = dust.length - 1; i >= 0; i -= 1) {
        const d = dust[i];
        d.x += d.vx; d.y += d.vy;
        d.vy += 0.012;          // the dust settles
        d.vx *= 0.97; d.vy *= 0.97;
        d.life -= d.decay;
        if (d.life <= 0) { dust.splice(i, 1); continue; }
        ctx.globalAlpha = Math.max(0, d.life) * 0.75;
        ctx.fillStyle = `rgb(${d.tint})`;
        ctx.fillRect(d.x * dpr, d.y * dpr, d.size * dpr, d.size * dpr);
      }
      ctx.globalAlpha = 1;

      if (dust.length) frame = requestAnimationFrame(tick);
      else { running = false; frame = 0; }
    };

    const start = () => {
      if (running || !enabled || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      if (!enabled) return;
      pointer.px = pointer.seen ? pointer.x : e.clientX;
      pointer.py = pointer.seen ? pointer.y : e.clientY;
      pointer.x = e.clientX; pointer.y = e.clientY;
      pointer.seen = true;
      pointer.hot = !!(e.target instanceof Element && e.target.closest(INTERACTIVE));
      const speed = Math.hypot(pointer.x - pointer.px, pointer.y - pointer.py);
      if (speed > 0.6) { emit(pointer.x, pointer.y, speed); start(); }
    };

    const onLeave = () => { pointer.seen = false; };
    const onVisibility = () => {
      if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; running = false; }
      else start();
    };
    const onCalmChange = () => {
      enabled = !calm.matches;
      if (!enabled) {
        dust.length = 0;
        if (frame) cancelAnimationFrame(frame);
        frame = 0; running = false;
        ctx.clearRect(0, 0, w, h);
      }
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave, { passive: true });
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    calm?.addEventListener?.('change', onCalmChange);

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
      calm?.removeEventListener?.('change', onCalmChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas className="cursor-dust" ref={ref} aria-hidden="true" />;
}
