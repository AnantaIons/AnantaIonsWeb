import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import LedDemo from '../components/LedDemo.jsx';
import { Section, SectionHead, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { displayTypes, displayUses } from '../content/capabilities.js';
import { platform } from '../content/products.js';
import { projects } from '../content/projects.js';

const ORDER_STEPS = [
  ['Tell us', 'Where the board goes, roughly how big, and what it should show.'],
  ['Get a quote', 'We suggest a size and send you a price.'],
  ['We build it', 'We build the board and test it before it leaves.'],
  ['You use it', 'We show you how to change the message, and stay available for help.'],
];

export default function Displays() {
  const built = projects.filter((p) => p.id !== 'gsm-remote-controller');
  return (
    <Layout current="/displays/">
      <section className="hero dark" aria-labelledby="page-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">LED display systems · Jaipur</span>
            <h1 className="h-display" id="page-title">LED boards that are <span className="hl">easy to update</span></h1>
            <p className="lede">
              Notice boards and scrolling displays made to the size you need. Change the message
              by SMS or from your phone — no USB stick, no ladder.
            </p>
            <div className="btn-row">
              <Button href={path('/start/')} size="lg">Get a quote</Button>
              <Button href="#try" variant="on-dark" size="lg">Try the demo</Button>
            </div>
          </div>
          <LedMatrix id="hero" lines={[{ text: 'NOTICE · EXAM HALL 3 OPENS 10 AM · ', scroll: true }, { text: 'TIMETABLE' }, { text: 'ALERTS' }]} />
        </div>
      </section>

      <Section labelledBy="types-title" id="types">
        <SectionHead eyebrow="What we make" id="types-title" title="Display options" />
        <div className="grid grid--4">
          {displayTypes.map((d) => (
            <div className="card corner" key={d.title}>
              <span className={`badge${d.status === 'In development' ? ' badge--gold badge--live' : ''}`}>{d.status}</span>
              <Icon name={d.icon} size={24} className="card__icon" />
              <h3 className="h-3">{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="demo-title" id="try">
        <div className="demo-grid">
          <div>
            <span className="eyebrow">Try it</span>
            <h2 className="h-1" id="demo-title">Write a notice, see it on the board</h2>
            <p className="lede" style={{ marginTop: '16px' }}>
              This is how a notice looks on a real LED board. Type your own message or pick an example.
            </p>
          </div>
          <LedDemo />
        </div>
      </Section>

      <Section gold labelledBy="uses-title">
        <SectionHead eyebrow="Where they work" id="uses-title" title="Boards for every kind of place" />
        <div className="grid grid--4">
          {displayUses.map(([t, b]) => (
            <div className="stat" key={t}>
              <span className="stat__value stat__value--sm">{t}</span>
              <p className="stat__caption">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="built-title" id="built">
        <SectionHead eyebrow="Our work" id="built-title" title="Display systems we have built" />
        {built.map((p) => (
          <article className="project corner" key={p.id} id={p.id} aria-labelledby={`${p.id}-t`}>
            <div className="project__head">
              <div className="project__meta">
                <span className={`badge badge--gold${p.status === 'In development' ? ' badge--live' : ''}`}>{p.status}</span>
              </div>
              <h3 className="h-1" id={`${p.id}-t`}>{p.title}</h3>
              <p className="lede">{p.summary}</p>
            </div>
            <dl>
              <div><dt>Problem</dt><dd>{p.problem}</dd></div>
              <div><dt>Solution</dt><dd>{p.approach}</dd></div>
            </dl>
          </article>
        ))}
      </Section>

      <Section soft labelledBy="network-title" id="network">
        <SectionHead eyebrow="Coming next" id="network-title" title="Campus display network"
          lede="For campuses with many boards: every board run from one dashboard. We are building it now and looking for schools and colleges in Jaipur to try it first." />
        <div className="grid grid--4">
          {platform.map((f) => (
            <div className="card" key={f.title}>
              <Icon name={f.icon} size={24} className="card__icon" />
              <h3 className="h-3">{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="order-title" id="order">
        <SectionHead eyebrow="How to order" id="order-title" title="From message to working board" />
        <ol className="steps">
          {ORDER_STEPS.map(([t, b], i) => (
            <li className="step" key={t}>
              <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaStrip title="Tell us where your board will go" cta={{ label: 'Get a quote', href: '/start/' }} />
    </Layout>
  );
}
