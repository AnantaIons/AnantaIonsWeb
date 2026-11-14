import { useState } from 'react';
import { path } from '../lib/paths.js';
import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import ProjectStudy from '../components/ProjectStudy.jsx';
import { PlaceholderNotice } from '../components/Placeholder.jsx';
import { projects, projectDomains, unverifiedProjects } from '../content/projects.js';

/* Filtering is an enhancement: the unfiltered list is what renders on the
   server, so every project is in the HTML for a crawler or a visitor without
   JavaScript. The filter narrows an already-present list, it never fetches. */

export default function Projects() {
  const [domain, setDomain] = useState('All');
  const shown = domain === 'All' ? projects : projects.filter((p) => p.domain === domain);
  const unverified = unverifiedProjects().length;

  return (
    <Layout current="/projects/">
      <PageHero
        eyebrow="Projects"
        title={<>Systems, and the part that <span className="hardware">was hard</span>.</>}
        lede="Each project below is a real-world problem, the architecture chosen for it, and the engineering that made it work."
      >
        <Button href={path('/start/')} size="lg">Request a system like these</Button>
      </PageHero>

      {unverified > 0 ? (
        <div className="container">
          <PlaceholderNotice>
            All {unverified} projects on this deployment are placeholders carried over from the
            supplied content model, which marks its catalogue as illustrative. Names, platforms
            and specifications are examples of the kind of work described — they are not
            statements about delivered ANANTA IONS projects, and no customer, outcome or
            performance figure has been invented to fill the gaps. Replace them in{' '}
            <code>src/content/projects.js</code> and set <code>verified: true</code> per entry.
          </PlaceholderNotice>
        </div>
      ) : null}

      <section className="scene scene--tight" aria-label="Filter projects">
        <div className="container">
          <div className="filter" role="group" aria-label="Filter projects by domain">
            {projectDomains.map((d) => (
              <button
                key={d}
                type="button"
                className={`filter__chip${d === domain ? ' is-active' : ''}`}
                aria-pressed={d === domain}
                onClick={() => setDomain(d)}
              >
                {d}
              </button>
            ))}
          </div>
          <p className="filter__count" aria-live="polite">
            Showing {shown.length} of {projects.length} projects
          </p>
        </div>
      </section>

      <div className="container">
        {shown.map((p, i) => (
          <Reveal key={p.id} className="studies__item">
            <ProjectStudy project={p} index={projects.indexOf(p)} />
          </Reveal>
        ))}
      </div>

      <section className="final" aria-labelledby="proj-cta">
        <div className="container">
          <Reveal className="final__inner">
            <h2 className="display-2 final__title" id="proj-cta">Have a system like this to <span className="signal">build</span>?</h2>
            <div className="final__actions">
              <Button href={path('/start/')} size="lg">Start a project</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
