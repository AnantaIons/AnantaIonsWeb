import { useEffect, useState } from 'react';

/* Quote basket — the visitor's list of parts to ask a price for.
   Kept in localStorage on this device only (nothing is sent anywhere until
   the visitor presses Send). Storage can be unavailable (private modes,
   blocked storage), so every access is guarded and the basket then simply
   lives for the current page. */

const KEY = 'ai-quote-basket-v1';
const EVT = 'ai-basket-change';
let memory = [];

function read() {
  try { const v = JSON.parse(window.localStorage.getItem(KEY) || '[]'); return Array.isArray(v) ? v : []; }
  catch { return memory; }
}
function write(items) {
  memory = items;
  try { window.localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  window.dispatchEvent(new CustomEvent(EVT));
}

export function addToBasket(id, qty = 1) {
  const items = read();
  const hit = items.find((i) => i.id === id);
  if (hit) hit.qty = Math.min(999, hit.qty + qty); else items.push({ id, qty });
  write(items);
}
export function setQty(id, qty) {
  write(read().map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(999, qty)) } : i)));
}
export function removeFromBasket(id) { write(read().filter((i) => i.id !== id)); }
export function clearBasket() { write([]); }

/* Hook: [] during prerender and first hydration render, then the real list. */
export function useBasket() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const sync = () => setItems(read());
    sync();
    window.addEventListener(EVT, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(EVT, sync); window.removeEventListener('storage', sync); };
  }, []);
  return items;
}
