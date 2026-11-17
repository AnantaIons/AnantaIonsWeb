import Mark from './Mark.jsx';
import Icon from './Icon.jsx';
import WhatsAppFab from './WhatsAppFab.jsx';
import { path } from '../lib/paths.js';
import { site, contact } from '../content/site.js';

const COLS = [
  { heading: 'What we do', links: [['LED Displays', '/displays/'], ['Board Gallery', '/displays/templates/'], ['Engineering', '/engineering/'], ['Websites', '/websites/'], ['College Projects', '/college-projects/'], ['Shop', '/shop/']] },
  { heading: 'Quick links', links: [['Try the LED demo', '/displays/#try'], ['Journal', '/journal/'], ['Student discount', '/college-projects/#offer'], ['Component list', '/shop/#catalogue'], ['Contact', '/start/']] },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <a className="wordmark" href={path('/')}>
              <Mark size={30} />
              <span>ANANTA <span className="wordmark__accent">IONS</span></span>
              <span className="visually-hidden">— home</span>
            </a>
            <p>{site.proposition}</p>
          </div>
          {COLS.map((c) => (
            <div key={c.heading}>
              <h2>{c.heading}</h2>
              <ul>
                {c.links.map(([label, href]) => (
                  <li key={href}><a href={path(href)}>{label}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div className="contact-col">
            <h2>Contact</h2>
            <ul>
              <li><a href={`tel:${contact.phone.value.replace(/\s/g, '')}`}><Icon name="phone" size={18} />{contact.phone.value}</a></li>
              <li><a href={`https://wa.me/${contact.whatsapp.value}`} rel="noopener noreferrer" target="_blank"><Icon name="whatsapp" size={18} />WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a></li>
              <li><a href={`mailto:${contact.email.value}`}><Icon name="mail" size={18} />{contact.email.value}</a></li>
              <li><a href={contact.github.value} rel="noopener noreferrer me" target="_blank"><Icon name="github" size={16} />GitHub<span className="visually-hidden"> (opens in a new tab)</span></a></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__legal">
          <span>© {year} ANANTA IONS · {contact.location.value}</span>
          <span>{site.discipline}</span>
        </div>
      </div>
      <WhatsAppFab />
    </footer>
  );
}
