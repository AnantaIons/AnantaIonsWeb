import { render } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import '../styles/index.css';
import Home from '../pages/Home.jsx';
import Engineering from '../pages/Engineering.jsx';
import Capabilities from '../pages/Capabilities.jsx';
import Projects from '../pages/Projects.jsx';
import About from '../pages/About.jsx';
import Start from '../pages/Start.jsx';

/* Single-file preview build.
   The production site is six real HTML documents; this bundles the same page
   components into one file so the whole site can be opened from a file:// URL
   or a static host with no server, no build and no network. Navigation moves
   to the hash, and in-page anchors still work. Nothing about the pages
   themselves changes — this is only the delivery. */

const ROUTES = {
  '/': Home,
  '/engineering/': Engineering,
  '/capabilities/': Capabilities,
  '/projects/': Projects,
  '/about/': About,
  '/start/': Start,
};

const readHash = () => {
  const raw = decodeURIComponent(window.location.hash.replace(/^#/, '')) || '/';
  const [path, anchor] = raw.split('#');
  return { path: ROUTES[path] ? path : '/', anchor };
};

function Site() {
  const [{ path, anchor }, setRoute] = useState(readHash);

  useEffect(() => {
    const onHash = () => setRoute(readHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Rewrite the site's real hrefs onto the hash, so every link, including the
  // ones inside page content, keeps working without touching page code.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const a = e.target.closest?.('a[href^="/"]');
      if (!a) return;
      const href = a.getAttribute('href');
      const [p, frag] = href.split('#');
      if (!ROUTES[p]) return;
      e.preventDefault();
      window.location.hash = frag ? `${p}#${frag}` : p;
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    if (anchor) {
      const el = document.getElementById(anchor);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [path, anchor]);

  const Page = ROUTES[path];
  return <Page key={path} />;
}

document.documentElement.classList.add('js');
document.documentElement.classList.remove('no-js');
render(<Site />, document.getElementById('root'));
