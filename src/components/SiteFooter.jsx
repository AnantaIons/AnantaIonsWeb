import { contact, nav, primaryCta, site } from '../content/site.js';
import { PlaceholderTag } from './Placeholder.jsx';
import Button from './Button.jsx';
import { TraceRail } from './Trace.jsx';

const columns = [
  { heading: 'Engineering', links: [
    { label: 'The stack',   href: '/engineering/' },
    { label: 'Capabilities', href: '/capabilities/' },
    { label: 'Process',     href: '/engineering/#process' },
  ] },
  { heading: 'Work', links: [
    { label: 'Projects',    href: '/projects/' },
    { label: 'About',       href: '/about/' },
  ] },
  { heading: 'Start', links: [
    { label: 'Start a project', href: '/start/' },
    { label: 'Contact',         href: '/start/#contact' },
  ] },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <TraceRail className="footer__rail" />
      <div className="footer__inner container">
        <div className="footer__brand">
          <a className="wordmark" href="/">
            <img className="wordmark__mark" src="/logo.png" alt="" width="26" height="26" loading="lazy" decoding="async" />
            <span className="wordmark__text">ANANTA <span className="wordmark__accent">IONS</span></span>
          </a>
          <p className="footer__proposition">{site.proposition}</p>
          <Button href={primaryCta.href} size="sm">{primaryCta.label}</Button>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {columns.map((col) => (
            <div className="footer__col" key={col.heading}>
              <h2 className="footer__heading">{col.heading}</h2>
              <ul className="footer__list">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a className="footer__link" href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h2 className="footer__heading">Contact</h2>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href={`mailto:${contact.email.value}`}>
                  {contact.email.value}
                </a>
                {!contact.email.verified ? <PlaceholderTag>Unconfirmed</PlaceholderTag> : null}
              </li>
              {contact.phone.value ? (
                <li><a className="footer__link" href={`tel:${contact.phone.value}`}>{contact.phone.value}</a></li>
              ) : (
                <li className="footer__link footer__link--empty">
                  Phone <PlaceholderTag>Not supplied</PlaceholderTag>
                </li>
              )}
              {contact.location.value ? (
                <li className="footer__link footer__link--empty">{contact.location.value}</li>
              ) : (
                <li className="footer__link footer__link--empty">
                  Location <PlaceholderTag>Not supplied</PlaceholderTag>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>

      <div className="footer__base container">
        <p className="footer__legal">
          © {new Date().getFullYear()} {site.name}. {site.discipline}.
        </p>
        <p className="footer__legal footer__legal--note">
          Contact details and project details are unconfirmed placeholders pending launch content.
        </p>
      </div>
    </footer>
  );
}
