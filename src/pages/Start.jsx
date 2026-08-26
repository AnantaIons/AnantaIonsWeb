import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import IntakeForm from '../components/IntakeForm.jsx';
import { TraceNode } from '../components/Trace.jsx';
import { PlaceholderTag } from '../components/Placeholder.jsx';
import { contact } from '../content/site.js';

export default function Start() {
  return (
    <Layout current="/start/">
      <PageHero
        eyebrow="Start a project"
        title={<>Tell us <span className="signal">what has to work</span>.</>}
        lede="Four short steps: the problem, the hardware, the firmware and intelligence, and how it has to ship. Only the first two answers are required — the rest sharpen the conversation."
      />

      <section className="scene scene--tight" aria-labelledby="intake-title" id="intake">
        <div className="container">
          <h2 className="visually-hidden" id="intake-title">Engineering intake</h2>
          <div className="start__grid">
            <Reveal className="start__form">
              <IntakeForm />
            </Reveal>

            <Reveal delay={80} className="start__aside" id="contact">
              <h3 className="heading-1">Rather just write to us?</h3>
              <p className="prose">
                A paragraph describing the problem is enough to start. Specifications can come later.
              </p>

              <ul className="start__contact">
                <li>
                  <Icon name="mail" size={18} />
                  <a href={`mailto:${contact.email.value}`}>{contact.email.value}</a>
                  {!contact.email.verified ? <PlaceholderTag>Unconfirmed</PlaceholderTag> : null}
                </li>
                <li>
                  <Icon name="github" size={18} />
                  <a href={contact.github.value} rel="noopener noreferrer me" target="_blank">
                    github.com/AnantaIons
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
                {contact.phone.value ? (
                  <li><Icon name="signal" size={18} /><a href={`tel:${contact.phone.value}`}>{contact.phone.value}</a></li>
                ) : (
                  <li><Icon name="signal" size={18} /> Phone <PlaceholderTag>Not supplied</PlaceholderTag></li>
                )}
              </ul>

              <div className="start__note">
                <p className="label"><TraceNode /> What happens next</p>
                <ol className="start__steps">
                  <li>An engineer reads the requirement — not a sales inbox.</li>
                  <li>We come back with questions, or with an architecture sketch.</li>
                  <li>If it is not work we should take, we say so.</li>
                </ol>
              </div>

              {!contact.formEndpoint ? (
                <div className="start__warning" role="note">
                  <Icon name="alert" size={18} />
                  <p>
                    <strong>Submission is not connected on this deployment.</strong> The form
                    validates and collects your answers, then tells you plainly that it cannot
                    send them and offers the email route instead — it will never show you a
                    confirmation for a message that was not delivered. Set{' '}
                    <code>contact.formEndpoint</code> in <code>src/content/site.js</code> to
                    enable real submission.
                  </p>
                </div>
              ) : null}
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
