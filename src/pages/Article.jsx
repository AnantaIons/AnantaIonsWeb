import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { Section, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { articleBySlug, articles } from '../content/journal.js';

const fmt = (d) => new Date(`${d}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

function Block({ b }) {
  const [type, a, c] = b;
  if (type === 'h2') return <h2 className="h-2">{a}</h2>;
  if (type === 'ul') return <ul className="checks">{a.map((x) => <li key={x}>{x}</li>)}</ul>;
  if (type === 'tip') return <aside className="article-tip"><Icon name="signal" size={18} /><p>{a}</p></aside>;
  if (type === 'table') {
    return (
      <div className="table-wrap" tabIndex={0} role="region" aria-label={`Table: ${a.join(", ")}`}>
        <table className="spec-table spec-table--data">
          <thead><tr>{a.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
          <tbody>{c.map((r, i) => <tr key={i}>{r.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>))}</tr>)}</tbody>
        </table>
      </div>
    );
  }
  return <p>{a}</p>;
}

export default function Article({ slug }) {
  const a = articleBySlug[slug];
  if (!a) return null;
  const next = articles.filter((x) => x.slug !== slug);
  return (
    <Layout current="/journal/">
      <section className="hero hero--page hero--article dark" aria-labelledby="page-title">
        <div className="container">
          <div className="hero__copy">
            <nav className="crumbs crumbs--dark" aria-label="Breadcrumb">
              <ol><li><a href={path('/journal/')}>Journal</a></li><li aria-current="page">{a.topic}</li></ol>
            </nav>
            <h1 className="h-display" id="page-title">{a.title}</h1>
            <p className="lede">{a.dek}</p>
            <p className="journal-meta"><time dateTime={a.date}>{fmt(a.date)}</time> · {a.minutes} min read · ANANTA IONS</p>
          </div>
        </div>
      </section>
      <section className="section" aria-label="Article">
        <div className="container"><div className="article">
          {a.body.map((b, i) => <Block key={i} b={b} />)}
        </div></div>
      </section>
      <Section soft labelledBy="more-title">
        <h2 className="h-2" id="more-title" style={{ marginBottom: '24px' }}>Keep reading</h2>
        <div className="grid grid--2">
          {next.map((x) => (
            <a className="card card--link" key={x.slug} href={path(`/journal/${x.slug}/`)}>
              <span className="badge">{x.topic}</span>
              <h3 className="h-3">{x.title}</h3>
              <p>{x.dek}</p>
            </a>
          ))}
        </div>
      </Section>
      <CtaStrip title="Want help with this?" cta={{ label: 'Talk to us', href: '/start/' }} />
    </Layout>
  );
}
