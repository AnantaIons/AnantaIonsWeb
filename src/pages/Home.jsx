import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import HardwareBoard from '../components/HardwareBoard.jsx';
import StackSequence from '../components/StackSequence.jsx';
import { TraceLink, TraceNode, TraceRail } from '../components/Trace.jsx';
import { PlaceholderTag } from '../components/Placeholder.jsx';
import { capabilities } from '../content/capabilities.js';
import { process } from '../content/process.js';
import { projects } from '../content/projects.js';
import { site } from '../content/site.js';

/* The homepage is a story in eight scenes. Every scene earns its place by
   doing exactly one of: building understanding, building trust, or moving the
   visitor toward starting a project. */

const BOARD_ANNOTATIONS = [
  { term: 'MCU',          def: 'The controller the product’s behaviour is guaranteed on.' },
  { term: 'Firmware',     def: 'Deterministic low-level software written against the datasheet.' },
  { term: 'Power',        def: 'Rails budgeted for the real operating envelope, not the typical case.' },
  { term: 'Sensor',       def: 'Conditioning and calibration on the device, not in post-processing.' },
  { term: 'Connectivity', def: 'A link chosen for range, power and interference — then made to fail predictably.' },
  { term: 'Display',      def: 'Panel, driver and content pipeline, legible where it actually runs.' },
  { term: 'Control',      def: 'Bounded response time. The worst case, not the average one.' },
];

/* SCENE 01 — THE STATEMENT */
function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <Reveal className="hero__eyebrow">
          <p className="label"><TraceNode /> {site.discipline}</p>
        </Reveal>

        <Reveal delay={60}>
          <h1 className="display-1 hero__title" id="hero-title">
            <span className="hero__line">Engineering</span>
            <span className="hero__line hero__line--signal">intelligence</span>
            <span className="hero__line">between silicon</span>
            <span className="hero__line">and the real world.</span>
          </h1>
        </Reveal>

        <div className="hero__row">
          <div className="hero__copy">
            <Reveal delay={120}>
              <p className="lede hero__lede">{site.description}</p>
            </Reveal>

            <Reveal delay={180} className="hero__actions">
              <Button href="/start/" size="lg">Start a project</Button>
              <Button href="/engineering/" size="lg" variant="outline">Explore engineering</Button>
            </Reveal>

            <Reveal delay={240}>
              <ol className="hero__chain" aria-label="From idea to product">
                {['Idea', 'Architecture', 'Silicon', 'Hardware', 'Firmware', 'Connectivity', 'Intelligence', 'Product']
                  .map((s, i, a) => (
                    <li className="hero__chain-item" key={s}>
                      <span className={i === a.length - 1 ? 'signal' : undefined}>{s}</span>
                      {i < a.length - 1 ? <Icon name="chevron" size={12} className="hero__chain-sep" /> : null}
                    </li>
                  ))}
              </ol>
            </Reveal>
          </div>

          <Reveal delay={160} className="hero__figure">
            <HardwareBoard annotations={BOARD_ANNOTATIONS.slice(0, 4)} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* SCENE 02 — THE HARDWARE */
function HardwareScene() {
  return (
    <section className="scene scene--raised scene--edged" aria-labelledby="hardware-title">
      <div className="container">
        <Reveal className="scene__head">
          <p className="label"><TraceNode /> Scene 02 · Real systems</p>
          <h2 className="display-2" id="hardware-title">We build the whole board, not a slice of it.</h2>
          <p className="lede">
            Electronics, firmware, connectivity and intelligence are one system. Engineering them
            separately is where products fail — so we take responsibility for the path between them.
          </p>
        </Reveal>
        <Reveal delay={100} className="scene__figure">
          <HardwareBoard annotations={BOARD_ANNOTATIONS} />
        </Reveal>
      </div>
    </section>
  );
}

/* SCENE 03 — THE ENGINEERING STACK */
function StackScene() {
  return (
    <section className="scene stack-scene" aria-labelledby="stack-title" id="stack">
      <div className="container">
        <Reveal className="scene__head">
          <p className="label"><TraceNode /> Scene 03 · The stack</p>
          <h2 className="display-2" id="stack-title">Six layers between an idea and a shipped product.</h2>
          <p className="lede">
            The trace runs from silicon to product. Follow it — every layer is one we work at,
            and the handoffs between them are where the engineering actually lives.
          </p>
        </Reveal>
      </div>
      <StackSequence />
    </section>
  );
}

