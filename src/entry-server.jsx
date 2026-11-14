import { renderToString } from 'preact-render-to-string';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Start from './pages/Start.jsx';
import NotFound from './pages/NotFound.jsx';

const PAGES = { Home, Products, Services, Projects, About, Start, NotFound };

/** Render one page to static HTML for the prerender step. */
export function render(componentName) {
  const Page = PAGES[componentName];
  if (!Page) throw new Error(`Unknown page component: ${componentName}`);
  return renderToString(<Page />);
}
