import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { Section, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { articles } from '../content/journal.js';

const fmt = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Journal() {
  const [lead, ...rest] = articles;
  return (
    <Layout current="/journal/">
      <PageHero
        eyebrow="Ananta Journal"
        title={<>Notes from the <span className="hl">workbench</span></>}
        lede="Practical guides on LED displays, electronics, embedded systems and websites — written for people who need to make a decision, not pass an exam."
      />
      <Section labelledBy="list-title">
        <h2 className="visually-hidden" id="list-title">Articles</h2>
        <a className="journal-lead corner" href={path(`/journal/${lead.slug}/`)}>
          <span className="badge badge--gold">{lead.topic}</span>
          <h3 className="h-1">{lead.title}</h3>
          <p className="lede">{lead.dek}</p>
          <span className="journal-meta"><time dateTime={lead.date}>{fmt(lead.date)}</time> · {lead.minutes} min read</span>
          <span className="text-link">Read article <Icon name="arrow" size={14} /></span>
        </a>
        <div className="grid grid--2" style={{ marginTop: '24px' }}>
          {rest.map((a) => (
            <a className="card card--link" key={a.slug} href={path(`/journal/${a.slug}/`)}>
              <span className="badge">{a.topic}</span>
              <h3 className="h-2">{a.title}</h3>
              <p>{a.dek}</p>
              <span className="journal-meta card__foot"><time dateTime={a.date}>{fmt(a.date)}</time> · {a.minutes} min read</span>
            </a>
          ))}
        </div>
      </Section>
      <CtaStrip title="Have a question we should write about?" cta={{ label: 'Ask us', href: '/start/' }} />
    </Layout>
  );
}
