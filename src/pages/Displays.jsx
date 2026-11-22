import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedBoard from '../components/LedBoard.jsx';
import NightUses from '../components/NightUses.jsx';
import SizeCalculator from '../components/SizeCalculator.jsx';
import { PriceCards, Pillars } from '../components/DisplayPricing.jsx';
import { Section, SectionHead, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { displayTypes } from '../content/capabilities.js';
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
              <Button href="#pricing" variant="on-dark" size="lg">See prices</Button>
            </div>
          </div>
          <LedBoard id="hero" panels={[4, 2]} colour="red" items={[
            { text: 'OPEN 24X7', size: 2, y: 1 },
            { text: 'SALE 30% OFF · HOME DELIVERY · NEW STOCK · ', size: 2, y: 17, effect: 'scroll' },
          ]} />
        </div>
      </section>

      <Section labelledBy="types-title" id="types">
        <SectionHead row eyebrow="What we make" id="types-title" title="Display options">
          <Button href={path('/displays/templates/')} variant="outline">Open the design studio</Button>
        </SectionHead>
        <div className="grid grid--4">
          {displayTypes.map((d) => (
            <div className="card corner" key={d.title}>
              <span className={`badge ${d.status === 'In development' ? 'badge--gold badge--live' : 'badge--ok'}`}>{d.status}</span>
              <Icon name={d.icon} size={24} className="card__icon" />
              <h3 className="h-3">{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section soft labelledBy="price-title" id="pricing">
        <SectionHead eyebrow="Clear pricing" id="price-title" title="Starting prices"
          lede="Single colour or full colour, made to your size. The final price is confirmed in writing before we build." />
        <PriceCards calcHref="#size" />
      </Section>

      <Section labelledBy="why-title" id="why">
        <SectionHead eyebrow="Why Ananta Displays" id="why-title" title="Quality product. Fast service. One complete system." />
        <Pillars />
      </Section>

      <Section dark labelledBy="studio-title" id="studio">
        <div className="studio-promo studio-promo--solo">
          <div>
            <span className="eyebrow">Design studio</span>
            <h2 className="h-1" id="studio-title">See your board before we build it</h2>
            <p className="lede" style={{ marginTop: '16px' }}>Full-colour designs for big boards, ready single-colour layouts and a quick notice preview — all in one place.</p>
            <div className="btn-row" style={{ marginTop: '24px' }}>
              <a className="btn--on-dark-pill" href={path('/displays/templates/')}>Open the design studio</a>
              <a className="link-more" href={path('/displays/templates/#try')}>Quick notice preview</a>
            </div>
          </div>
        </div>
      </Section>

      <Section soft labelledBy="calc-title" id="size">
        <div className="demo-grid">
          <div>
            <span className="eyebrow">Size calculator</span>
            <h2 className="h-1" id="calc-title">How big a board do you need?</h2>
            <p className="lede" style={{ marginTop: '16px' }}>
              Enter the space you have. We work out how many P10 panels fit, and you can send the
              size straight to us for a quote.
            </p>
          </div>
          <SizeCalculator />
        </div>
      </Section>

      <Section dark labelledBy="uses-title" className="after-dark">
        <SectionHead eyebrow="Where they work" id="uses-title" title="Real places, after dark"
          lede="LED boards do most of their work in the evening, when printed signs disappear. These are the places we make them for." />
        <NightUses pre="dn-" />
      </Section>

      <Section labelledBy="built-title" id="built">
        <SectionHead eyebrow="Our work" id="built-title" title="Display systems we have built" />
        {built.map((p) => (
          <article className="project corner" key={p.id} id={p.id} aria-labelledby={`${p.id}-t`}>
            <div className="project__head">
              <div className="project__meta">
                <span className={`badge ${p.status === 'In development' ? 'badge--gold badge--live' : 'badge--ok'}`}>{p.status}</span>
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
