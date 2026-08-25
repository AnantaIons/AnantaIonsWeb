import { hydrate, render } from 'preact';
import './styles/index.css';

/* `js` switches on every progressive enhancement in the CSS. It is set from
   the bundle rather than inline, so a bundle that never arrives leaves the
   prerendered page in its fully readable no-JS state rather than a
   half-hidden one. */

export default function mount(Page) {
  document.documentElement.classList.add('js');
  document.documentElement.classList.remove('no-js');
  const root = document.getElementById('root');
  if (!root) return;
  // Prerendered markup is hydrated; an empty root (dev server) is rendered.
  if (root.firstElementChild) hydrate(<Page />, root);
  else render(<Page />, root);
}
