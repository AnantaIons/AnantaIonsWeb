import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import HeroCircuit from '../components/HeroCircuit.jsx';
import HeroComposition from '../components/HeroComposition.jsx';
import LedDemo from '../components/LedDemo.jsx';
import LedTicker from '../components/LedTicker.jsx';
import PcbExplorer from '../components/PcbExplorer.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { Section, SectionHead, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { studentProgram } from '../content/capabilities.js';
import { products } from '../content/catalogue.js';
import { articles } from '../content/journal.js';

const DIVISIONS = [
  { name: 'Ananta Displays', route: '/displays/', icon: 'display', line: 'LED notice boards and signs, made to your size.', tag: 'Our speciality' },
  { name: 'Ananta Digital', route: '/websites/', icon: 'globe', line: 'Websites for shops, schools and growing businesses.' },
  { name: 'Ananta Engineering', route: '/engineering/', icon: 'cpu', line: 'Firmware, IoT and electronics that work in the field.' },
  { name: 'Ananta Components', route: '/shop/', icon: 'chip', line: 'Boards, modules and LED parts — with expert advice.' },
  { name: 'College Projects', route: '/college-projects/', icon: 'book', line: 'Working projects and viva support for students.' },
];

export default function Home() {
  const featured = ['esp32-devkit', 'p10-led-module', 'arduino-mega', 'sim800-gsm'].map((id) => products.find((p) => p.id === id));
  return (
    <Layout current="/">
      <section className="hero hero--home dark" aria-labelledby="hero-title">
        <HeroCircuit />
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">ANANTA IONS · <Icon name="pin" size={14} className="pin" />Jaipur, Rajasthan</span>
            <h1 className="h-display" id="hero-title">Engineering the physical. <span className="hl">Designing the digital.</span></h1>
            <p className="lede">
              LED display boards, websites, embedded engineering and electronic components —
              designed and built by one team in Jaipur.
            </p>
            <div className="btn-row">
              <Button href="#divisions" size="lg">Explore our work</Button>
              <Button href={path('/start/')} variant="on-dark" size="lg">Start a project</Button>
            </div>
          </div>
          <HeroComposition />
        </div>
      </section>
      <LedTicker items={['LED DISPLAY BOARDS', 'WEBSITES', 'EMBEDDED ENGINEERING', 'ELECTRONIC COMPONENTS', 'COLLEGE PROJECTS', 'JAIPUR']} />

      <Section labelledBy="div-title" id="divisions">
        <SectionHead eyebrow="What we do" id="div-title" title="One team, five ways to help" />
        <div className="divisions">
          {DIVISIONS.map((d, i) => (
            <a key={d.route} href={path(d.route)} className={`division${i === 0 ? ' division--lead' : ''}`}>
              <span className="division__no">0{i + 1}</span>
              <Icon name={d.icon} size={26} className="card__icon" />
              {d.tag ? <span className="badge badge--gold">{d.tag}</span> : null}
              <h3 className="h-2">{d.name}</h3>
              <p>{d.line}</p>
              <span className="division__go">Explore <Icon name="arrow" size={16} /></span>
            </a>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="disp-title" id="try" className="story">
        <div className="demo-grid">
          <div>
            <span className="eyebrow">01 · Ananta Displays</span>
            <h2 className="h-1" id="disp-title">Type a message. See it on a real LED board.</h2>
            <p className="lede" style={{ marginTop: '16px' }}>Our boards are made to your size and updated from your phone or by SMS. Try the board, then browse ten real layouts in the gallery.</p>
            <div className="btn-row" style={{ marginTop: '28px' }}>
              <Button href={path('/displays/templates/')}>Board gallery</Button>
              <Button href={path('/displays/#size')} variant="on-dark">Size calculator</Button>
            </div>
          </div>
          <LedDemo />
        </div>
      </Section>

      <Section labelledBy="dig-title" className="story">
        <div className="story__split">
          <div>
            <span className="eyebrow">02 · Ananta Digital</span>
            <h2 className="h-1" id="dig-title">This website is our portfolio.</h2>
            <p className="lede" style={{ marginTop: '16px' }}>If it feels fast, clear and easy on your phone, that is the point. We build the same quality for shops, schools and businesses — and you can try three demo sites right now.</p>
            <div className="btn-row" style={{ marginTop: '28px' }}>
              <Button href={path('/websites/#experience')}>Experience the demos</Button>
              <Button href={path('/start/?service=website')} variant="outline">Get a website quote</Button>
            </div>
          </div>
          <a className="device device--desktop device--link" href={path('/websites/#experience')}>
            <span className="visually-hidden">See the demo websites</span>
            <div className="device__bar" aria-hidden="true"><i /><i /><i /><span>kesarandclay.in</span></div>
            <div className="device__screen" aria-hidden="true">
              <iframe src={path('/demos/commerce/')} title="Preview of the luxury commerce demo" loading="lazy" tabIndex={-1} />
            </div>
          </a>
        </div>
      </Section>

      <Section dark labelledBy="eng-title" className="story">
        <SectionHead eyebrow="03 · Ananta Engineering" id="eng-title" title="Tap the board. See where engineering matters."
          lede="Firmware, connectivity and electronics for products that have to keep working — explained part by part." />
        <PcbExplorer />
        <div className="btn-row" style={{ marginTop: '32px' }}>
          <Button href={path('/engineering/')}>Engineering services</Button>
        </div>
      </Section>

      <Section labelledBy="cmp-title" className="story">
        <SectionHead row eyebrow="04 · Ananta Components" id="cmp-title" title="Parts, with the know-how to use them">
          <Button href={path('/shop/')} variant="outline">Open the shop</Button>
        </SectionHead>
        <div className="product-grid">{featured.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </Section>

      <Section copper labelledBy="students-title">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">05 · College projects</span>
            <h2 className="h-1" id="students-title">Projects that work on viva day</h2>
            <p className="lede" style={{ marginTop: '16px' }}>{studentProgram.body}</p>
            <div className="btn-row" style={{ marginTop: '28px' }}>
              <Button href={path('/college-projects/')}>College projects</Button>
              <Button href={path('/shop/#kits')} variant="on-dark">Project kits</Button>
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

      <Section soft labelledBy="journal-title">
        <SectionHead row eyebrow="Ananta Journal" id="journal-title" title="Notes from the workbench">
          <Button href={path('/journal/')} variant="outline">All articles</Button>
        </SectionHead>
        <div className="grid grid--3">
          {articles.map((a) => (
            <a className="card card--link" key={a.slug} href={path(`/journal/${a.slug}/`)}>
              <span className="badge">{a.topic}</span>
              <h3 className="h-3">{a.title}</h3>
              <p>{a.dek}</p>
              <span className="text-link card__foot">Read · {a.minutes} min</span>
            </a>
          ))}
        </div>
      </Section>

      <CtaStrip title="Have something to build? Let’s talk." cta={{ label: 'Start a project', href: '/start/' }} />
    </Layout>
  );
}
