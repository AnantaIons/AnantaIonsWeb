import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import PcbExplorer from '../components/PcbExplorer.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { projects } from '../content/projects.js';

const SERVICES = [
  ['cpu', 'Embedded firmware', 'Bare-metal C, C++ and RTOS firmware for microcontrollers — drivers, communication, bootloaders and over-the-air updates.'],
  ['broadcast', 'IoT and connectivity', 'Wi-Fi, Bluetooth, GSM, LoRa and wired links, with firmware that recovers by itself when the connection drops.'],
  ['power', 'Electronics and PCB', 'Circuit design, part selection, power supplies and layout review for boards that can be built and serviced.'],
  ['wrench', 'Product development', 'From a working prototype to a product you can sell: testing, documentation and handover to your team.'],
];

const STEPS = [
  ['Understand', 'What it must do, where it will be installed, budget and deadline.'],
  ['Design', 'Parts chosen and the hardware/firmware plan written down before building.'],
  ['Prototype', 'A working board, brought up and running real firmware.'],
  ['Test', 'On the bench and on site — power cuts, bad network, wrong wiring.'],
  ['Hand over', 'Firmware, design files and documentation, with support afterwards.'],
];

export default function Engineering() {
  return (
    <Layout current="/engineering/">
      <PageHero
        eyebrow="Ananta Engineering"
        title={<>Electronics and firmware that <span className="hl">keep working in the field</span></>}
        lede="Embedded systems, IoT devices and custom electronics for businesses and startups — designed, built and tested by engineers who write the firmware and read the schematic."
      >
        <div className="btn-row">
          <Button href={path('/start/?service=engineering')} size="lg">Discuss your product</Button>
          <Button href="#board" variant="on-dark" size="lg">Explore a circuit board</Button>
        </div>
      </PageHero>

      <Section labelledBy="svc-title">
        <SectionHead eyebrow="What we do" id="svc-title" title="Four engineering services" />
        <div className="grid grid--4">
          {SERVICES.map(([icon, t, b]) => (
            <div className="card corner" key={t}>
              <Icon name={icon} size={24} className="card__icon card__icon--tech" />
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="board-title" id="board">
        <SectionHead eyebrow="Interactive" id="board-title" title="Explore a connected controller"
          lede="Tap any part of the board to see what it does — and where engineering decisions make the difference between a demo and a product." />
        <PcbExplorer />
      </Section>

      <Section labelledBy="work-title" id="work">
        <SectionHead eyebrow="Our work" id="work-title" title="Systems we have built" />
        {projects.map((p) => (
          <article className="project corner" key={p.id} aria-labelledby={`e-${p.id}`}>
            <div className="project__head">
              <div className="project__meta">
                <span className={`badge ${p.status === 'In development' ? 'badge--gold badge--live' : 'badge--ok'}`}>{p.status}</span>
              </div>
              <h3 className="h-1" id={`e-${p.id}`}>{p.title}</h3>
              <p className="lede">{p.summary}</p>
            </div>
            <dl>
              <div><dt>Problem</dt><dd>{p.problem}</dd></div>
              <div><dt>Solution</dt><dd>{p.approach}</dd></div>
            </dl>
          </article>
        ))}
      </Section>

      <Section soft labelledBy="steps-title">
        <SectionHead eyebrow="How a project runs" id="steps-title" title="From idea to finished product" />
        <ol className="steps">
          {STEPS.map(([t, b], i) => (
            <li className="step" key={t}>
              <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaStrip title="Have a product idea that needs to work?" cta={{ label: 'Discuss your product', href: '/start/?service=engineering' }} />
    </Layout>
  );
}
