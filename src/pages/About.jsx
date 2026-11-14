import Layout from '../components/Layout.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { principles } from '../content/about.js';
import { process } from '../content/process.js';

export default function About() {
  return (
    <Layout current="/about/">
      <PageHero
        eyebrow="About"
        title="About ANANTA IONS"
        lede="We are a small electronics and embedded engineering company based in Jaipur."
      />

      <Section labelledBy="who-title">
        <div className="grid grid--2">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className="h-1" id="who-title">Electronics and firmware, done properly</h2>
          </div>
          <div className="prose">
            <p className="lede">
              We design circuit boards, write firmware and build connected devices. Our clients
              include businesses with a product idea, startups that need a working prototype,
              and engineering students working on projects.
            </p>
            <p>
              We are also building our own product, an LED notice board system for schools and
              colleges. Working on our own hardware keeps us close to the real problems of
              manufacturing, installation and support.
            </p>
          </div>
        </div>
      </Section>

      <Section soft labelledBy="principles-title" id="principles">
        <SectionHead eyebrow="How we think" id="principles-title" title="What we care about" />
        <div className="grid grid--3">
          {principles.map(([t, b]) => (
            <div className="card corner" key={t}>
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section labelledBy="process-title" id="process">
        <SectionHead eyebrow="How a project runs" id="process-title" title="From idea to finished product" />
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
