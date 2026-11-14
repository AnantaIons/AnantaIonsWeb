import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import { Section, SectionHead, Stat, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { product, benefits, platform, roadmap } from '../content/products.js';

export default function Products() {
  return (
    <Layout current="/products/">
      <section className="hero dark" aria-labelledby="page-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">{product.name} · {product.status}</span>
            <h1 className="h-display" id="page-title">Update every notice board on campus from one place</h1>
            <p className="lede">
              Type a notice once and it shows on every LED board on campus. No USB sticks, and
              no walking from board to board.
            </p>
            <div className="btn-row">
              <Button href={path('/start/')} size="lg">Ask about a pilot</Button>
              <Button href="#features" variant="on-dark" size="lg">Features</Button>
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
              Most schools and colleges have LED boards at the gate, in corridors and outside
              exam halls. They are usually updated one by one, so old notices stay up and urgent
              ones go up late.
            </p>
            <p>
              With our system, every board connects to the campus Wi-Fi. The office types a
              notice once in the dashboard, and it appears on the boards it should, at the time
              it should.
            </p>
          </div>
        </div>
      </Section>

      <Section soft labelledBy="platform-title" id="features">
        <SectionHead eyebrow="Features" id="platform-title" title="What you can do with it"
          lede="These are the features we are building now." />
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

      <Section labelledBy="benefits-title">
        <h2 className="visually-hidden" id="benefits-title">Benefits</h2>
        <div className="grid grid--3">
          {benefits.map((s) => <Stat key={s.value} {...s} />)}
        </div>
      </Section>

      <Section dark labelledBy="pilot-title" id="pilot">
        <SectionHead eyebrow="Current status" id="pilot-title" title="Looking for pilot campuses"
          lede="We are building the first board now. We are looking for a few schools and colleges in Jaipur to try it first." />
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
