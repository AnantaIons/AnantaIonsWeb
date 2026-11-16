import Icon from './Icon.jsx';
import { waLink } from '../lib/wa.js';

/* Floating WhatsApp button — the fastest way to reach a small business in
   India, so it is one tap away on every page. */
export default function WhatsAppFab() {
  return (
    <a className="wa-fab" href={waLink('Hello ANANTA IONS, ')} target="_blank" rel="noopener noreferrer">
      <Icon name="whatsapp" size={26} />
      <span className="wa-fab__label">WhatsApp us</span>
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}
