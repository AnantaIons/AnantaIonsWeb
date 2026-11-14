/* @ds-bundle: {"format":4,"namespace":"AnantaIonsDesignSystem_e44e3f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"PillTab","sourcePath":"components/buttons/PillTab.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"CornerSquare","sourcePath":"components/content/CornerSquare.jsx"},{"name":"StatCallout","sourcePath":"components/content/StatCallout.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"PrimaryNav","sourcePath":"components/navigation/PrimaryNav.jsx"},{"name":"SubNav","sourcePath":"components/navigation/SubNav.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/UtilityBar.jsx"},{"name":"CtaStrip","sourcePath":"components/overlays/CtaStrip.jsx"},{"name":"HeroChapter","sourcePath":"components/overlays/HeroChapter.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"834afac9799f","components/buttons/PillTab.jsx":"96182e6115b5","components/content/Badge.jsx":"e5164a4804b4","components/content/Card.jsx":"daef5f3c0398","components/content/CornerSquare.jsx":"95ec50072401","components/content/StatCallout.jsx":"3ed9914a07b4","components/forms/SearchInput.jsx":"d367d0961545","components/forms/TextInput.jsx":"382b987337e1","components/navigation/Breadcrumb.jsx":"4ca50ff73d2f","components/navigation/Footer.jsx":"00c449c42f01","components/navigation/PrimaryNav.jsx":"f9bb97080440","components/navigation/SubNav.jsx":"557784e1a7d7","components/navigation/UtilityBar.jsx":"1df18707ec9a","components/overlays/CtaStrip.jsx":"4be18b48d9dd","components/overlays/HeroChapter.jsx":"73803f9120cc","ui_kits/marketing/HomeScreen.jsx":"fbdb8a500142","ui_kits/marketing/ResourcesScreen.jsx":"99da8dc95c6a","ui_kits/marketing/Shared.jsx":"453045e6f774","ui_kits/marketing/SolutionsScreen.jsx":"852453c5eb76"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AnantaIonsDesignSystem_e44e3f = window.AnantaIonsDesignSystem_e44e3f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FS = {
  lg: '18px',
  md: '16px',
  sm: '14.4px'
};
const base = {
  fontFamily: 'var(--font-family)',
  fontWeight: 700,
  lineHeight: 1.25,
  borderRadius: 'var(--radius-sm)',
  border: '2px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
  boxSizing: 'border-box',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};

/**
 * Button — the universal Ananta Ions CTA.
 * variant: primary | outline | outline-on-dark | ghost | disabled
 */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  as = 'button',
  href,
  ...rest
}) {
  const isDisabled = disabled || variant === 'disabled';
  const pad = size === 'lg' ? '13px 28px' : size === 'sm' ? '9px 16px' : '11px 24px';
  const height = size === 'lg' ? 48 : size === 'sm' ? 36 : 44;
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      borderColor: 'var(--color-primary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-primary)'
    },
    'outline-on-dark': {
      background: 'transparent',
      color: 'var(--color-on-dark)',
      borderColor: 'var(--color-on-dark)',
      borderWidth: '1px'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'transparent',
      padding: 0,
      letterSpacing: '.1px'
    },
    disabled: {
      background: 'var(--color-surface-soft)',
      color: 'var(--color-ash)',
      borderColor: 'var(--color-surface-soft)',
      cursor: 'not-allowed'
    }
  };
  const style = {
    ...base,
    fontSize: FS[size] || FS.md,
    padding: variant === 'ghost' ? 0 : pad,
    height: variant === 'ghost' ? 'auto' : height,
    letterSpacing: size === 'sm' ? '.144px' : 0,
    ...(isDisabled ? variants.disabled : variants[variant])
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    href: href,
    disabled: Tag === 'button' ? isDisabled : undefined
  }, rest), children, variant === 'ghost' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/PillTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PillTab — segmented-control tab. Flips fully inverted (black fill) when active.
 */
