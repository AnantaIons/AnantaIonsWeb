import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { websiteKinds, websiteIncludes } from '../content/capabilities.js';

const STEPS = [
  ['Talk', 'You tell us about your business and what the website should do.'],
  ['Design', 'We show you how the pages will look before building them.'],
  ['Build', 'We build the site and fill in your content and photos.'],
  ['Launch', 'We put it live on your own domain and show you how to update it.'],
];

export default function Websites() {
  return (
    <Layout current="/websites/">
      <PageHero
        eyebrow="Websites"
        title={<>Websites that <span className="hl">work on every phone</span></>}
        lede="For shops, schools, coaching centres and small businesses in Jaipur and beyond. Clean, fast, and with a WhatsApp button so customers can reach you."
      >
        <div className="btn-row">
          <Button href={path('/start/')} size="lg">Get a website quote</Button>
        </div>
      </PageHero>

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
        <ul className="checks checks--lg checks--cols">
          {websiteIncludes.map((w) => <li key={w}>{w}</li>)}
        </ul>
      </Section>

      <Section labelledBy="example-title">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Example</span>
            <h2 className="h-1" id="example-title">You are looking at one</h2>
          </div>
          <p className="lede">
            We designed and built this website ourselves — the layout, the live LED demo, the
            WhatsApp ordering in the shop. Your website gets the same care.
          </p>
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

      <CtaStrip title="Want a website for your business?" cta={{ label: 'Get a quote', href: '/start/' }} />
    </Layout>
  );
}
