# Gudang Karung Jumbo Sidoarjo

Marketing site for **CV Imron Jaya** — karung jumbo bekas, sling bag, pallet
plastik, and plastik PE for Indonesian industry.

Nuxt 4 · Nuxt UI 4 · Tailwind CSS 4 · deployed to Cloudflare Workers.

## Requirements

Node `^22.19.0 || ^24.11.0 || >=26.0.0`, pnpm 10.

## Commands

```bash
pnpm install
pnpm dev         # dev server on http://localhost:3000
pnpm build       # production build (prerenders / and /robots.txt)
pnpm preview     # preview the build
pnpm typecheck   # vue-tsc
```

Deploy with `npx wrangler --cwd .output deploy`.

## Layout

```
app/
  app.vue                     UApp shell
  app.config.ts               Nuxt UI component theming
  assets/css/main.css         the design system (tokens + utilities)
  data/site.ts                all site copy, contact details, product data
  pages/index.vue             the single page: SEO, schema.org, section order
  components/
    AppHeader.vue             sticky header, nav, mobile slideover
    AppFooter.vue
    SectionHeading.vue        eyebrow pill + h2 + optional standfirst
    ImageGallery.vue          cross-fading multi-image frame (products, process, about)
    WhatsAppFab.vue           floating contact button
    HeroSection.vue
    AboutSection.vue
    SectorsSection.vue
    ProductsSection.vue       UCarousel
    ProcessSection.vue        wash / dry / re-thread
    TestimonialsSection.vue   UCarousel, real Google reviews
    ContactSection.vue        deferred Google Maps embed
    OgImage/Default.takumi.vue
  composables/useScrollSpy.ts current section for the header nav
```

## Favicons

Declared in `app.head.link` in `nuxt.config.ts`. The PNGs and the manifest live
in `public/favicon/`; the `.ico` deliberately sits at `public/favicon.ico`
instead.

That split is not cosmetic. Crawlers and feed readers probe `/favicon.ico`
directly rather than reading the `<link>` tags, and on Cloudflare static assets
that bare request **cannot be redirected** — the platform's trailing-slash
handling answers `/favicon.ico` with `307 → /favicon.ico/`, which serves the
HTML page, before any Nitro route rule runs. Keeping a real file at the root is
the only thing that returns an actual icon there.

`site.webmanifest` icon paths must stay `/favicon/…`-prefixed; the generator
emits them root-relative, which 404s from this layout.

## Design system

`app/assets/css/main.css` is the single source of truth. It has four parts:

1. **Foundation tokens** (`@theme`) — breakpoints, the `brand` (lime) and `ink`
   (neutral) colour ramps, typefaces, a fluid type scale, radii, hard-offset
   shadows, and layout rhythm.
2. **Semantic layer** — maps those tokens onto Nuxt UI's `--ui-*` contract, for
   light and dark. This is why Nuxt UI components inherit the brand without
   per-component overrides.
3. **Base** — element defaults, focus rings, reduced-motion handling.
4. **Utilities** (`@utility`) — `panel`, `section`, `shell`, `eyebrow`,
   `marker`, `lift`, `hairline`.

### Layout

Every section is the same two-element sandwich — no exceptions:

```html
<section class="section">   <!-- vertical rhythm + horizontal gutter -->
  <div class="shell">       <!-- max-width: var(--ui-container); centred -->
```

`shell` caps at **96rem (1536px)**, the 2xl breakpoint. Past that the layout
stops growing and the surplus becomes symmetric empty margin — 192px a side at
1920, 512px at 2560 — instead of stretching text across the whole display.

Never set a width on a section's own children (`w-3/4 mx-auto` and friends).
That was what made the old page look chaotic: the hero stacked a 75%-centred
image on a full-width card row on a 75%-centred CTA, so no two rows shared an
edge. If a block should be narrower, constrain the *text* with `max-w-prose`,
not the container.

Measured column ladder:

| viewport | shell | gutter | hero | sectors | highlights |
| --- | --- | --- | --- | --- | --- |
| 320 | 288 | 16 | 1 | 1 | 1 |
| 640 `sm` | 595 | 22 | 1 | 2 | 2 |
| 768 `md` | 717 | 25 | 1 | 2 | 2 |
| 1024 `lg` | 962 | 31 | 12-col | 3 | 2 |
| 1280 `xl` | 1206 | 37 | 12-col | 3 | 4 |
| 1536 `2xl` | 1456 | 40 | 12-col | 3 | 4 |
| 1920 `3xl` | 1536 | **192** | 12-col | 3 | 4 |
| 2560 | 1536 | **512** | 12-col | 3 | 4 |

