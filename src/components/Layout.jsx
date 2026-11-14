import Masthead from './Masthead.jsx';
import SiteFooter from './SiteFooter.jsx';

/* Every page: skip link, masthead, one <main id="main">, footer. */
export default function Layout({ current, children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Masthead current={current} />
      <main id="main" tabIndex={-1}>{children}</main>
      <SiteFooter />
    </>
  );
}
