import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import { path } from '../lib/paths.js';
import { TraceLink, TraceNode } from '../components/Trace.jsx';

/* Static hosts serve /404.html for anything they cannot find, so it is a real
   page of the site rather than a bare server string — same masthead, same
   footer, same way out. */

export default function NotFound() {
  return (
    <Layout current={null}>
      <section className="scene notfound" aria-labelledby="nf-title">
        <div className="container container--narrow">
          <Reveal>
            <p className="label"><TraceNode /> 404 · No route</p>
            <h1 className="display-2 notfound__title" id="nf-title">
              That trace doesn’t <span className="hardware">go anywhere</span>.
            </h1>
            <p className="lede">
              The page you asked for isn’t here — it may have moved, or the link may be
              incomplete. Everything below is a working way back in.
            </p>
          </Reveal>

          <TraceLink length="3.5rem" />

          <Reveal className="notfound__routes">
            <ul>
              <li><a href={path('/')}>Home</a> — what we engineer, and why</li>
              <li><a href={path('/engineering/')}>Engineering</a> — silicon to shipped product</li>
              <li><a href={path('/capabilities/')}>Capabilities</a> — the seven disciplines</li>
              <li><a href={path('/projects/')}>Projects</a> — systems and the hard parts</li>
              <li><a href={path('/about/')}>About</a> — how we work</li>
            </ul>
          </Reveal>

          <Reveal className="scene__foot">
            <Button href={path('/start/')} size="lg">Start a project</Button>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
