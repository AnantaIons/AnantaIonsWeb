import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import HeroCircuit from '../components/HeroCircuit.jsx';
import { Section, SectionHead, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { websiteKinds, websiteIncludes } from '../content/capabilities.js';

const DEMOS = [
  { id: 'commerce', name: 'Luxury commerce', brand: 'Kesar & Clay', note: 'A calm, premium online shop: filters, product cards and a working bag.', style: 'Serif · cream & forest green' },
  { id: 'business', name: 'Modern business', brand: 'Suryansh Solar', note: 'A service company site: clear services, a live savings calculator, FAQ and enquiry form.', style: 'Sans · white & electric blue' },
  { id: 'portfolio', name: 'Digital portfolio', brand: 'Studio Ira', note: 'An editorial portfolio: masonry gallery, filters and a full-screen viewer.', style: 'Editorial · black & vermilion' },
];

const STACK = [
  ['Fast by default', 'Pages are prerendered, so they open quickly even on slow mobile data.'],
  ['Accessible', 'Readable contrast, keyboard support and screen-reader labels — checked automatically before every launch.'],
  ['Found on Google', 'Clean page titles, descriptions and structured data so search engines understand the business.'],
  ['Easy to change', 'Content lives in simple files, so updates do not need a rebuild of the design.'],
];

const STEPS = [
  ['Talk', 'You tell us about the business and what the website must do.'],
  ['Design', 'You see the pages before we build them, and we refine them together.'],
  ['Build', 'We build it, fill in your content and photos, and test it on real phones.'],
  ['Launch', 'We put it live on your own domain and show you how to update it.'],
];

function Showcase() {
  const [active, setActive] = useState(DEMOS[0].id);
  const demo = DEMOS.find((d) => d.id === active);
  const url = path(`/demos/${demo.id}/`);
  const phoneRef = useRef(null);
  // Scale the 390px-wide phone page to fit the drawn phone.
  useEffect(() => {
    const el = phoneRef.current;
    if (!el || !('ResizeObserver' in window)) return undefined;
    const ro = new ResizeObserver(([e]) => el.style.setProperty('--phone-scale', (e.contentRect.width / 390).toFixed(4)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className="showcase">
      <div className="showcase__tabs" role="tablist" aria-label="Demo websites">
        {DEMOS.map((d) => (
          <button key={d.id} role="tab" aria-selected={active === d.id} aria-controls="showcase-panel"
            className={`showcase__tab${active === d.id ? ' is-active' : ''}`} onClick={() => setActive(d.id)}>
            <span className="showcase__tab-name">{d.name}</span>
            <span className="showcase__tab-brand">{d.brand}</span>
          </button>
        ))}
      </div>
      <div className="showcase__panel" id="showcase-panel" role="tabpanel">
        <div className="devices">
          <div className="device device--desktop">
            <div className="device__bar"><i /><i /><i /><span>{demo.brand.toLowerCase().replace(/[^a-z]+/g, '')}.in</span></div>
            <div className="device__screen">
              <iframe key={`d-${demo.id}`} src={url} title={`${demo.name} demo — desktop preview`} loading="lazy" tabIndex={-1} />
            </div>
          </div>
          <div className="device device--phone">
            <div className="device__screen" ref={phoneRef}>
              <iframe key={`m-${demo.id}`} src={url} title={`${demo.name} demo — phone preview`} loading="lazy" tabIndex={-1} />
            </div>
          </div>
        </div>
        <div className="showcase__info">
          <span className="eyebrow">{demo.style}</span>
          <h3 className="h-2">{demo.brand}</h3>
          <p>{demo.note}</p>
          <a className="btn btn--primary" href={url} target="_blank" rel="noopener">
            Open the live demo <Icon name="arrow" size={16} /><span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <p className="showcase__fine">Fictional brand, real working website.</p>
        </div>
      </div>
    </div>
  );
}

export default function Websites() {
  return (
    <Layout current="/websites/">
      <section className="hero hero--page dark" aria-labelledby="page-title">
        <HeroCircuit />
        <div className="container">
          <div className="hero__copy">
            <span className="eyebrow">Ananta Digital</span>
            <h1 className="h-display" id="page-title">Websites that <span className="hl">work as hard as you do</span></h1>
            <p className="lede">For shops, schools, coaching centres and growing businesses. You are looking at our work right now — this site, its LED demos, calculator and shop were all designed and built by us.</p>
            <div className="btn-row">
              <Button href="#experience" size="lg">Experience what we create</Button>
              <Button href={path('/start/?service=website')} variant="on-dark" size="lg">Get a website quote</Button>
            </div>
          </div>
        </div>
      </section>

      <Section dark labelledBy="exp-title" id="experience" className="section--showcase">
        <SectionHead eyebrow="Experience what we create" id="exp-title" title="Three websites, three different personalities"
          lede="Every business deserves its own design, not a template. Try these working demos — on desktop and on a phone." />
        <Showcase />
      </Section>

      <Section labelledBy="kinds-title">
        <SectionHead eyebrow="What we build" id="kinds-title" title="Websites for local businesses" />
        <div className="grid grid--3">
          {websiteKinds.map((k) => (
            <div className="card corner" key={k.title}>
              <Icon name={k.icon} size={24} className="card__icon" />
              <h3 className="h-2">{k.title}</h3>
              <p>{k.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section gold labelledBy="inc-title">
        <SectionHead eyebrow="Every website includes" id="inc-title" title="What you get" />
        <ul className="checks checks--lg checks--cols">{websiteIncludes.map((w) => <li key={w}>{w}</li>)}</ul>
      </Section>

      <Section labelledBy="tech-title">
        <SectionHead eyebrow="How we build" id="tech-title" title="Quality you can’t see — until it matters" />
        <div className="grid grid--4">
          {STACK.map(([t, b]) => (
            <div className="card" key={t}>
              <Icon name="check" size={22} className="card__icon card__icon--tech" />
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section soft labelledBy="steps-title">
        <SectionHead eyebrow="How it works" id="steps-title" title="Four steps to a live website" />
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

      <CtaStrip title="Want a website like these for your business?" cta={{ label: 'Start your website', href: '/start/?service=website' }} />
    </Layout>
  );
}
