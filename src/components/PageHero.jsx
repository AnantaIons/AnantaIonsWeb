import Reveal from './Reveal.jsx';
import { TraceNode } from './Trace.jsx';

/* The compact hero used by every page except the homepage. One h1, one
   supporting paragraph, optional actions — nothing competing with it. */

export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container">
        <Reveal>
          <p className="label"><TraceNode /> {eyebrow}</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="display-2 page-hero__title" id="page-title">{title}</h1>
        </Reveal>
        {lede ? <Reveal delay={110}><p className="lede page-hero__lede">{lede}</p></Reveal> : null}
        {children ? <Reveal delay={160} className="page-hero__actions">{children}</Reveal> : null}
      </div>
    </section>
  );
}
