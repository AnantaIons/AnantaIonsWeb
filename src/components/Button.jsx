/* One button, three intents. `as` resolves to <a> when an href is given, so a
   navigation button is a real link — keyboard, middle-click and crawlers all
   behave correctly. */

export default function Button({
  variant = 'primary', size = 'md', href, type = 'button',
  children, trailing = true, className = '', ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const cls = `btn btn--${variant} btn--${size} ${className}`.trim();
  return (
    <Tag
      className={cls}
      href={href}
      type={href ? undefined : type}
      {...rest}
    >
      <span className="btn__label">{children}</span>
      {trailing && variant !== 'quiet' ? <span className="btn__trace" aria-hidden="true" /> : null}
    </Tag>
  );
}
