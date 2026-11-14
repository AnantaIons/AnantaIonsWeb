/* One button. Resolves to <a> when given an href, so a navigation button is a
   real link. Variants: primary (gold), outline (on light), on-dark, whatsapp. */
export default function Button({
  variant = 'primary', size = 'md', href, type = 'button', children, className = '', ...rest
}) {
  const Tag = href ? 'a' : 'button';
  return (
    <Tag className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      href={href} type={href ? undefined : type} {...rest}>
      {children}
    </Tag>
  );
}