### Spacing

One scale, all fluid, all registered in the `--spacing-*` namespace so they work
anywhere Tailwind's spacing scale does (`py-section`, `gap-grid`, `p-panel`):

| token | use | 375px | 1536px |
| --- | --- | --- | --- |
| `section` | section padding-block | 29 | 56 |
| `gutter` | section padding-inline | 16 | 40 |
| `stack` | between blocks in a section | 24 | 43 |
| `panel` | inside full-bleed panels | 24 | 40 |
| `grid` | between cards in a grid | 16 | 24 |

**`section` is half the rhythm you see.** Adjacent sections each contribute
their own padding, so the visible gap is always double the token — 58px on
mobile, 112px at 1536. Getting this wrong is easy: the token originally held the
full value and produced 98px / 208px gaps.

Cards inside grids and carousels keep a flat `p-6`; they are narrow, so growing
their padding just squeezes the text. Only full-bleed panels use `p-panel`.

A standfirst under a section heading belongs in `SectionHeading`'s
`description` prop, not as a sibling — a sibling inherits the parent's
`gap-stack` and drifts away from its heading.

Colour rhythm matters as much as alignment — the page alternates
`default → surface-brand → bg-inverted` so sections read as distinct. A run of
identical lime boxes is what made the old layout monotonous.

Rules of thumb:

- Never hardcode a hex value in a component; use a token.
- Use the intent-named radii (`rounded-control`, `rounded-card`,
  `rounded-panel`). The stock `rounded-sm…3xl` scale is derived from Nuxt UI's
  `--ui-radius` and does not mean what it does in a default Tailwind project.
- Restyle Nuxt UI components in `app/app.config.ts`, not with `!important`.

### Dark mode

Follows the visitor's OS setting by default (`colorMode.preference: "system"`),
with a toggle in the header that overrides it and persists to localStorage.

Both palettes are declared in the semantic layer of `main.css`. Components must
go through a token — never a literal shade — or they will not flip:

| use | not |
| --- | --- |
| `surface-brand` | `bg-brand-200` |
| `surface-brand-strong` | `bg-brand-400` |
| `border-default` | `border-ink-950` |
| `bg-default` / `text-highlighted` | `bg-ink-50` / `text-ink-950` |
| `shadow-hard` (reads `--shadow-color`) | a literal black offset |

The lime panels become dark olive in dark mode rather than staying a glaring
block of `#daff95`; the `marker` highlight stays bright lime in both, since it
is meant to read as a highlighter pen.

Two things that cannot be solved with tokens:

- **The wordmark** is dark ink beside a green mark, so it is invisible on a dark
  page. `text-light.webp` is a recoloured variant (neutral pixels lightened,
  the green mark preserved — a blanket CSS `invert` would turn it magenta), and
  the header swaps the two with `dark:hidden` / `hidden dark:block`.
- **The toggle's `aria-label` is state-independent** ("Ganti tema terang atau
  gelap"). The page is prerendered, so the server cannot know the visitor's
  mode, and Vue does not patch attribute mismatches on hydration — a
  "switch to dark/light" label would be stuck at whatever the build guessed.
  The icon conveys the state, and it is swapped in CSS rather than JS.

## Images

`public/images/` holds WebP sources capped at the largest size the layout can
request. `@nuxt/image` generates responsive derivatives at build time via the
`ipxStatic` provider — Cloudflare Workers cannot run sharp at runtime, so the
default `ipx` provider will not work here.

When adding an image: use `<NuxtImg>` and give
`sizes` an **explicit breakpoint prefix for every `vw` entry**
(`xs:100vw sm:50vw`). An unprefixed `vw` value is resolved against a 1-pixel
screen and silently produces a useless 1px derivative.

**Pass a `width` but not a `height`** to anything that should not be cropped.
Supplying both makes ipx emit fixed `WxH` derivatives, baking the crop into the
generated file — `object-contain` then has nothing left to letterbox. This is
why `ImageGallery` takes a width only.

Product images are padded to a true 1:1 (subject untouched, backdrop is a
blurred copy of the image itself) so they fill the square card without cropping;
process images are hand-cropped to 16:9 to match their frame exactly.
