import Layout from '../components/Layout.jsx';
import PageHero from '../components/PageHero.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { TraceLink, TraceNode } from '../components/Trace.jsx';
import { principles, industries } from '../content/about.js';
import { PlaceholderTag } from '../components/Placeholder.jsx';
import { contact } from '../content/site.js';

export default function About() {
  return (
    <Layout current="/about/">
      <PageHero
        eyebrow="About"
        title={<>An <span className="signal">engineering partner</span>, not a services desk.</>}
        lede="Bring an idea, a prototype, a hardware platform or a technical requirement. We architect, engineer and validate the embedded layer that makes it a reliable product."
      >
        <Button href="/start/" size="lg">Work with us</Button>
      </PageHero>

      <section className="scene" aria-labelledby="stance-title">
        <div className="container container--narrow">
          <Reveal>
            <h2 className="display-3" id="stance-title">
              From <span className="signal">low-level firmware</span> to{' '}
              <span className="hardware">connected intelligent products.</span>
            </h2>
            <p className="prose" style={{ marginTop: 'var(--space-lg)' }}>
              Most embedded products do not fail at one layer. They fail in the gap between two —
              a power rail that was budgeted for the typical case, a radio that was validated on a
              bench, a control loop that guarantees an average rather than a worst case. We work
              across the whole path specifically so those gaps have an owner.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="scene scene--raised scene--edged" aria-labelledby="principles-title">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> How we work</p>
            <h2 className="display-2" id="principles-title">Engineering quality over <span className="hardware">marketing claims</span>.</h2>
          </Reveal>
          <ul className="principles">
            {principles.map(([title, body], i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 60} className="principles__item">
                <h3 className="heading-2">{title}</h3>
                <p className="principles__body">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="scene" aria-labelledby="industries-title" id="industries">
        <div className="container">
          <Reveal className="scene__head">
            <p className="label"><TraceNode /> Where it runs</p>
            <h2 className="display-2" id="industries-title">Engineering that runs in <span className="hardware">the field</span>.</h2>
          </Reveal>
          <ul className="industries">
            {industries.map(([icon, title, body], i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 60} className="industries__item">
                <Icon name={icon} size={26} className="industries__icon" />
                <h3 className="heading-2">{title}</h3>
                <p className="industries__body">{body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="quiet" aria-labelledby="about-quiet">
        <div className="container container--narrow">
          <Reveal>
            <p className="display-3 quiet__line" id="about-quiet">
              We would rather say “not verified” than say something impressive.
            </p>
            <TraceLink length="4rem" />
            <p className="prose quiet__note">
              Company details on this deployment — contact routes, project history, results —
              are marked wherever they are not yet confirmed{' '}
              <PlaceholderTag>like this</PlaceholderTag>. Nothing has been invented to fill a gap.
              {contact.email.value ? (
                <> Reach us at <a href={`mailto:${contact.email.value}`}>{contact.email.value}</a>.</>
              ) : null}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="final" aria-labelledby="about-cta">
        <div className="container">
          <Reveal className="final__inner">
            <h2 className="display-2 final__title" id="about-cta">Let’s engineer <span className="signal">what’s next</span>.</h2>
            <div className="final__actions">
              <Button href="/start/" size="lg">Start a project</Button>
              <Button href="/engineering/" size="lg" variant="outline">See the stack</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
