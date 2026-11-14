import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { Section, PageHero } from '../components/Ui.jsx';
import { contact } from '../content/site.js';

export default function Start() {
  const tel = contact.phone.value.replace(/\s/g, '');
  return (
    <Layout current="/start/">
      <PageHero
        eyebrow="Contact"
        title="Tell us what has to work"
        lede="A paragraph about the problem is enough to start. Specifications can come later. Display systems, firmware, electronics and student projects."
      />

      <Section tight labelledBy="form-title">
        <div className="contact-grid">
          <ContactForm />

          <aside className="aside corner" id="contact" aria-labelledby="direct-title">
            <h2 className="h-2" id="direct-title">Or reach us directly</h2>
            <ul className="contact-list">
              <li><Icon name="phone" size={20} /><a href={`tel:${tel}`}>{contact.phone.value}</a></li>
              <li>
                <Icon name="whatsapp" size={20} />
                <a href={`https://wa.me/${contact.whatsapp.value}`} rel="noopener noreferrer" target="_blank">
                  WhatsApp {contact.phone.value}<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
              <li><Icon name="mail" size={20} /><a href={`mailto:${contact.email.value}`}>{contact.email.value}</a></li>
              <li><Icon name="pin" size={20} /><span>{contact.location.value}</span></li>
            </ul>
            <h3 className="h-3">What happens next</h3>
            <ol className="checks" style={{ marginTop: '12px' }}>
              <li>An engineer reads your message — not a sales inbox.</li>
              <li>We come back with questions, or with a first architecture sketch.</li>
              <li>If it is not work we should take, we say so.</li>
            </ol>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}
