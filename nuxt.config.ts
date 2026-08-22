// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  future: { compatibilityVersion: 4 },

  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  // In-page anchor navigation ("#product") animates instead of jumping. Pairs
  // with the `scroll-margin-top` set on section anchors in main.css.
  router: {
    options: { scrollBehaviorType: "smooth" },
  },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/seo"],

  // Single static landing page: prerender it so Cloudflare serves plain HTML
  // and @nuxt/image can generate optimised derivatives at build time.
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    prerender: {
      routes: ["/", "/robots.txt"],
      crawlLinks: true,
    },
  },

  // Follow the visitor's OS setting by default. The header toggle overrides
  // that and the choice persists in localStorage. Both palettes live in
  // main.css; `fallback` covers browsers that report no preference.
  colorMode: {
    preference: "system",
    fallback: "light",
  },

  ui: {
    experimental: {
      // Only generate theme CSS for components this site actually renders.
      componentDetection: true,
    },
    theme: {
      // Colour aliases this project actually uses. Trimming the default list
      // stops Nuxt UI generating CSS for palettes the site never renders.
      colors: ["primary", "neutral", "error"],
    },
  },

  icon: {
    // Inline the SVG at render time. In the default `css` mode the icons are
    // painted by rules the client injects after hydration, so a prerendered
    // page showed no icons until JS ran.
    mode: "svg",
    // `uim` is the solid Unicons set — used only for the filled review stars,
    // since the Line set (`uil`) has no solid star and outlined stars read as
    // an empty rating.
    // Without this, the Cloudflare preset falls back to `remote` and every
    // icon is fetched from jsdelivr at render time. Bundling the one collection
    // this site uses keeps rendering offline and removes the CDN round-trip.
    serverBundle: { collections: ["uil", "uim"] },
    // Unicons has no TikTok mark. Rather than bundle a 3000-icon brand set for
    // one logo, the official SVG lives in app/assets/icons and is exposed as
    // `i-brand-tiktok`.
    customCollections: [{ prefix: "brand", dir: "./app/assets/icons" }],
    clientBundle: {
      // The scanner skips .ts files by default, so icon names that live in
      // app/data/site.ts and app.config.ts (sector cards, footer socials,
      // carousel arrows) were missed and fell back to a network lookup.
      scan: { globInclude: ["app/**/*.{vue,ts}"] },
      includeCustomCollections: true,
    },
  },

  ogImage: {
    // The card is rendered once at build time (the component is named at the
    // call site in pages/index.vue), so the 3.7 MB renderer wasm does not need
    // to ship inside the Cloudflare Worker.
    zeroRuntime: true,
  },

  sitemap: {
    // No dynamic routes; drop the runtime handler and prerender sitemap.xml.
    zeroRuntime: true,
  },

  fonts: {
    families: [
      { name: "Inter", provider: "google", weights: [400, 500, 600, 700] },
      { name: "Inter Tight", provider: "google", weights: [500, 600, 700] },
    ],
  },

  image: {
    // `ipxStatic` runs the image pipeline during prerender on Node, so responsive
    // derivatives are emitted as plain files. The default `ipx` provider needs a
    // running server that can execute sharp, which Cloudflare Workers cannot do.
    provider: "ipxStatic",
    // NOTE: ipxStatic registers no runtime /_ipx handler, so it 404s during
    // dev. The $development block at the bottom of this file swaps in the
    // regular ipx provider for the dev server.
    // Widths the layout actually requests, so no oversized derivative is built.
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
    format: ["avif", "webp"],
    quality: 72,
  },

  site: {
    url: "https://karungjumbosidoarjo.com",
    name: "Gudang Karung Jumbo Sidoarjo",
    description:
      "Penyedia karung jumbo bekas, sling bag, pallet plastik, dan plastik PE berkualitas untuk kebutuhan industri di Sidoarjo dan seluruh Indonesia.",
    defaultLocale: "id",
  },

  app: {
    head: {
      htmlAttrs: { lang: "id" },
      meta: [
        { name: "format-detection", content: "telephone=no" },
        // Tints the mobile browser chrome. Matched to the page ground in each
        // colour mode — a single lime value left the address bar clashing with
        // the off-white header below it.
        {
          name: "theme-color",
          content: "#fafafa",
          media: "(prefers-color-scheme: light)",
        },
        {
          name: "theme-color",
          content: "#0a0a0a",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      link: [
        // The .ico deliberately sits at the site root rather than in
        // /favicon/: crawlers and feed readers probe /favicon.ico directly,
        // and on Cloudflare static assets that bare request cannot be
        // redirected — the platform's trailing-slash handling answers it with
        // the HTML page before any route rule runs.
        //
        // Sizes are the .ico's actual contents. Declaring them explicitly
        // stops nuxt-seo-utils rewriting "any" and warning on every build.
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
          sizes: "16x16 32x32 48x48",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
    },
  },

  // Dev-server-only overrides.
  $development: {
    image: {
      // Serves /_ipx/** on demand via sharp on Node. The production build uses
      // ipxStatic, which bakes the same URLs out as files at prerender time.
      provider: "ipx",
    },
  },
});
