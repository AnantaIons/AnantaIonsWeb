import { renderToString } from 'preact-render-to-string';
import Home from './pages/Home.jsx';
import Displays from './pages/Displays.jsx';
import Websites from './pages/Websites.jsx';
import CollegeProjects from './pages/CollegeProjects.jsx';
import Shop from './pages/Shop.jsx';
import Start from './pages/Start.jsx';
import NotFound from './pages/NotFound.jsx';

const PAGES = { Home, Displays, Websites, CollegeProjects, Shop, Start, NotFound };

/** Render one page to static HTML for the prerender step. */
export function render(componentName) {
  const Page = PAGES[componentName];
  if (!Page) throw new Error(`Unknown page component: ${componentName}`);
  return renderToString(<Page />);
}
