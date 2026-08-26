import Layout from '../components/Layout.jsx';
import { path } from '../lib/paths.js';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { TraceNode, TraceRail } from '../components/Trace.jsx';
import { capabilities } from '../content/capabilities.js';

export default function Capabilities() {
  return (
    <Layout current="/capabilities/">
      <PageHero
        eyebrow="Capabilities"
        title={<>What we do, how we do it, and <span className="signal">what it fixes</span>.</>}
        lede="Seven disciplines. Each one states the work, the method, and the failure it is meant to prevent — because a capability list that says nothing testable is worth nothing."
      >
        <Button href={path('/start/')} size="lg">Start a project</Button>
      </PageHero>

      <section className="scene" aria-label="Capabilities in detail">
        <div className="container">
          <ol className="caps">
            {capabilities.map((c, i) => (
              <Reveal as="li" key={c.id} delay={(i % 2) * 60} className="caps__item" id={c.id}>
                <article className="capfull" aria-labelledby={`capfull-${c.id}`}>
                  <header className="capfull__head">
                    <p className="label"><TraceNode /> <span className="mono">{c.no}</span></p>
                    <h2 className="display-3 capfull__title" id={`capfull-${c.id}`}>{c.label}</h2>
                    <p className="lede">{c.what}</p>
                  </header>
                  <TraceRail className="capfull__rail" />
                  <dl className="capfull__detail">
                    <div>
                      <dt className="label label--signal">How we do it</dt>
                      <dd className="prose">{c.how}</dd>
                    </div>
                    <div>
                      <dt className="label label--signal">What it solves</dt>
                      <dd className="prose">{c.solves}</dd>
                    </div>
                  </dl>
                  <ul className="chip-set" aria-label={`${c.label} technologies`}>
                    {c.tags.map((t) => <li className="chip" key={t}>{t}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="final" aria-labelledby="cap-cta">
        <div className="container">
          <Reveal className="final__inner">
            <h2 className="display-2 final__title" id="cap-cta">
              Which layer is <span className="hardware">your problem</span> on?
            </h2>
            <p className="lede">
              If you are not sure, that is a good reason to talk — narrowing it down is the
              first thing we do anyway.
            </p>
            <div className="final__actions">
              <Button href={path('/start/')} size="lg">Start a project</Button>
              <Button href={path('/engineering/')} size="lg" variant="outline">See the stack</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
