import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import { path } from '../lib/paths.js';

export default function NotFound() {
  return (
    <Layout current={null}>
      <section className="hero dark" aria-labelledby="nf-title">
        <div className="container">
          <div className="hero__copy">
            <span className="eyebrow">404 · Page not found</span>
            <h1 className="h-display" id="nf-title">That link doesn’t go anywhere</h1>
            <p className="lede">The page may have moved when the site was rebuilt, or the link may be incomplete. ANANTA IONS builds campus LED display systems and embedded firmware in Jaipur — these pages all work:</p>
            <div className="btn-row">
              <Button href={path('/')}>Home</Button>
              <Button href={path('/products/')} variant="on-dark">Display system</Button>
              <Button href={path('/services/')} variant="on-dark">Services</Button>
              <Button href={path('/start/')} variant="on-dark">Contact</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
