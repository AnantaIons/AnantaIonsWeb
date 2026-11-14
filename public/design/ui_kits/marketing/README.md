# Marketing Site — UI Kit

A high-fidelity recreation of the Ananta Ions marketing site, composing the design-system primitives. Open `index.html` for the interactive click-through (nav switches between screens; the resource filter and sub-nav are live).

## Screens
- **HomeScreen.jsx** — black hero, 4-up platform feature grid, stat callout band, resource cards, dark CTA strip.
- **SolutionsScreen.jsx** — interior industry page: breadcrumb + sub-nav, dark chapter intro, 60/40 long-form body with sidebar and inline stats, capability grid.
- **ResourcesScreen.jsx** — resource library: pill-tab filter (live), search, 3-up resource card grid.
- **Shared.jsx** — kit-local helpers (footer columns, section wrapper, section head, image placeholder). Exports to `window`.

## Composition
Screens use only the published primitives — `HeroChapter`, `Card`, `StatCallout`, `CtaStrip`, `PrimaryNav`, `UtilityBar`, `Breadcrumb`, `SubNav`, `Footer`, `Button`, `PillTab`, `SearchInput`. Nothing is re-implemented.

## Placeholders
No real photography was provided, so imagery renders as neutral technical placeholders (`KitPlaceholder`). Drop real 16:9 / 3:2 / 4:3 renders in to finish the recreation.
