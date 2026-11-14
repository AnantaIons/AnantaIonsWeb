import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import { Section, SectionHead, Stat, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { site } from '../content/site.js';
import { capabilities } from '../content/capabilities.js';
import { process } from '../content/process.js';
import { specs, product } from '../content/products.js';
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
            <span className="eyebrow">Electronics & embedded engineering · Jaipur</span>
            <h1 className="h-display" id="hero-title">{site.proposition}</h1>
            <p className="lede">
              ANANTA IONS designs electronics, firmware and connected products — and builds its
              own: a Wi-Fi managed LED display network for campuses.
            </p>
            <div className="btn-row">
              <Button href={path('/start/')} size="lg">Start a project</Button>
              <Button href={path('/products/')} variant="on-dark" size="lg">See the display system</Button>
            </div>
          </div>
          <LedMatrix />
        </div>
      </section>

      <Section labelledBy="what-title">
        <SectionHead eyebrow="What we do" id="what-title" title="Three ways to work with us" />
        <div className="grid grid--3">
          <a className="card card--link corner" href={path('/products/')}>
            <span className="badge badge--gold">{product.status}</span>
            <Icon name="display" size={26} className="card__icon" />
            <h3 className="h-2">Campus display network</h3>
            <p>Our own product: P10 LED boards on Wi-Fi, run from one dashboard, with emergency override across campus.</p>
            <span className="card__foot text-link">The display system</span>
          </a>
          <a className="card card--link corner" href={path('/services/')}>
            <span className="badge">Services</span>
            <Icon name="chip" size={26} className="card__icon" />
            <h3 className="h-2">Embedded engineering</h3>
            <p>Firmware, electronics, connectivity and edge intelligence — from a first idea to a board you can ship.</p>
            <span className="card__foot text-link">What we engineer</span>
          </a>
          <a className="card card--link corner" href={path('/services/#students')}>
            <span className="badge">10% student discount</span>
            <Icon name="book" size={26} className="card__icon" />
            <h3 className="h-2">Student & research projects</h3>
            <p>Final-year projects built like products, firmware help when you are stuck, and guidance on research papers.</p>
            <span className="card__foot text-link">Student projects</span>
          </a>
        </div>
      </Section>

      <Section soft labelledBy="product-title" id="product">
        <SectionHead
          row eyebrow="Our product" id="product-title"
          title="A display network built for campuses"
          lede={product.oneLine}
        >
          <Button href={path('/products/')} variant="outline">Product details</Button>
        </SectionHead>
        <div className="grid grid--3">
          {specs.map((s) => <Stat key={s.value} {...s} />)}
        </div>
      </Section>

      <Section labelledBy="services-title">
        <SectionHead
          row eyebrow="Services" id="services-title"
          title="Engineering from silicon to shipped product"
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

      <Section soft labelledBy="work-title">
        <SectionHead
          row eyebrow="Projects" id="work-title"
          title="Systems we have built"
        >
          <Button href={path('/projects/')} variant="outline">All projects</Button>
        </SectionHead>
        <div className="grid grid--3">
          {projects.map((p) => (
            <a className="card card--link" key={p.id} href={path(`/projects/#${p.id}`)}>
              <span className="badge">{p.status}</span>
              <h3 className="h-2">{p.title}</h3>
              <p>{p.summary}</p>
              <span className="card__foot text-link">Read the build</span>
            </a>
          ))}
        </div>
      </Section>

      <Section labelledBy="process-title" id="process">
        <SectionHead eyebrow="How we work" id="process-title" title="Five steps, every project" />
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
