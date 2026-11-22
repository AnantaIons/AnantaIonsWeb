import { SCENES, SceneArt } from './AppScenes.jsx';

/* The same places, after dark — where an LED board earns its money.
   Always drawn at night, whatever the page theme. Illustrations, not
   customer photos. */
const USES = {
  billboard: 'Big, bright offers that drivers read from far away. Change the ad from your phone.',
  shoes: 'The shop stays visible after the shutters are half down. Sale and new-arrival messages.',
  medical: 'Open now, 24-hour service and offers — the first thing people look for at night.',
  hospital: 'Emergency and OPD signs that are clear from the road, even in a power cut with battery backup.',
  school: 'Admissions open, events and timings at the gate, read by parents on the evening drive.',
  restaurant: 'Today’s special and home delivery number, changed in seconds when the menu changes.',
};

export default function NightUses({ limit = 6, pre = 'nu-' }) {
  return (
    <div className="night-uses" role="region" aria-label="Night use cases" tabIndex={0}>
      {SCENES.slice(0, limit).map((s) => (
        <figure className="night-use" key={s.id}>
          <div className="night-use__art">
            <SceneArt s={s} pre={pre} />
            <span className="night-use__live" aria-hidden="true">LIVE</span>
          </div>
          <figcaption><strong>{s.title}</strong><span>{USES[s.id] || s.note}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}
