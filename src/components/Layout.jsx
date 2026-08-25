import Masthead from './Masthead.jsx';
import SiteFooter from './SiteFooter.jsx';

/* Every page is a <Layout>: skip link, masthead, one <main id="main">, footer.
   Keeping the landmark structure in one place is what makes the heading
   hierarchy and keyboard order predictable across the site. */

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
