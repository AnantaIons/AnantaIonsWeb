import LedMatrix from './LedMatrix.jsx';

/* The home hero's right side: three layers that stand for the divisions —
   a real LED board (Displays), a phone showing a website (Digital) and a
   circuit card (Engineering). Decorative; the same story is told in text. */
export default function HeroComposition() {
  return (
    <div className="hero-comp" aria-hidden="true">
      <div className="hero-comp__board"><LedMatrix id="hero" /></div>

      <div className="hero-comp__phone">
        <div className="mini-site">
          <div className="mini-site__nav"><i /><span /><span /><span /></div>
          <div className="mini-site__hero"><b /><b /><em /></div>
          <div className="mini-site__cards"><span /><span /></div>
          <div className="mini-site__btn" />
        </div>
      </div>

      <div className="hero-comp__chip">
        <svg viewBox="0 0 160 110">
          <rect x="4" y="4" width="152" height="102" rx="10" fill="#10201A" stroke="#3A5A4C" />
          <path d="M20 30 H55 L65 40 H70 M20 80 H50 L60 70 H70 M110 40 H125 L135 30 H145 M110 70 H125 L135 80 H145" stroke="#C58960" strokeWidth="2" fill="none" />
          <rect x="70" y="28" width="40" height="54" rx="4" fill="#121110" stroke="#D6B66B" />
          {Array.from({ length: 5 }, (_, i) => <rect key={`l${i}`} x="64" y={33 + i * 10} width="6" height="3" fill="#D6B66B" />)}
          {Array.from({ length: 5 }, (_, i) => <rect key={`r${i}`} x="110" y={33 + i * 10} width="6" height="3" fill="#D6B66B" />)}
          <circle cx="20" cy="30" r="3" fill="#39C6D6" /><circle cx="145" cy="80" r="3" fill="#39C6D6" />
        </svg>
        <span>firmware · v2.4 · OTA ready</span>
      </div>
    </div>
  );
}
