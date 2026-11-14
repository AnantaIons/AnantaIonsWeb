import Button from './Button.jsx';
import { path } from '../lib/paths.js';
import { primaryCta } from '../content/site.js';

/* Small composition primitives from the Ananta Ions design system. */

export function Section({ soft, dark, tight, id, labelledBy, children, className = '' }) {
  const cls = ['section', soft && 'section--soft', dark && 'dark', tight && 'section--tight', className]
    .filter(Boolean).join(' ');
  return (
    <section className={cls} id={id} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, id, lede, children, row }) {
  return (
    <div className={`section-head${row ? ' section-head--row' : ''}`}>
      <div>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="h-1" id={id}>{title}</h2>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="hero hero--page dark" aria-labelledby="page-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="h-display" id="page-title">{title}</h1>
            {lede ? <p className="lede">{lede}</p> : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stat({ value, caption }) {
  return (
    <div className="stat">
      <span className="stat__value">{value}</span>
      <p className="stat__caption">{caption}</p>
    </div>
  );
}

export function CtaStrip({ title = 'Have a project in mind?', cta = primaryCta }) {
  return (
    <section className="cta-strip dark" aria-labelledby="cta-title">
      <div className="container cta-strip__inner">
        <h2 className="h-1" id="cta-title">{title}</h2>
        <Button href={path(cta.href)} size="lg">{cta.label}</Button>
      </div>
    </section>
  );
}