function PillTab({
  active = false,
  children,
  ...rest
}) {
  const style = {
    fontFamily: 'var(--font-family)',
    fontSize: '14.4px',
    fontWeight: 700,
    letterSpacing: '.144px',
    lineHeight: 1,
    padding: '10px 18px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-hairline)',
    cursor: 'pointer',
    transition: 'background-color .15s ease, color .15s ease',
    background: active ? 'var(--color-ink)' : 'transparent',
    color: active ? 'var(--color-on-dark)' : 'var(--color-ink)',
    borderColor: active ? 'var(--color-ink)' : 'var(--color-hairline)'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: style,
    "aria-pressed": active
  }, rest), children);
}
Object.assign(__ds_scope, { PillTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/PillTab.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — uppercase document-type / category tag on a soft-gray fill.
 */
function Badge({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-family)',
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: 1.43,
      textTransform: 'uppercase',
      letterSpacing: '.3px',
      color: 'var(--color-body)',
      background: 'var(--color-surface-soft)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/CornerSquare.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CornerSquare — the brand's signature 12px gold square, anchored to a card corner.
 * position: top-left | top-right | bottom-left | bottom-right
 */
function CornerSquare({
  position = 'top-left',
  size = 12,
  color = 'var(--color-primary)',
  style,
  ...rest
}) {
  const [v, h] = position.split('-');
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: size,
      height: size,
      background: color,
      [v]: 0,
      [h]: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { CornerSquare });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CornerSquare.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — flat white rectangle with hairline border and gold corner square.
 * variant: product | feature | resource
 */
function Card({
  variant = 'resource',
  badge,
  image,
  imageNode,
  icon,
  title,
  description,
  action = 'Learn more',
  cornerSquare = true,
  cornerPosition = 'top-left',
  style,
  children,
  ...rest
}) {
  const padding = variant === 'feature' ? '32px' : '24px';
  const aspect = variant === 'product' ? '1 / 1' : variant === 'resource' ? '3 / 2' : '16 / 9';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--color-canvas)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-family)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      ...style
    }
  }, rest), cornerSquare && /*#__PURE__*/React.createElement(__ds_scope.CornerSquare, {
    position: cornerPosition
  }), variant === 'feature' && icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      fontSize: '24px',
      color: 'var(--color-primary)'
    }
  }), variant !== 'feature' && imageNode && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `-${parseInt(padding)}px -${parseInt(padding)}px 4px`
    }
  }, imageNode), variant !== 'feature' && !imageNode && image && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `-${parseInt(padding)}px -${parseInt(padding)}px 4px`,
      aspectRatio: aspect,
      overflow: 'hidden',
      background: 'var(--color-surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: variant === 'feature' ? '20px' : '17px',
      fontWeight: 700,
      lineHeight: variant === 'feature' ? 1.25 : 1.47,
      color: 'var(--color-ink)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: variant === 'feature' ? '16px' : '15px',
      fontWeight: 400,
      lineHeight: variant === 'feature' ? 1.5 : 1.67,
      color: 'var(--color-body)'
    }
  }, description), children, action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost"
  }, action)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCallout — a massive gold numeric with a caption. Used in long-form pages.
 */
