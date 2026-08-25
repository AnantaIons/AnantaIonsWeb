/* Renders the visible marker that content is unverified. Content integrity is
   a UI-level guarantee here, not a code comment: if `verified` is false the
   visitor is told so, in the same place the claim is made. */

export function PlaceholderTag({ children = 'Placeholder' }) {
  return (
    <span className="placeholder-tag">
      <span className="placeholder-tag__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export function PlaceholderNotice({ children }) {
  return (
    <aside className="placeholder-notice" role="note">
      <strong className="placeholder-notice__title">Placeholder content</strong>
      <p className="placeholder-notice__body">{children}</p>
    </aside>
  );
}
