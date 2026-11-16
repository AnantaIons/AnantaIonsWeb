import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import HeroCircuit from '../components/HeroCircuit.jsx';
import LedDemo from '../components/LedDemo.jsx';
import LedTicker from '../components/LedTicker.jsx';
import { Section, SectionHead, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import { capabilities, displayUses, studentProgram, websiteIncludes } from '../content/capabilities.js';
import { categories } from '../content/shop.js';

export default function Home() {
  const shopPreview = categories.flatMap((c) => c.items).slice(0, 6);
  return (
    <Layout current="/">
      <section className="hero dark" aria-labelledby="hero-title">
        <HeroCircuit />
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">LED display specialists · <Icon name="pin" size={14} className="pin" />Jaipur, Rajasthan</span>
            <h1 className="h-display" id="hero-title">LED display boards, <span className="hl">made to order</span>.</h1>
            <p className="lede">
              We make LED notice boards and scrolling displays for schools, colleges, shops and
              offices. We also build websites, help students with college projects, and sell
              electronic components.
            </p>
            <div className="btn-row">
              <Button href={path('/start/')} size="lg">Get a display quote</Button>
              <Button href={path('/displays/#try')} variant="on-dark" size="lg">Try the live demo</Button>
            </div>
          </div>
          <LedMatrix id="hero" />
        </div>
      </section>
      <LedTicker items={['LED NOTICE BOARDS', 'SCROLLING DISPLAYS', 'WEBSITES', 'COLLEGE PROJECTS', 'ELECTRONIC COMPONENTS', 'JAIPUR']} />

      <Section labelledBy="what-title">
        <SectionHead eyebrow="What we do" id="what-title" title="Four things, done well" />
        <div className="grid grid--4 offer-grid">
          {capabilities.map((c, i) => (
            <a className={`card card--link corner${i === 0 ? ' card--feature' : ''}`} key={c.id} href={path(c.route)}>
              {i === 0 ? <span className="badge badge--gold">Our speciality</span> : null}
              <Icon name={c.icon} size={26} className="card__icon" />
              <h3 className="h-2">{c.label}</h3>
              <p>{c.what}</p>
              <span className="card__foot text-link">{['LED display options', 'Website details', 'Project details', 'See components'][i]}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="demo-title" id="try">
        <div className="demo-grid">
          <div>
            <span className="eyebrow">Try it</span>
            <h2 className="h-1" id="demo-title">Type a message, see it on an LED board</h2>
            <p className="lede" style={{ marginTop: '16px' }}>
              This is how your message looks on one of our boards. Type anything, or pick an example.
            </p>
            <div className="btn-row" style={{ marginTop: '28px' }}>
              <Button href={path('/displays/templates/')}>Board gallery</Button>
              <Button href={path('/displays/')} variant="on-dark">LED display options</Button>
            </div>
          </div>
          <LedDemo />
        </div>
      </Section>

      <Section gold labelledBy="uses-title">
        <SectionHead eyebrow="LED displays" id="uses-title" title="Boards for every kind of place"
          lede="Made to the size you need, with your message updated by SMS or from your phone." />
        <div className="grid grid--4">
          {displayUses.map(([t, b]) => (
            <div className="stat" key={t}>
              <span className="stat__value stat__value--sm">{t}</span>
              <p className="stat__caption">{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="shop-title">
        <SectionHead row eyebrow="Shop" id="shop-title" title="Electronic components"
          lede="Order on WhatsApp, pick up in Jaipur.">
          <Button href={path('/shop/')} variant="outline">Full list</Button>
        </SectionHead>
        <ul className="shop-mini">
          {shopPreview.map((it) => (
            <li key={it.name}>
              <span>{it.name}</span>
              <a className="shop-mini__order" href={waLink(`Hello ANANTA IONS, I want to buy: ${it.name}`)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={16} /> Order<span className="visually-hidden"> {it.name} on WhatsApp (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section copper labelledBy="students-title">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">College projects</span>
            <h2 className="h-1" id="students-title">Projects that work on viva day</h2>
            <p className="lede" style={{ marginTop: '16px' }}>{studentProgram.body}</p>
            <div className="btn-row" style={{ marginTop: '28px' }}>
              <Button href={path('/college-projects/')}>College projects</Button>
            </div>
          </div>
          <div className="offer">
            {studentProgram.offers.map(([v, c]) => (
              <div className="stat" key={c}>
                <span className="stat__value">{v}</span>
                <p className="stat__caption">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section soft labelledBy="web-title">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Websites</span>
            <h2 className="h-1" id="web-title">A website your customers can use on their phone</h2>
            <p className="lede" style={{ marginTop: '16px' }}>
              For shops, schools, coaching centres and small businesses. This website is one we built.
            </p>
            <div className="btn-row" style={{ marginTop: '28px' }}>
              <Button href={path('/websites/')} variant="outline">Website details</Button>
            </div>
          </div>
          <ul className="checks checks--lg">
            {websiteIncludes.map((w) => <li key={w}>{w}</li>)}
          </ul>
        </div>
      </Section>

      <CtaStrip title="Need a board, a website or a project?" cta={{ label: 'Contact us', href: '/start/' }} />
    </Layout>
  );
}
