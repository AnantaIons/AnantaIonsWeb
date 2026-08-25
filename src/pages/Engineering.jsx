import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import StackSequence from '../components/StackSequence.jsx';
import HardwareBoard from '../components/HardwareBoard.jsx';
import ConnectivityWeb from '../components/ConnectivityWeb.jsx';
import { TraceNode, TraceRail } from '../components/Trace.jsx';
import { process } from '../content/process.js';
import { entryPoints } from '../content/about.js';

const ANNOTATIONS = [
  { term: 'MCU',          def: 'The controller the product’s behaviour is guaranteed on.' },
  { term: 'Firmware',     def: 'Deterministic low-level software written against the datasheet.' },
  { term: 'Power',        def: 'Rails budgeted for the real operating envelope.' },
  { term: 'Sensor',       def: 'Conditioning and calibration on the device.' },
  { term: 'Connectivity', def: 'A link chosen for range, power and interference.' },
  { term: 'Display',      def: 'Panel, driver and content pipeline.' },
  { term: 'Control',      def: 'Bounded response time — the worst case, not the average.' },
];

export default function Engineering() {
  return (
    <Layout current="/engineering/">
      <PageHero
        eyebrow="Engineering"
        title={<>The path between <span className="signal">silicon</span> and a product that <span className="hardware">ships</span>.</>}
        lede="Six layers, one team. This is the work we do at each of them, and the handoffs between them where most products are won or lost."
      >
        <Button href="/start/" size="lg">Start a project</Button>
        <Button href="/capabilities/" size="lg" variant="outline">Capabilities</Button>
      </PageHero>

      <section className="scene scene--raised scene--edged" aria-labelledby="stack-title" id="stack">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> The stack</p>
            <h2 className="display-2" id="stack-title">Silicon to <span className="hardware">product</span>.</h2>
          </Reveal>
        </div>
        <StackSequence />
      </section>

      <section className="scene" aria-labelledby="board-title">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> The system</p>
            <h2 className="display-2" id="board-title">One board, <span className="signal">every layer</span>.</h2>
            <p className="lede">
              A representative architecture: the controller at the centre, the physical world on
              one side, the network and the interface on the other.
            </p>
          </Reveal>
          <Reveal delay={80} className="scene__figure">
            <HardwareBoard annotations={ANNOTATIONS} />
          </Reveal>
        </div>
      </section>

      <section className="scene scene--raised scene--edged" aria-labelledby="web-title" id="connectivity">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> Connectivity</p>
            <h2 className="display-2" id="web-title">
              Every link, from a <span className="signal">coin cell</span> to a
              <span className="hardware"> city mesh</span>.
            </h2>
          </Reveal>
          <Reveal delay={80} className="scene__figure">
            <ConnectivityWeb />
          </Reveal>
        </div>
      </section>

      <section className="scene" aria-labelledby="process-title" id="process">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> Process</p>
            <h2 className="display-2" id="process-title">How a project runs.</h2>
          </Reveal>
          <Reveal className="process">
            <TraceRail className="process__rail" />
            <ol className="process__list">
              {process.map((s, i) => (
                <li className="process__step" key={s.no}>
                  <span className="process__node" style={{ animationDelay: `${i * 110}ms` }}>
                    <TraceNode signal lg className="trace-seq" />
                  </span>
                  <p className="mono process__no">{s.no}</p>
                  <h3 className="heading-2 process__label">{s.label}</h3>
                  <p className="process__body">{s.body}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="scene scene--raised scene--edged" aria-labelledby="entry-title">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> Where we join</p>
            <h2 className="display-2" id="entry-title">Engineering rarely starts at <span className="hardware">step one</span>.</h2>
            <p className="lede">
              Bring an idea, a prototype, a board that will not behave, or firmware that has to
              reach production. We join where the problem is.
            </p>
          </Reveal>
          <Reveal>
            <ol className="entry">
              {entryPoints.map((s, i) => (
                <li className="entry__item" key={s}>
                  <span className="mono entry__no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="entry__label">{s}</span>
                  <span className="entry__note label label--muted">We can join here</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="scene__foot">
            <Button href="/start/" size="lg">Start a project</Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
