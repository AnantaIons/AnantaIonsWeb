import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import { Section, SectionHead, Stat, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { capabilities } from '../content/capabilities.js';
import { process } from '../content/process.js';
import { benefits, product } from '../content/products.js';
import { projects } from '../content/projects.js';

const ICONS = {
  electronics: 'power', 'embedded-systems': 'chip', firmware: 'layers',
  connectivity: 'broadcast', 'intelligent-systems': 'signal', displays: 'display',
  'product-engineering': 'wrench',
};

export default function Home() {
  return (
    <Layout current="/">
      <section className="hero dark" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="eyebrow">Embedded engineering · <Icon name="pin" size={14} className="pin" />Jaipur, Rajasthan</span>
            <h1 className="h-display" id="hero-title">Electronics, firmware and <span className="hl">LED display systems</span>, built in Jaipur.</h1>
            <p className="lede">
              We design circuit boards and write firmware for companies, startups and students.
              We are also building our own product: LED notice boards for schools and colleges
              that can be updated from one dashboard.
            </p>
            <div className="btn-row">
              <Button href={path('/start/')} size="lg">Start a project</Button>
              <Button href={path('/products/')} variant="on-dark" size="lg">See the display system</Button>
            </div>
          </div>
          <LedMatrix id="hero" />
        </div>
      </section>

      <Section labelledBy="what-title">
        <SectionHead eyebrow="What we do" id="what-title" title="Three ways to work with us" />
        <div className="grid grid--3">
          <a className="card card--link corner" href={path('/products/')}>
            <span className="badge badge--gold badge--live">{product.status}</span>
            <Icon name="display" size={26} className="card__icon" />
            <h3 className="h-2">Campus display network</h3>
            <p>LED notice boards for campuses, all updated from one dashboard. Currently in development.</p>
            <span className="card__foot text-link">The display system</span>
          </a>
          <a className="card card--link corner" href={path('/services/')}>
            <span className="badge">Services</span>
            <Icon name="chip" size={26} className="card__icon" />
            <h3 className="h-2">Embedded engineering</h3>
            <p>Circuit design, firmware and IoT for your product, from the first prototype to production.</p>
            <span className="card__foot text-link">What we engineer</span>
          </a>
          <a className="card card--link corner" href={path('/services/#students')}>
            <span className="badge">10% student discount</span>
            <Icon name="book" size={26} className="card__icon" />
            <h3 className="h-2">Student & research projects</h3>
            <p>Help with final-year projects, code and debugging, and research papers.</p>
            <span className="card__foot text-link">Student projects</span>
          </a>
        </div>
      </Section>

      <Section gold labelledBy="product-title" id="product">
        <SectionHead
          row eyebrow="Our product" id="product-title"
          title="LED notice boards for campuses"
          lede={product.oneLine}
        >
          <Button href={path('/products/#try')} variant="dark">Try the live demo</Button>
        </SectionHead>
        <div className="grid grid--3">
          {benefits.map((s) => <Stat key={s.value} {...s} />)}
        </div>
      </Section>

      <Section labelledBy="services-title">
        <SectionHead
          row eyebrow="Services" id="services-title"
          title="What we can build for you"
        >
          <Button href={path('/services/')} variant="outline">All services</Button>
        </SectionHead>
        <div className="grid grid--4">
          {capabilities.map((c) => (
            <div className="card" key={c.id}>
              <Icon name={ICONS[c.id] || 'chip'} size={24} className="card__icon" />
              <h3 className="h-3">{c.label}</h3>
              <p>{c.what}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section copper labelledBy="work-title">
        <SectionHead
          row eyebrow="Projects" id="work-title"
          title="Systems we have built"
        >
          <Button href={path('/projects/')} variant="outline">All projects</Button>
        </SectionHead>
        <div className="grid grid--3">
          {projects.map((p) => (
            <a className="card card--link" key={p.id} href={path(`/projects/#${p.id}`)}>
              <span className={p.status === 'In development' ? 'badge badge--gold badge--live' : 'badge'}>{p.status}</span>
              <h3 className="h-2">{p.title}</h3>
              <p>{p.summary}</p>
              <span className="card__foot text-link">Read more</span>
            </a>
          ))}
        </div>
      </Section>

      <Section labelledBy="process-title" id="process">
        <SectionHead eyebrow="How we work" id="process-title" title="How a project runs" />
        <ol className="steps">
          {process.map((s) => (
            <li className="step" key={s.no}>
              <span className="step__no">{s.no}</span>
              <h3 className="h-3">{s.label}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaStrip />
    </Layout>
  );
}
