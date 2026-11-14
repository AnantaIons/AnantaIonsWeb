import Layout from '../components/Layout.jsx';
import { Section, PageHero, CtaStrip } from '../components/Ui.jsx';
import { projects } from '../content/projects.js';

export default function Projects() {
  return (
    <Layout current="/projects/">
      <PageHero
        eyebrow="Projects"
        title="Systems we have designed and built"
        lede="Each one: the problem, the approach, the technology and the part that was actually hard. Status is stated as it is."
      />
      <Section soft labelledBy="list-title">
        <h2 className="visually-hidden" id="list-title">Project list</h2>
        {projects.map((p) => (
          <article className="project corner" key={p.id} id={p.id} aria-labelledby={`${p.id}-t`}>
            <div className="project__head">
              <div className="project__meta">
                <span className="badge badge--gold">{p.status}</span>
                <span className="badge">{p.domain}</span>
              </div>
              <h3 className="h-1" id={`${p.id}-t`}>{p.title}</h3>
              <p className="lede">{p.summary}</p>
              <ul className="tags">
                {p.technology.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <dl>
              <div><dt>Problem</dt><dd>{p.problem}</dd></div>
              <div><dt>Approach</dt><dd>{p.approach}</dd></div>
              <div><dt>The hard part</dt><dd>{p.engineering}</dd></div>
              {p.result ? <div><dt>Result</dt><dd>{p.result}</dd></div> : null}
            </dl>
          </article>
        ))}
      </Section>
      <CtaStrip title="Need something like this built?" />
    </Layout>
  );
}
