/**
 * Nuxt UI theme configuration.
 *
 * This is the single place where Nuxt UI components are restyled to match the
 * design system in `app/assets/css/main.css`. The old build reached for
 * `!important` and `::v-deep` to fight PrimeVue's defaults; here the component
 * variants are configured properly instead, so no override wars and no
 * specificity hacks.
 *
 * Anything set here applies globally. Per-instance tweaks belong on the
 * component via its `:ui` prop.
 */
export default defineAppConfig({
  ui: {
    // Map Nuxt UI's semantic aliases onto the palettes declared in @theme.
    colors: {
      primary: "brand",
      neutral: "ink",
      error: "red",
    },

    // Icon set used by Nuxt UI internals. Unicons matches the icons already
    // used across the site.
    icons: {
      arrowLeft: "i-uil-arrow-left",
      arrowRight: "i-uil-arrow-right",
      check: "i-uil-check",
      chevronDown: "i-uil-angle-down",
      chevronLeft: "i-uil-angle-left",
      chevronRight: "i-uil-angle-right",
      close: "i-uil-times",
      external: "i-uil-external-link-alt",
      light: "i-uil-sun",
      dark: "i-uil-moon",
    },

    button: {
      slots: {
        base: [
          // `rounded-full`, not the `rounded-control` token: tailwind-merge does
          // not recognise custom radius keys as border-radius utilities, so it
          // never drops the stock `rounded-md` and that wins on source order.
          // Buttons silently rendered as 12px rectangles. Same value, merges.
          "rounded-full border border-default font-display font-semibold",
          "transition-[background-color,box-shadow,transform]",
          "hover:-translate-x-px hover:-translate-y-px hover:shadow-hard-sm",
          "active:translate-x-0 active:translate-y-0 active:shadow-none",
        ],
        label: "truncate",
      },
      // NOTE ON FONT SIZES: use Tailwind's stock keys (`text-sm`,
      // `text-base`) inside these slots, never the design system's
      // `text-body`/`text-display` tokens. tailwind-merge does not recognise
      // custom `--text-*` keys as font-size utilities — it treats them as text
      // *colours*, so the colour from a compound variant silently replaces
      // them and the stock size survives instead. Same trap as `rounded-control`.
      variants: {
        // The stock base is `inline-flex items-center` with no horizontal
        // centring — only the `block` variant adds `justify-center`. A square
        // button normally looks centred because its padding derives the width
        // from the icon, but the moment one is given an explicit size (the
        // floating WhatsApp button) the icon sticks to the padding edge.
        square: {
          true: "justify-center",
        },
        size: {
          lg: { base: "px-5 py-2.5 text-sm gap-2" },
          // Steps down below `sm`: at full size an xl CTA is 50px tall with
          // 16px text, which dominates a 320px screen.
          xl: {
            base: "px-5 py-2.5 text-sm gap-2 sm:px-6 sm:py-3 sm:text-base sm:gap-2.5",
          },
        },
      },
      compoundVariants: [
        // The brand accent is a light lime in BOTH colour modes, so it always
        // needs dark text — not the `text-inverted` white the stock solid
        // variant applies. Hover/active shift opacity rather than naming a
        // literal shade, so they hold up in either mode.
        {
          color: "primary",
          variant: "solid",
          class:
            "bg-primary text-ink-950 hover:bg-primary/85 active:bg-primary/70",
        },
        {
          color: "primary",
          variant: "outline",
          class:
            "bg-transparent text-highlighted ring-0 hover:bg-primary/15 active:bg-primary/25",
        },
        // Solid ink in light mode, solid white in dark — `bg-inverted` and
        // `text-inverted` flip together, so this stays high-contrast in both.
        {
          color: "neutral",
          variant: "solid",
          class:
            "bg-inverted text-inverted hover:bg-inverted/85 active:bg-inverted/75",
        },
        {
          color: "neutral",
          variant: "outline",
          class:
            "bg-transparent text-highlighted ring-0 hover:bg-elevated active:bg-accented",
        },
      ],
      defaultVariants: {
        color: "primary",
        variant: "solid",
        size: "lg",
      },
    },

    navigationMenu: {
      slots: {
        // No bar behind the menu: only the section currently on screen carries
        // a pill, everything else is transparent. The old lime container made
        // the whole nav read as one heavy green block.
        list: "gap-1",
        link: [
          "rounded-full px-3 py-1.5 font-display text-sm font-medium",
          "before:rounded-full before:transition-colors",
        ],
        linkLabel: "truncate",
      },
      variants: {
        active: {
          false: {
            // Transparent by default; a faint tint on hover only. Stock uses
            // `text-muted`, which is too low-contrast for a top-level nav.
            link: "text-highlighted before:bg-transparent hover:before:bg-primary/20",
          },
          true: {
            // The section currently on screen gets the green pill.
            link: "text-highlighted before:bg-accented",
          },
        },
      },
      compoundVariants: [
        {
          // Nuxt UI paints the active pill's label with `text-primary`, which
          // is the same lime as the pill sitting behind it — the label all but
          // disappeared. This has to be a compound variant, not the `active`
          // variant above: compound variants are applied last and would
          // otherwise win.
          //
          // `text-highlighted` resolves to near-black in light mode and white
          // in dark, so the label stays legible against the pill in both.
          //
          // The background is set here for the same reason: a stock
          // `{ variant: pill, active: true }` compound variant paints
          // `before:bg-elevated`, a pale tint that barely registered once the
          // menu lost its container. `bg-accented` is the full brand green.
          color: "primary",
          variant: "pill",
          active: true,
          class: {
            link: "text-highlighted before:bg-accented",
            linkLeadingIcon:
              "text-highlighted group-data-[state=open]:text-highlighted",
          },
        },
      ],
    },

    carousel: {
      // Controls sit in a row *below* the track: [prev] [dots] [next].
      //
      // The stock theme floats the arrows over the slides and parks them at
      // `sm:-start-12` — 48px outside the track, which the ~40px section gutter
      // clipped off-screen. Pulling them inside instead made them cover the
      // card text. Taking them out of the overlay entirely avoids both, and
      // leaves the whole slide clickable.
      //
      // `arrows: contents` dissolves the arrow wrapper so prev/next become
      // direct flex children of `controls`, letting `order` interleave them
      // with the dots.
      slots: {
        // The stock container is `items-start`, so slides size to their own
        // content and cards in a view ended up different heights with their
        // CTAs at different baselines.
        //
        // Note the slide itself must NOT carry `h-full`: an explicit cross-size
        // opts a flex item out of stretching, which silently defeats
        // `items-stretch`. The card inside the slide carries `h-full` instead.
        container: "items-stretch",
        controls: "mt-8 flex items-center justify-center gap-5",
        arrows: "contents",
        prev: [
          "static order-1 translate-y-0 rounded-full",
          "border border-default bg-default shadow-hard-sm",
        ],
        next: [
          "static order-3 translate-y-0 rounded-full",
          "border border-default bg-default shadow-hard-sm",
        ],
        dots: "static order-2 inset-x-auto bottom-auto flex items-center gap-2",
        dot: [
          "size-2.5 border border-default bg-transparent",
          "data-[state=active]:bg-primary",
        ],
      },
      variants: {
        orientation: {
          // The orientation variant is applied *after* the slot classes above,
          // so the overlay offsets it adds (`top-1/2 -translate-y-1/2`) have to
          // be cancelled here rather than in `slots` — otherwise the buttons
          // render half a height too high.
          horizontal: {
            prev: "top-auto start-auto translate-y-0",
            next: "top-auto end-auto translate-y-0",
          },
        },
      },
    },

    // Product variation chips. Stock `outline` draws a coloured ring; this
    // swaps it for the same 1px hairline every other surface uses.
    badge: {
      slots: {
        base: "rounded-full font-display font-medium",
      },
      compoundVariants: [
        {
          color: "neutral",
          variant: "outline",
          class:
            "border border-default bg-transparent text-toned ring-0 whitespace-normal",
        },
      ],
    },

    // Review initials. `bg-elevated` is the same lime as the card these sit
    // on, so the fallback letter needs the page ground behind it instead.
    avatar: {
      slots: {
        root: "border border-default bg-default",
        fallback: "font-display font-semibold text-highlighted",
      },
    },

    separator: {
      slots: {
        border: "border-default",
      },
    },
  },
});
