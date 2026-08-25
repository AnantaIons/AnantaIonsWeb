import Icon from './Icon.jsx';
import Button from './Button.jsx';
import { TraceNode } from './Trace.jsx';
import { PlaceholderTag } from './Placeholder.jsx';

/* A project rendered at case-study weight rather than as a portfolio tile.
   Structure follows the brief: problem, approach, architecture, technology,
   engineering, result, status.

   `result` is the one field that asserts an outcome, so it is the one field
   that is never filled from anything but verified material — when it is null
   the study says the outcome is not published rather than inventing one. */

const GLYPHS = {
  'Smart Energy':      'M12 2 4 13h6l-1 9 9-12h-6z',
  'Industrial IoT':    'M4 20V9l6 4V9l6 4V9l4 3v8z',
  Environmental:       'M12 21c5-3 8-7 8-11a8 8 0 1 0-16 0c0 4 3 8 8 11zM12 6v9',
  'Connected Devices': 'M12 3.5v5M12 15.5v5M6 12H3.5M20.5 12H18M12 8.5 6 12l6 3.5L18 12z',
  Automation:         'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM12 2v3M12 19v3M2 12h3M19 12h3',
};

function ProjectGlyph({ domain }) {
  return (
    <div className="study__glyph" aria-hidden="true">
      <svg viewBox="0 0 240 160" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern id={`g-${domain.replace(/\s/g, '')}`} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0V16" fill="none" stroke="var(--ai-line)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="240" height="160" fill={`url(#g-${domain.replace(/\s/g, '')})`} />
        <path className="trace-path" style={{ '--trace-length': 320 }}
              d="M0 132 H56 V96 H108 V132 H184 V64 H240" />
        <rect x="88" y="44" width="64" height="64" rx="1"
              fill="var(--ai-panel-2)" stroke="var(--ai-line-2)" />
        <g transform="translate(108 64) scale(1)" stroke="var(--ai-gold)" strokeWidth="1.5"
           fill="none" strokeLinecap="square">
          <path d={GLYPHS[domain] || GLYPHS['Industrial IoT']} />
        </g>
      </svg>
    </div>
  );
}

export default function ProjectStudy({ project, index }) {
  const p = project;
  const spec = [
    ['Platform',     p.technology.platform],
    ['Connectivity', p.technology.connectivity],
    ['Interface',    p.technology.interface],
    ['Status',       p.status],
  ];

  return (
    <article
      className={`study${index % 2 ? ' study--mirrored' : ''}`}
      id={p.id}
      aria-labelledby={`${p.id}-title`}
    >
      <div className="study__head">
        <p className="label">
          <TraceNode /> Project {String(index + 1).padStart(2, '0')} · {p.domain}
        </p>
        <h2 className="display-3 study__title" id={`${p.id}-title`}>{p.title}</h2>
        <p className="lede">{p.summary}</p>
        {!p.verified ? <PlaceholderTag>Unverified — placeholder project</PlaceholderTag> : null}
      </div>

      <ProjectGlyph domain={p.domain} />

      <div className="study__body">
        <div className="study__section">
          <h3 className="label label--signal">The problem</h3>
          <p className="prose">{p.problem}</p>
        </div>
        <div className="study__section">
          <h3 className="label label--signal">The approach</h3>
          <p className="prose">{p.approach}</p>
        </div>
        <div className="study__section">
          <h3 className="label label--signal">The architecture</h3>
          <p className="prose mono study__architecture">{p.architecture}</p>
        </div>
        <div className="study__section">
          <h3 className="label label--signal">The engineering</h3>
          <p className="prose">{p.engineering}</p>
        </div>
        <div className="study__section">
          <h3 className="label label--signal">The result</h3>
          {p.result ? (
            <p className="prose">{p.result}</p>
          ) : (
            <p className="prose study__no-result">
              Not published. No measured outcome for this project has been verified, so none is
              claimed here.
            </p>
          )}
        </div>
      </div>

      <dl className="study__spec">
        {spec.map(([k, v]) => (
          <div className="study__spec-item" key={k}>
            <dt className="label label--muted">{k}</dt>
            <dd className="study__spec-value">{v}</dd>
          </div>
        ))}
      </dl>

      <ul className="chip-set" aria-label={`${p.title} technologies`}>
        {p.tags.map((t) => <li className="chip" key={t}>{t}</li>)}
      </ul>

      <p className="study__cta">
        <Button href="/start/" size="sm" variant="quiet">
          Discuss a system like this <Icon name="arrow" size={16} />
        </Button>
      </p>
    </article>
  );
}
