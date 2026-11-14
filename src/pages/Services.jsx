import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { capabilities, studentProgram } from '../content/capabilities.js';
import { industries } from '../content/about.js';

const ICONS = {
  electronics: 'power', 'embedded-systems': 'chip', firmware: 'layers',
  connectivity: 'broadcast', 'intelligent-systems': 'signal', displays: 'display',
  'product-engineering': 'wrench',
};

export default function Services() {
  return (
    <Layout current="/services/">
      <PageHero
        eyebrow="Services"
        title="Our services"
        lede="We take on electronics and firmware work for companies, startups and students. Here is what we do and the problems it solves."
      >
        <div className="btn-row">
          <Button href={path('/start/')} size="lg">Start a project</Button>
          <Button href="#students" variant="on-dark" size="lg">Student projects</Button>
        </div>
      </PageHero>

      <Section labelledBy="disc-title">
        <h2 className="visually-hidden" id="disc-title">Disciplines</h2>
        <div className="grid grid--2">
          {capabilities.map((c) => (
            <article className="card" key={c.id} id={c.id} aria-labelledby={`${c.id}-t`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Icon name={ICONS[c.id] || 'chip'} size={24} className="card__icon" />
                <span className="step__no">{c.no}</span>
              </div>
              <h3 className="h-2" id={`${c.id}-t`}>{c.label}</h3>
              <p><strong>What.</strong> {c.what}</p>
              <p><strong>How.</strong> {c.how}</p>
              <p><strong>Fixes.</strong> {c.solves}</p>
              <ul className="tags card__foot">
                {c.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section gold labelledBy="students-title" id="students">
        <div className="grid grid--2">
          <div>
            <span className="eyebrow">For students</span>
            <h2 className="h-1" id="students-title">{studentProgram.title}</h2>
            <p className="lede" style={{ marginTop: '16px' }}>{studentProgram.body}</p>
          </div>
          <div>
            <ul className="checks">
              {studentProgram.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="offer">
              {studentProgram.offers.map(([v, c]) => (
                <div className="stat corner" key={c}>
                  <span className="stat__value">{v}</span>
                  <p className="stat__caption">{c}</p>
                </div>
              ))}
            </div>
            <div className="btn-row" style={{ marginTop: '24px' }}>
              <Button href={path('/start/')} variant="dark">Discuss your project</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="ind-title" id="industries">
        <SectionHead eyebrow="Industries" id="ind-title" title="Industries we work with" />
        <div className="grid grid--3">
          {industries.map(([icon, name, body]) => (
            <div className="card" key={name}>
              <Icon name={icon} size={24} className="card__icon" />
              <h3 className="h-3">{name}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaStrip />
    </Layout>
  );
}
