import { useEffect, useRef, useState } from 'react';
import { stack } from '../content/stack.js';
import { TraceNode } from './Trace.jsx';

/* THE ENGINEERING STACK — the site's signature interactive scene.

   Progressive enhancement, in three states:

   1. No JavaScript / crawler: every layer and every detail panel is present in
      the HTML as one readable list. Nothing is hidden behind an interaction.
   2. JavaScript: a tab pattern. The rail is a real tablist with roving focus
      and arrow-key navigation; panels are toggled. Scrolling the section
      advances the active layer, so the sequence tells itself — but the moment
      a visitor chooses a layer, scroll stops overriding them.
   3. prefers-reduced-motion: identical structure and identical information,
      no scroll-driven advance and no trace animation.

   Motion here carries meaning: the trace travels SILICON -> PRODUCT, which is
   the actual argument the section is making. */

export default function StackSequence() {
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  const sectionRef = useRef(null);
  const tabsRef = useRef([]);
  const lockedRef = useRef(false);

  useEffect(() => setEnhanced(true), []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (lockedRef.current) return;
        const r = section.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        // Progress across the pinned run of the section.
        const total = r.height - vh;
        if (total <= 0 || r.bottom < 0 || r.top > vh) return;
        const p = Math.min(1, Math.max(0, -r.top / total));
        setActive(Math.min(stack.length - 1, Math.floor(p * stack.length)));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  const choose = (i) => { lockedRef.current = true; setActive(i); };

  const onKeyDown = (e) => {
    const last = stack.length - 1;
    const map = { ArrowDown: active + 1, ArrowRight: active + 1,
                  ArrowUp: active - 1, ArrowLeft: active - 1, Home: 0, End: last };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = Math.min(last, Math.max(0, map[e.key]));
    choose(next);
    tabsRef.current[next]?.focus();
  };

  return (
    <div className="stack" ref={sectionRef}>
      <div className="stack__sticky">
        <div className="stack__grid container">

          <div className="stack__rail-wrap">
            <p className="label stack__rail-title">Signal → Product</p>
            <ol
              className="stack__rail"
              role={enhanced ? 'tablist' : undefined}
              aria-label={enhanced ? 'Engineering stack layers' : undefined}
              aria-orientation="vertical"
              onKeyDown={enhanced ? onKeyDown : undefined}
            >
              {stack.map((layer, i) => {
                const on = i === active;
                const past = i < active;
                return (
                  <li key={layer.id} className="stack__rail-item" role={enhanced ? 'presentation' : undefined}>
                    <span
                      className={`stack__conductor${past || on ? ' is-energised' : ''}`}
                      aria-hidden="true"
                    />
                    <button
                      ref={(el) => { tabsRef.current[i] = el; }}
                      className={`stack__tab${on ? ' is-active' : ''}${past ? ' is-past' : ''}`}
                      role={enhanced ? 'tab' : undefined}
                      id={`stack-tab-${layer.id}`}
                      aria-selected={enhanced ? on : undefined}
                      aria-controls={`stack-panel-${layer.id}`}
                      tabIndex={enhanced ? (on ? 0 : -1) : 0}
                      onClick={() => choose(i)}
                    >
                      <TraceNode signal={on || past} />
                      <span className="stack__no mono">{layer.no}</span>
                      <span className="stack__label">{layer.label}</span>
                      <span className="stack__signal label label--muted">{layer.signal}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="stack__panels">
            {stack.map((layer, i) => (
              <section
                key={layer.id}
                id={`stack-panel-${layer.id}`}
                className={`stack__panel${i === active ? ' is-active' : ''}`}
                role={enhanced ? 'tabpanel' : undefined}
                aria-labelledby={`stack-tab-${layer.id}`}
                hidden={enhanced && i !== active}
                tabIndex={enhanced ? 0 : undefined}
              >
                <p className="stack__panel-index mono">
                  {layer.no} <span aria-hidden="true">/</span> {stack.length < 10 ? `0${stack.length}` : stack.length}
                  <span className="visually-hidden"> of {stack.length}</span>
                </p>
                <h3 className="display-3 stack__panel-title">{layer.label}</h3>
                <p className="lede stack__panel-summary">{layer.summary}</p>
                <p className="prose">{layer.detail}</p>
                <ul className="chip-set" aria-label={`${layer.label} technologies`}>
                  {layer.tech.map((t) => <li className="chip" key={t}>{t}</li>)}
                </ul>
              </section>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
