import { useEffect, useState } from 'react';

/* Day / Night / Auto. Auto follows the real time of day in Jaipur (sky.js);
   Day and Night pin it. Stored per browser, applied before first paint. */
const NEXT = { auto: 'night', night: 'day', day: 'auto' };
const LABEL = { auto: 'Auto (follows the time of day)', night: 'Night', day: 'Day' };

const Sun = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
const Moon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>);
const Auto = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="8" /><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" stroke="none" /></svg>);

export default function ThemeToggle() {
  const [mode, setMode] = useState('auto');
  useEffect(() => { setMode(document.documentElement.dataset.theme || 'auto'); }, []);
  const change = () => {
    const m = NEXT[mode];
    try { localStorage.setItem('ai-theme', m); } catch (e) { /* private mode: still works for this page */ }
    if (m === 'auto') { try { localStorage.removeItem('ai-theme'); } catch (e) { /* ignore */ } }
    document.documentElement.dataset.theme = m;
    if (window.__sky) window.__sky();
    setMode(m);
  };
  return (
    <button type="button" className="theme-toggle" onClick={change}
      aria-label={`Theme: ${LABEL[mode]}. Change theme`} title={`Theme: ${LABEL[mode]}`}>
      {mode === 'night' ? <Moon /> : mode === 'day' ? <Sun /> : <Auto />}
    </button>
  );
}