/* SCENE 04 — THE CAPABILITIES */
function CapabilitiesScene() {
  return (
    <section className="scene scene--raised scene--edged" aria-labelledby="cap-title">
      <div className="container">
        <Reveal className="scene__head">
          <p className="label"><TraceNode /> Scene 04 · Capabilities</p>
          <h2 className="display-2" id="cap-title">Seven disciplines, one system-level team.</h2>
        </Reveal>

        <div className="bento">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.id}
              delay={(i % 3) * 70}
              className={`bento__cell${c.span ? ` bento__cell--${c.span}` : ''}`}
            >
              <article className="cap" aria-labelledby={`cap-${c.id}`}>
                <p className="label label--muted mono cap__no">{c.no}</p>
                <h3 className="heading-1 cap__title" id={`cap-${c.id}`}>{c.label}</h3>
                <p className="cap__what">{c.what}</p>
                <dl className="cap__detail">
                  <dt className="label label--muted">How</dt>
                  <dd>{c.how}</dd>
                  <dt className="label label--muted">Solves</dt>
                  <dd>{c.solves}</dd>
                </dl>
                <TraceRail className="cap__rail" />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="scene__foot">
          <Button href="/capabilities/" variant="outline">See how each capability works</Button>
        </Reveal>
      </div>
    </section>
  );
}

/* SCENE 05 — THE PROOF */
function ProofScene() {
  const featured = projects.slice(0, 3);
  const anyUnverified = featured.some((p) => !p.verified);
  return (
    <section className="scene" aria-labelledby="proof-title">
      <div className="container">
        <Reveal className="scene__head">
          <p className="label"><TraceNode /> Scene 05 · Proof</p>
          <h2 className="display-2" id="proof-title">Systems we have engineered.</h2>
          <p className="lede">
            Each one is a real-world problem, an architecture, and the part that was genuinely hard.
          </p>
        </Reveal>

        <ul className="proof">
          {featured.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 80} className="proof__item">
              <a className="proof__link" href={`/projects/#${p.id}`}>
                <p className="label"><TraceNode /> {p.domain}</p>
                <h3 className="heading-1 proof__title">{p.title}</h3>
                <p className="proof__summary">{p.summary}</p>
                <dl className="proof__spec">
                  <div><dt className="label label--muted">Platform</dt><dd>{p.technology.platform}</dd></div>
                  <div><dt className="label label--muted">Link</dt><dd>{p.technology.connectivity}</dd></div>
                </dl>
                {!p.verified ? <PlaceholderTag>Unverified</PlaceholderTag> : null}
                <span className="proof__more">Read the case study <Icon name="arrow" size={16} /></span>
              </a>
            </Reveal>
          ))}
        </ul>

        {anyUnverified ? (
          <Reveal>
            <p className="scene__note">
              Project details on this deployment are placeholders carried over from the supplied
              content model. They are marked wherever they appear and must be replaced with
              verified ANANTA IONS projects before launch.
            </p>
          </Reveal>
        ) : null}

        <Reveal className="scene__foot">
          <Button href="/projects/" variant="outline">All projects</Button>
        </Reveal>
      </div>
    </section>
  );
}

/* SCENE 06 — THE ENGINEERING PROCESS */
function ProcessScene() {
  return (
    <section className="scene scene--raised scene--edged" aria-labelledby="process-title" id="process">
      <div className="container">
        <Reveal className="scene__head">
          <p className="label"><TraceNode /> Scene 06 · Process</p>
          <h2 className="display-2" id="process-title">How a project runs.</h2>
        </Reveal>

        <Reveal className="process">
          <TraceRail className="process__rail" />
          <ol className="process__list">
            {process.map((s) => (
              <li className="process__step" key={s.no}>
                <span className="process__node"><TraceNode signal lg /></span>
                <p className="mono process__no">{s.no}</p>
                <h3 className="heading-2 process__label">{s.label}</h3>
                <p className="process__body">{s.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* SCENE 07 — THE QUIET MOMENT */
function QuietScene() {
  return (
    <section className="quiet" aria-labelledby="quiet-title">
      <div className="container container--narrow">
        <Reveal>
          <p className="display-2 quiet__line" id="quiet-title">
            Some problems can’t be solved off the shelf.
          </p>
          <TraceLink length="6rem" />
          <p className="display-2 quiet__line quiet__line--answer">That’s why we engineer.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* SCENE 08 — THE FINAL INVITATION */
function FinalScene() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="container">
        <Reveal className="final__inner">
          <h2 className="display-1 final__title" id="final-title">
            Let’s engineer<br />what’s next.
          </h2>
          <ul className="final__list" aria-label="What we engineer">
            {['Hardware', 'Firmware', 'Connectivity', 'Intelligence', 'Real-world systems'].map((x) => (
              <li key={x}><TraceNode signal /> {x}</li>
            ))}
          </ul>
          <div className="final__actions">
            <Button href="/start/" size="lg">Start a project</Button>
            <Button href="/projects/" size="lg" variant="outline">See what we have built</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout current="/">
      <Hero />
      <HardwareScene />
      <StackScene />
      <CapabilitiesScene />
      <ProofScene />
      <ProcessScene />
      <QuietScene />
      <FinalScene />
    </Layout>
  );
}
