import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { studentProgram } from '../content/capabilities.js';
import { projects } from '../content/projects.js';

const STEPS = [
  ['Share your idea', 'Tell us your branch, your idea (or ask for one), and your submission date.'],
  ['Plan it', 'We agree on what the project will do and what you will receive.'],
  ['Build it', 'We build and test the project, and share the code and circuit.'],
  ['Understand it', 'We explain how it works so you can present it and answer questions.'],
];

export default function CollegeProjects() {
  const examples = projects.filter((p) => p.id !== 'p10-display-controller');
  return (
    <Layout current="/college-projects/">
      <PageHero
        eyebrow="College projects"
        title={<>Projects that <span className="hl">actually work</span> on viva day</>}
        lede={studentProgram.body}
      >
        <div className="btn-row">
          <Button href={path('/start/')} size="lg">Discuss your project</Button>
          <Button href="#offer" variant="on-dark" size="lg">10% student discount</Button>
        </div>
      </PageHero>

      <Section labelledBy="areas-title">
        <SectionHead eyebrow="Project areas" id="areas-title" title="What we can build with you" />
        <div className="grid grid--4">
          {studentProgram.areas.map(([icon, t, b]) => (
            <div className="card corner" key={t}>
              <Icon name={icon} size={24} className="card__icon" />
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section gold labelledBy="offer-title" id="offer">
        <div className="grid grid--2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">For students</span>
            <h2 className="h-1" id="offer-title">What you get</h2>
            <ul className="checks checks--lg" style={{ marginTop: '24px' }}>
              {studentProgram.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
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

      <Section labelledBy="examples-title" id="examples">
        <SectionHead eyebrow="Examples" id="examples-title" title="Projects we have built" />
        {examples.map((p) => (
          <article className="project corner" key={p.id} id={p.id} aria-labelledby={`${p.id}-t`}>
            <div className="project__head">
              <div className="project__meta"><span className={`badge ${p.status === 'In development' ? 'badge--gold badge--live' : 'badge--ok'}`}>{p.status}</span></div>
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

      <Section soft labelledBy="steps-title">
        <SectionHead eyebrow="How it works" id="steps-title" title="From idea to submission" />
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

      <CtaStrip title="Submission coming up? Talk to us early." cta={{ label: 'Discuss your project', href: '/start/' }} />
    </Layout>
  );
}