function StatCallout({
  value,
  caption,
  cornerSquare = false,
  bordered = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      background: 'var(--color-canvas)',
      border: bordered ? '1px solid var(--color-hairline)' : 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '32px',
      fontFamily: 'var(--font-family)',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), cornerSquare && /*#__PURE__*/React.createElement(__ds_scope.CornerSquare, {
    position: "top-left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: 1.25,
      color: 'var(--color-primary)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
      color: 'var(--color-body)',
      marginTop: '8px'
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SearchInput — 40px search field with a leading magnifier glyph (Font Awesome).
 */
function SearchInput({
  placeholder = 'Search',
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'var(--font-family)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: '14px',
      color: 'var(--color-mute)',
      fontSize: '14px',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "search",
    placeholder: placeholder,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      height: '40px',
      padding: '10px 16px 10px 38px',
      fontFamily: 'var(--font-family)',
      fontSize: '16px',
      color: 'var(--color-ink)',
      background: 'var(--color-canvas)',
      border: `${focused ? 2 : 1}px solid ${focused ? 'var(--color-primary)' : 'var(--color-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextInput — labelled text field. Gold 2px focus border is the only focus signal.
 */
function TextInput({
  label,
  error,
  id,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--color-error)' : focused ? 'var(--color-primary)' : 'var(--color-hairline)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      fontFamily: 'var(--font-family)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 700,
      color: 'var(--color-ink)',
      marginBottom: '8px'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      height: '44px',
      padding: '12px 16px',
      fontFamily: 'var(--font-family)',
      fontSize: '16px',
      color: 'var(--color-ink)',
      background: 'var(--color-canvas)',
      border: `${focused || error ? 2 : 1}px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      outline: 'none',
      boxSizing: 'border-box',
      ...style
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12px',
      color: 'var(--color-error)',
      marginTop: '6px'
    }
  }, error));
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Breadcrumb — 48px soft-gray strip, uppercase caption type, chevron separators.
 */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface-soft)',
      height: '48px',
      fontFamily: 'var(--font-family)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-right",
    "aria-hidden": "true",
    style: {
      fontSize: '10px',
      color: 'var(--color-mute)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.3px',
      color: i === items.length - 1 ? 'var(--color-ink)' : 'var(--color-mute)',
      cursor: i === items.length - 1 ? 'default' : 'pointer'
    }
  }, it)))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Footer — dense multi-column black footer with a fine-print bar.
 * columns: [{ heading, links: [] }]
 */
function Footer({
  brand = 'ANANTA IONS',
  columns = [],
  social = ['fa-brands fa-x-twitter', 'fa-brands fa-linkedin-in', 'fa-brands fa-youtube', 'fa-brands fa-github'],
  legal = '© 2026 Ananta Ions. All rights reserved.',
  legalLinks = ['Privacy Policy', 'Terms of Use', 'Cookie Settings'],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark-mute)',
      fontFamily: 'var(--font-family)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`,
      gap: '32px'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 16px',
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--color-on-dark)'
    }
  }, col.heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: '15px',
      fontWeight: 400,
      color: 'var(--color-on-dark-mute)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      marginTop: '48px',
      paddingTop: '24px',
      borderTop: '1px solid var(--color-hairline-strong)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '16px',
      fontWeight: 700,
      letterSpacing: '.5px',
      color: 'var(--color-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u25AA"), "\xA0", brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '18px'
    }
  }, social.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: '32px',
      height: '32px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--color-hairline-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-on-dark)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: s,
    "aria-hidden": "true",
    style: {
      fontSize: '14px'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      marginTop: '20px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.3px',
      color: 'var(--color-mute)'
    }
  }, legal), legalLinks.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: '10px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.3px',
      color: 'var(--color-mute)',
      cursor: 'pointer'
    }
  }, l)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PrimaryNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PrimaryNav — 64px black bar: wordmark, centered nav, search + login + gold CTA.
 * No logo was provided; the wordmark renders as plain uppercase type.
 */
