/* A full-width LED ticker strip: text masked into a dot grid so it reads as a
   real scrolling LED sign. Decorative — the same words are on the page. */
export default function LedTicker({ items }) {
  const line = items.join('  ◆  ') + '  ◆  ';
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        <span>{line}</span><span>{line}</span>
      </div>
    </div>
  );
}
