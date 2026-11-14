import Layout from '../components/Layout.jsx';
import Mark from '../components/Mark.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { principles } from '../content/about.js';
import { process } from '../content/process.js';

export default function About() {
  return (
    <Layout current="/about/">
      <PageHero
        eyebrow="About"
        title="A hardware company from Jaipur, built for the long run"
        lede="ANANTA IONS designs electronics and embedded systems for others, and builds its own products — starting with a display network for Indian campuses."
      />

      <Section labelledBy="name-title">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">The name and the mark</span>
            <h2 className="h-1" id="name-title">Anant — the path that never closes</h2>
            <div className="prose" style={{ marginTop: '16px' }}>
              <p className="lede">
                <em>Anant</em> means the infinite. The mark is an open ring with a single
                ion resting in its gap: a shell with a charge at its boundary, a circuit with
                a gap and the element that bridges it.
              </p>
              <p>
                The opening faces up and to the right. It is a reminder of what the company is
                for — closing the gap between silicon and the real world, one working system at
                a time.
              </p>
            </div>
          </div>
          <div className="dark corner" style={{ padding: 'clamp(40px, 8vw, 88px)', display: 'grid', placeItems: 'center', borderRadius: '2px' }}>
            <Mark size={220} />
          </div>
        </div>
      </Section>

      <Section soft labelledBy="principles-title" id="principles">
        <SectionHead eyebrow="How we think" id="principles-title" title="Six engineering principles" />
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
        <SectionHead eyebrow="How a project runs" id="process-title" title="Discover to deploy" />
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
