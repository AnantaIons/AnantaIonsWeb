/* The Engineering Trace, as components. See src/styles/trace.css for the
   rules and the reduced-motion behaviour. */

/** A conductor running between two scenes, terminating in a node. */
export function TraceLink({ length = '4.5rem', label }) {
  return (
    <div className="trace-link" aria-hidden="true">
      <span className="trace-node" />
      <span className="trace trace--v" style={{ '--trace-len': length }} />
      <span className="trace-node trace-node--arrives" />
      {label ? <span className="trace-link__label label label--muted">{label}</span> : null}
    </div>
  );
}

/** A horizontal rail under a row of steps or layers. */
export function TraceRail({ className = '' }) {
  return <span className={`trace trace--h ${className}`.trim()} aria-hidden="true" />;
}

export function TraceNode({ signal = false, lg = false, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={[
        'trace-node',
        signal ? 'trace-node--signal' : '',
        lg ? 'trace-node--lg' : '',
        className,
      ].filter(Boolean).join(' ')}
    />
  );
}
