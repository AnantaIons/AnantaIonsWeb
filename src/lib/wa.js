import { contact } from '../content/site.js';

/* WhatsApp deep link with an optional prefilled message. */
export const waLink = (text) =>
  `https://wa.me/${contact.whatsapp.value}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
