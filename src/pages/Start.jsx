import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import EnquiryWizard from '../components/EnquiryWizard.jsx';
import { Section, PageHero } from '../components/Ui.jsx';
import { contact } from '../content/site.js';

export default function Start() {
  const tel = contact.phone.value.replace(/\s/g, '');
  return (
    <Layout current="/start/">
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to build"
        lede="Five quick steps — or skip the form and call or WhatsApp us directly."
      />

      <Section tight labelledBy="form-title">
        <div className="contact-grid">
          <EnquiryWizard />

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
              <li>We read your message and reply.</li>
              <li>We ask any questions and suggest how to approach it.</li>
              <li>If it is not something we can do well, we tell you.</li>
            </ol>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}
