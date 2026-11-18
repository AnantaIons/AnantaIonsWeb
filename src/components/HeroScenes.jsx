import { useEffect, useRef, useState } from 'react';
import { SCENES, SceneArt } from './AppScenes.jsx';
import { path } from '../lib/paths.js';

/* Home hero: real-world scenes (highway, footwear store, medical store,
   hospital, school, restaurant) with boards made in our design studio.
   Changes on its own every few seconds, and by hand with the arrows, the
   dots or the keyboard. Auto-play pauses on hover/focus, when the tab is
   hidden, and never starts for reduced-motion users. */

const EVERY_MS = 5000;

export default function HeroScenes() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SCENES.length;
  const go = (k) => setI(((k % n) + n) % n);
  const ref = useRef(null);

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = window.setInterval(() => { if (!document.hidden) setI((c) => (c + 1) % n); }, EVERY_MS);
    return () => window.clearInterval(t);
  }, [paused, n]);

  const s = SCENES[i];
  return (
    <div className="hero-scenes" ref={ref}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); }}
      role="region" aria-roledescription="carousel" aria-label="Our boards in real places">
      <div className="hero-scenes__stage">
        {SCENES.map((sc, k) => (
          <div key={sc.id} className={`hero-scenes__slide${k === i ? ' is-on' : ''}`} aria-hidden={k !== i}>
            <SceneArt s={sc} />
          </div>
        ))}
        <div className="hero-scenes__caption" aria-live="polite">
          <strong>{s.title}</strong><span>{s.note}</span>
        </div>
        <button type="button" className="hero-scenes__arrow hero-scenes__arrow--prev" onClick={() => go(i - 1)} aria-label="Previous place">‹</button>
        <button type="button" className="hero-scenes__arrow hero-scenes__arrow--next" onClick={() => go(i + 1)} aria-label="Next place">›</button>
      </div>
      <div className="hero-scenes__bar">
        <div className="hero-scenes__dots">
          {SCENES.map((sc, k) => (
            <button key={sc.id} type="button" className={k === i ? 'is-on' : ''} onClick={() => go(k)}
              aria-label={`Show ${sc.title}`} aria-current={k === i ? 'true' : undefined}><span /></button>
          ))}
        </div>
        <div className="hero-scenes__cta">
          <a className="btn--on-dark-pill" href={path('/display-designer.html')}>Design your own board</a>
          <a className="link-more" href={path('/displays/templates/')}>Browse all layouts</a>
        </div>
      </div>
      <p className="stage__caption">Boards shown are made in our design studio · 10 × 10 panels · scenes are illustrations</p>
    </div>
  );
}