function PrimaryNav({
  brand = 'ANANTA IONS',
  links = ['Products', 'Solutions', 'Industries', 'Resources', 'Support', 'Company'],
  activeLink,
  cta = 'Get started',
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)',
      height: '64px',
      fontFamily: 'var(--font-family)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '18px',
      fontWeight: 700,
      letterSpacing: '.5px',
      color: 'var(--color-on-dark)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u25AA"), "\xA0", brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate?.(l),
    style: {
      fontSize: '16px',
      fontWeight: 700,
      color: l === activeLink ? 'var(--color-primary)' : 'var(--color-on-dark)',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: l === activeLink ? '2px solid var(--color-primary)' : '2px solid transparent',
      paddingBottom: '2px'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-magnifying-glass",
    "aria-hidden": "true",
    style: {
      color: 'var(--color-on-dark)',
      fontSize: '16px',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: '16px',
      fontWeight: 700,
      color: 'var(--color-on-dark)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, "Login"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm"
  }, cta))));
}
Object.assign(__ds_scope, { PrimaryNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PrimaryNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SubNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SubNav — 56px soft-gray section nav strip anchored above content.
 */
function SubNav({
  items = [],
  active,
  onSelect,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface-soft)',
      height: '56px',
      borderBottom: '1px solid var(--color-hairline)',
      fontFamily: 'var(--font-family)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'stretch',
      gap: '28px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: () => onSelect?.(it),
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      fontWeight: 700,
      color: it === active ? 'var(--color-ink)' : 'var(--color-body)',
      borderBottom: it === active ? '3px solid var(--color-primary)' : '3px solid transparent',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, it))));
}
Object.assign(__ds_scope, { SubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SubNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/UtilityBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UtilityBar — 32px black strip at the very top; right-aligned locale / login cluster.
 */
function UtilityBar({
  items = ['Locale: EN', 'Login', 'Account'],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)',
      height: '32px',
      fontFamily: 'var(--font-family)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '100%',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '20px'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'var(--color-on-dark-mute)',
      cursor: 'pointer'
    }
  }, it))));
}
Object.assign(__ds_scope, { UtilityBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/UtilityBar.jsx", error: String((e && e.message) || e) }); }

// components/overlays/CtaStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CtaStrip — compressed one-row black band bridging content sections.
 */
function CtaStrip({
  headline,
  cta = 'Contact sales',
  onClick,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)',
      fontFamily: 'var(--font-family)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, headline), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onClick
  }, cta)));
}
Object.assign(__ds_scope, { CtaStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/CtaStrip.jsx", error: String((e && e.message) || e) }); }

// components/overlays/HeroChapter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * HeroChapter — black hero: full-bleed image (optional) with a dark gradient overlay,
 * copy hugging the left, a single gold CTA (optionally paired with an outline-on-dark).
 */
function HeroChapter({
  eyebrow,
  headline,
  subhead,
  image,
  primaryCta = 'Get started',
  secondaryCta,
  onPrimary,
  onSecondary,
  cornerSquare = true,
  style,
  ...rest
}) {
  const bg = image ? {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.7) 45%, rgba(0,0,0,.25) 100%), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {
    background: 'var(--color-surface-dark)'
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      position: 'relative',
      color: 'var(--color-on-dark)',
      fontFamily: 'var(--font-family)',
      ...bg,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 24px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: '620px',
      paddingLeft: '20px'
    }
  }, cornerSquare && /*#__PURE__*/React.createElement(__ds_scope.CornerSquare, {
    position: "top-left",
    size: 16
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '.5px',
      color: 'var(--color-primary)',
      marginBottom: '16px'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: 1.25
    }
  }, headline), subhead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: 1.4,
      color: 'var(--color-on-dark-mute)'
    }
  }, subhead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      marginTop: '32px',
      flexWrap: 'wrap'
    }
  }, primaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: onPrimary
  }, primaryCta), secondaryCta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline-on-dark",
    size: "lg",
    onClick: onSecondary
  }, secondaryCta)))));
}
Object.assign(__ds_scope, { HeroChapter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/HeroChapter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
(function () {
  const {
    HeroChapter,
    Card,
    StatCallout,
    CtaStrip,
    Button
  } = window.AnantaIonsDesignSystem_e44e3f;
  function HomeScreen({
    onNavigate
  }) {
    const P = window.KitPlaceholder,
      Section = window.KitSection,
      Head = window.KitSectionHead;
    const features = [{
      icon: 'fa-solid fa-brain',
      title: 'Agentic AI',
      description: 'Build and orchestrate autonomous agents on optimized inference infrastructure.'
    }, {
      icon: 'fa-solid fa-database',
      title: 'Data science',
      description: 'Accelerate the full pipeline from ingestion to feature engineering at scale.'
    }, {
      icon: 'fa-solid fa-bolt',
      title: 'Inference',
      description: 'Serve models at the lowest latency and cost across cloud and edge.'
    }, {
      icon: 'fa-solid fa-comments',
      title: 'Conversational AI',
      description: 'Deploy speech and language systems engineered for real-time response.'
    }];
    const resources = [{
      badge: 'White paper',
      title: 'Scaling inference across the edge',
      description: 'A technical walkthrough of distributed serving under strict latency budgets.'
    }, {
      badge: 'Webinar',
      title: 'Training at trillion-parameter scale',
      description: 'Architecture patterns for large-model training on end-to-end fabric.'
    }, {
      badge: 'Blog',
      title: 'Inside the accelerator microarchitecture',
      description: 'How the AI-100 pipeline reaches 4× throughput per watt.'
    }];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroChapter, {
      eyebrow: "Platform",
      headline: "Accelerated computing for every industry",
      subhead: "Build, train, and deploy at scale on infrastructure engineered end to end.",
      primaryCta: "Get started",
      secondaryCta: "Watch the film",
      onPrimary: () => onNavigate('Resources')
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Head, {
      eyebrow: "Platform",
      title: "Explore the platform",
      sub: "One architecture spanning training, inference, and data science \u2014 from the data center to the edge."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px'
      }
    }, features.map(f => /*#__PURE__*/React.createElement(Card, _extends({
      key: f.title,
      variant: "feature"
    }, f, {
      action: ""
    }))))), /*#__PURE__*/React.createElement(Section, {
      soft: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '24px'
      }
    }, /*#__PURE__*/React.createElement(StatCallout, {
      value: "4\xD7",
      caption: "faster training throughput vs. the prior generation",
      cornerSquare: true
    }), /*#__PURE__*/React.createElement(StatCallout, {
      value: "60%",
      caption: "lower cost per inference at production scale",
      cornerSquare: true
    }), /*#__PURE__*/React.createElement(StatCallout, {
      value: "30ms",
      caption: "median end-to-end serving latency at the edge",
      cornerSquare: true
    }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: '32px'
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: "Resources",
      title: "Latest in AI"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNavigate('Resources')
    }, "View all resources")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }
    }, resources.map(r => /*#__PURE__*/React.createElement(Card, _extends({
      key: r.title,
      variant: "resource"
    }, r, {
      action: "Read more",
      imageNode: /*#__PURE__*/React.createElement(P, {
        ratio: "3 / 2",
        label: "Editorial image",
        icon: "fa-solid fa-newspaper"
      })
    }))))), /*#__PURE__*/React.createElement(CtaStrip, {
      headline: "Ready to build on accelerated infrastructure?",
      cta: "Contact sales"
    }));
  }
  Object.assign(window, {
    HomeScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ResourcesScreen.jsx
try { (() => {
/* global React */
(function () {
  const {
    Breadcrumb,
    PillTab,
    Card,
    SearchInput,
    Button
  } = window.AnantaIonsDesignSystem_e44e3f;
  function ResourcesScreen() {
    const P = window.KitPlaceholder,
      Section = window.KitSection,
      Head = window.KitSectionHead;
    const [filter, setFilter] = React.useState('All');
    const all = [{
      badge: 'White paper',
      type: 'White paper',
      title: 'Scaling inference across the edge',
      description: 'Distributed model serving under strict latency budgets.',
      icon: 'fa-solid fa-file-lines'
    }, {
      badge: 'Webinar',
      type: 'Webinar',
      title: 'Training at trillion-parameter scale',
      description: 'Architecture patterns for large-model training.',
      icon: 'fa-solid fa-video'
    }, {
      badge: 'Blog',
      type: 'Blog',
      title: 'Inside the accelerator microarchitecture',
      description: 'How the AI-100 pipeline reaches 4× throughput per watt.',
      icon: 'fa-solid fa-newspaper'
    }, {
      badge: 'White paper',
      type: 'White paper',
      title: 'A reference fabric for HPC',
      description: 'Networking topologies for tightly-coupled workloads.',
      icon: 'fa-solid fa-file-lines'
    }, {
      badge: 'Webinar',
      type: 'Webinar',
      title: 'Deploying agents in production',
      description: 'Orchestration, guardrails, and cost control for agentic systems.',
      icon: 'fa-solid fa-video'
    }, {
      badge: 'Blog',
      type: 'Blog',
      title: 'The economics of inference',
      description: 'Where cost hides in a serving stack, and how to remove it.',
      icon: 'fa-solid fa-newspaper'
    }];
    const tabs = ['All', 'White paper', 'Webinar', 'Blog'];
    const shown = filter === 'All' ? all : all.filter(r => r.type === filter);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: ['Resources', 'Library']
    }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '24px',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: "Resources",
      title: "Resource library",
      sub: "White papers, webinars, and engineering notes from the Ananta Ions platform team."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: '320px',
        maxWidth: '100%'
      }
    }, /*#__PURE__*/React.createElement(SearchInput, {
      placeholder: "Search resources"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '10px',
        margin: '8px 0 32px',
        flexWrap: 'wrap'
      }
    }, tabs.map(t => /*#__PURE__*/React.createElement(PillTab, {
      key: t,
      active: filter === t,
      onClick: () => setFilter(t)
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }
    }, shown.map(r => /*#__PURE__*/React.createElement(Card, {
      key: r.title,
      variant: "resource",
      badge: r.badge,
      title: r.title,
      description: r.description,
      action: "Read more",
      imageNode: /*#__PURE__*/React.createElement(P, {
        ratio: "3 / 2",
        label: r.type,
        icon: r.icon
      })
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '48px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Load more"))));
  }
  Object.assign(window, {
    ResourcesScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ResourcesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Shared.jsx
try { (() => {
/* global React */
// Shared bits for the Ananta Ions marketing UI kit.
(function () {
  const FOOTER_COLS = [{
    heading: 'Products',
    links: ['Accelerators', 'Systems', 'Networking', 'Software']
  }, {
    heading: 'Solutions',
    links: ['AI', 'Data science', 'Inference', 'HPC']
  }, {
    heading: 'Industries',
    links: ['Healthcare', 'Manufacturing', 'Finance', 'Energy']
  }, {
    heading: 'Resources',
    links: ['Documentation', 'White papers', 'Webinars', 'Blog']
  }, {
    heading: 'Company',
    links: ['About', 'Careers', 'Newsroom', 'Investors']
  }, {
    heading: 'Support',
    links: ['Contact', 'Developer forum', 'Downloads', 'Status']
  }];

  // Neutral technical-imagery placeholder (no real photography was provided).
  function Placeholder({
    ratio = '16 / 9',
    label = 'Rendered scene',
    icon = 'fa-solid fa-image',
    dark = false
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: ratio,
        background: dark ? '#0d0d0d' : 'var(--color-surface-soft)',
        border: '1px solid var(--color-hairline)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        color: 'var(--color-stone)',
        fontFamily: 'var(--font-family)'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        fontSize: '28px'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.5px'
      }
    }, label));
  }
  function SectionHead({
    eyebrow,
    title,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: '32px',
        maxWidth: '760px'
      }
    }, eyebrow && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.5px',
        color: 'var(--color-primary)',
        marginBottom: '12px'
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: 1.25,
        color: 'var(--color-ink)'
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '16px 0 0',
        fontSize: '18px',
        lineHeight: 1.5,
        color: 'var(--color-body)'
      }
    }, sub));
  }
  const Section = ({
    children,
    soft,
    style
  }) => /*#__PURE__*/React.createElement("section", {
    style: {
      background: soft ? 'var(--color-surface-soft)' : 'var(--color-canvas)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, children));
  Object.assign(window, {
    KitFooterCols: FOOTER_COLS,
    KitPlaceholder: Placeholder,
    KitSectionHead: SectionHead,
    KitSection: Section
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SolutionsScreen.jsx
try { (() => {
/* global React */
(function () {
  const {
    Breadcrumb,
    SubNav,
    StatCallout,
    CtaStrip,
    Button,
    Card
  } = window.AnantaIonsDesignSystem_e44e3f;
  function SolutionsScreen() {
    const P = window.KitPlaceholder,
      Section = window.KitSection,
      Head = window.KitSectionHead;
    const [tab, setTab] = React.useState('Overview');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Breadcrumb, {
      items: ['Industries', 'Healthcare & life sciences', 'Drug discovery']
    }), /*#__PURE__*/React.createElement(SubNav, {
      items: ['Overview', 'Drug discovery', 'Medical imaging', 'Genomics', 'Patient care'],
      active: tab,
      onSelect: setTab
    }), /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--color-surface-dark)',
        color: 'var(--color-on-dark)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '80px 24px',
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        paddingLeft: '20px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        background: 'var(--color-primary)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '14px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '.5px',
        color: 'var(--color-primary)',
        marginBottom: '16px'
      }
    }, "Healthcare & life sciences"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: 1.25
      }
    }, "Accelerating drug discovery"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '16px 0 32px',
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: 1.4,
        color: 'var(--color-on-dark-mute)'
      }
    }, "Screen billions of candidate molecules in silico and compress research timelines from years to weeks."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '16px'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg"
    }, "Talk to an expert"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-on-dark",
      size: "lg"
    }, "Read the docs"))), /*#__PURE__*/React.createElement(P, {
      ratio: "4 / 3",
      label: "Life-sciences render",
      icon: "fa-solid fa-dna",
      dark: true
    }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        gap: '48px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Head, {
      eyebrow: "Overview",
      title: "A platform built for computational biology"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '16px',
        lineHeight: 1.5,
        color: 'var(--color-body)'
      }
    }, "Modern therapeutic pipelines are bound by the cost of exploration. Ananta Ions couples accelerated molecular simulation with generative models so research teams can prioritize the few candidates worth synthesizing \u2014 and abandon the rest before a single assay is run."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: '16px',
        lineHeight: 1.5,
        color: 'var(--color-body)'
      }
    }, "The same infrastructure that trains foundation models for language now folds proteins, docks ligands, and predicts binding affinity. Read the ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        color: 'var(--color-link)',
        textDecoration: 'underline'
      }
    }, "reference architecture"), " for deployment patterns across on-premises and cloud fabric."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        marginTop: '32px'
      }
    }, /*#__PURE__*/React.createElement(StatCallout, {
      value: "1B+",
      caption: "candidate molecules screened per run"
    }), /*#__PURE__*/React.createElement(StatCallout, {
      value: "12\xD7",
      caption: "reduction in time-to-lead"
    }))), /*#__PURE__*/React.createElement("aside", {
      style: {
        background: 'var(--color-surface-soft)',
        border: '1px solid var(--color-hairline)',
        borderRadius: 'var(--radius-sm)',
        padding: '32px',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        background: 'var(--color-primary)'
      }
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '0 0 16px',
        fontSize: '18px',
        fontWeight: 700,
        color: 'var(--color-ink)'
      }
    }, "On this page"), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }
    }, ['Overview', 'Reference architecture', 'Case studies', 'Get started'].map(l => /*#__PURE__*/React.createElement("li", {
      key: l
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: '15px',
        color: 'var(--color-link)',
        textDecoration: 'none'
      }
    }, l))))))), /*#__PURE__*/React.createElement(Section, {
      soft: true
    }, /*#__PURE__*/React.createElement(Head, {
      eyebrow: "Capabilities",
      title: "Across the discovery pipeline"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px'
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "feature",
      icon: "fa-solid fa-atom",
      title: "Molecular simulation",
      description: "GPU-accelerated docking and molecular dynamics at unprecedented scale.",
      action: ""
    }), /*#__PURE__*/React.createElement(Card, {
      variant: "feature",
      icon: "fa-solid fa-diagram-project",
      title: "Generative design",
      description: "Propose novel, synthesizable structures conditioned on target properties.",
      action: ""
    }), /*#__PURE__*/React.createElement(Card, {
      variant: "feature",
      icon: "fa-solid fa-microscope",
      title: "Predictive assays",
      description: "Estimate binding affinity and toxicity before wet-lab validation.",
      action: ""
    }))), /*#__PURE__*/React.createElement(CtaStrip, {
      headline: "Bring accelerated discovery to your lab",
      cta: "Talk to an expert"
    }));
  }
  Object.assign(window, {
    SolutionsScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SolutionsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PillTab = __ds_scope.PillTab;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CornerSquare = __ds_scope.CornerSquare;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.PrimaryNav = __ds_scope.PrimaryNav;

__ds_ns.SubNav = __ds_scope.SubNav;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

__ds_ns.CtaStrip = __ds_scope.CtaStrip;

__ds_ns.HeroChapter = __ds_scope.HeroChapter;

})();
