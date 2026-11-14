import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import { Section, SectionHead, Stat, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { product, specs, hardware, platform, roadmap } from '../content/products.js';

export default function Products() {
  return (
    <Layout current="/products/">
      <section className="hero dark" aria-labelledby="page-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">{product.name} · {product.status}</span>
            <h1 className="h-display" id="page-title">Every notice board on campus, run from one screen</h1>
            <p className="lede">
              P10 LED boards on Wi-Fi. Notices, timetables and alerts are scheduled on the
              server and appear on every board at once — no USB sticks, no walking from board
              to board.
            </p>
            <div className="btn-row">
              <Button href={path('/start/')} size="lg">Ask about a pilot</Button>
              <Button href="#hardware" variant="on-dark" size="lg">The hardware</Button>
            </div>
          </div>
          <LedMatrix lines={[{ text: 'NOTICE · EXAM HALL 3 OPENS 10 AM · ', scroll: true }, { text: 'TIMETABLE' }, { text: 'ALERTS' }]} />
        </div>
      </section>

      <Section labelledBy="who-title">
        <div className="grid grid--2">
          <div>
            <span className="eyebrow">Who it is for</span>
            <h2 className="h-1" id="who-title">{product.audience}</h2>
          </div>
          <div className="prose">
            <p className="lede">
              Campuses already have LED boards at the gate, in the corridors and outside the
              exam hall. Most of them are updated by hand, one at a time, so notices go stale
              and urgent messages arrive late.
            </p>
            <p>
              The ANANTA IONS display network puts each board on the campus Wi-Fi and moves the
              content to a server. The office writes a notice once; every board shows it on
              schedule.
            </p>
          </div>
        </div>
      </Section>

      <Section soft labelledBy="platform-title">
        <SectionHead eyebrow="The platform" id="platform-title" title="What the content system does"
          lede="A cloud dashboard for every board on site. These are the features in development." />
        <div className="grid grid--4">
          {platform.map((f) => (
            <div className="card corner" key={f.title}>
              <Icon name={f.icon} size={24} className="card__icon" />
              <h3 className="h-3">{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="hardware-title" id="hardware">
        <SectionHead eyebrow="The hardware" id="hardware-title" title="The Rev A controller"
          lede="Designed in-house around the ESP32-S3. One controller drives a full board of P10 panels." />
        <div className="grid grid--3" style={{ marginBottom: '40px' }}>
          {specs.map((s) => <Stat key={s.value} {...s} />)}
        </div>
        <ul className="spec-list">
          {hardware.map(([k, val]) => (
            <li key={k}><strong>{k}</strong><span>{val}</span></li>
          ))}
        </ul>
      </Section>

      <Section dark labelledBy="pilot-title" id="pilot">
        <SectionHead eyebrow="Where it stands" id="pilot-title" title="Built in stages, tested on real campuses"
          lede="The first board is being built now. We are looking for schools and colleges in Jaipur to run the first pilot installations." />
        <ol className="roadmap">
          {roadmap.map(([when, what]) => (
            <li key={when}><strong>{when}</strong><p>{what}</p></li>
          ))}
        </ol>
      </Section>

      <CtaStrip title="Want a pilot board on your campus?" cta={{ label: 'Talk to us', href: '/start/' }} />
    </Layout>
  );
}
