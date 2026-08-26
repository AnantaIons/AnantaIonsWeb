import { renderToString } from 'preact-render-to-string';
import Home from './pages/Home.jsx';
import Engineering from './pages/Engineering.jsx';
import Capabilities from './pages/Capabilities.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Start from './pages/Start.jsx';

const PAGES = { Home, Engineering, Capabilities, Projects, About, Start };

/** Render one page to static HTML for the prerender step. */
export function render(componentName) {
  const Page = PAGES[componentName];
  if (!Page) throw new Error(`Unknown page component: ${componentName}`);
  return renderToString(<Page />);
}
