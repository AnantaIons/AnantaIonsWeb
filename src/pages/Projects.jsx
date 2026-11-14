import Layout from '../components/Layout.jsx';
import { Section, PageHero, CtaStrip } from '../components/Ui.jsx';
import { projects } from '../content/projects.js';

export default function Projects() {
  return (
    <Layout current="/projects/">
      <PageHero
        eyebrow="Projects"
        title="Our projects"
        lede="Things we have built or are building now, with the problem each one solves."
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
            </div>
            <dl>
              <div><dt>Problem</dt><dd>{p.problem}</dd></div>
              <div><dt>Solution</dt><dd>{p.approach}</dd></div>
              {p.result ? <div><dt>Result</dt><dd>{p.result}</dd></div> : null}
            </dl>
          </article>
        ))}
      </Section>
      <CtaStrip title="Need something similar?" />
    </Layout>
  );
}
