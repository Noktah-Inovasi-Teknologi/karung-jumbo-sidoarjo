<script setup lang="ts">
import { company, process, products } from "~/data/site";

// Schema.org image URLs must be absolute — crawlers fetch them out of context.
// nuxt-schema-org only resolves the properties it knows about, so anything
// nested in a raw object (the catalogue, the HowTo steps) needs doing here.
const site = useSiteConfig();
const abs = (path: string) => new URL(path, site.url).toString();

// @nuxtjs/seo appends " | <site.name>" via its title template, so the site name
// is deliberately left out here — including it produced a doubled title.
const title = "Jual Karung Jumbo Bekas, Sling Bag & Pallet Plastik";
const description =
  "Penyedia karung jumbo bekas siap pakai, sling bag, pallet plastik, dan plastik PE untuk kebutuhan industri. Harga hemat, kondisi layak pakai, siap kirim partai besar dari Sidoarjo.";

// The previous build shipped no metadata at all — no title, no description,
// no Open Graph, no structured data.
useSeoMeta({
  title,
  description,
  ogTitle: `${title} | ${company.name}`,
  ogDescription: description,
  ogType: "website",
  ogLocale: "id_ID",
  twitterCard: "summary_large_image",
  // Alt text on the share card: screen readers announce it, and answer engines
  // use it when they cannot fetch the image itself.
  ogImageAlt: `${company.name} — ${company.tagline}`,
  twitterImageAlt: `${company.name} — ${company.tagline}`,
});

defineOgImage("Default", {
  title: company.name,
  description: company.tagline,
});

/**
 * Structured data.
 *
 * This is what both Google and AI answer engines actually read, so the whole
 * catalogue lives here — not just the business card. Every value is drawn from
 * `site.ts`, so the markup cannot drift from what the page displays.
 *
 * Products are nested inside an OfferCatalog rather than emitted as top-level
 * `defineProduct()` calls: those all resolve to the same `#product` @id and
 * collapse into a single node. OfferCatalog is also the correct shape for a
 * range with no published prices.
 */
useSchemaOrg([
  defineLocalBusiness({
    name: company.name,
    legalName: company.legalName,
    description,
    slogan: company.tagline,
    telephone: `+${company.phone.replace(/\D/g, "").replace(/^0/, "62")}`,
    email: company.email,
    url: "/",
    // No `logo` here on purpose: passing one makes nuxt-schema-org emit a
    // second, orphaned Organization node alongside #identity. The `image`
    // array below already gives crawlers something to show.
    image: products.map((product) => abs(product.images[0]!.src)),
    address: {
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: company.address.country,
    },
    geo: {
      latitude: company.geo.latitude,
      longitude: company.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${company.geo.latitude},${company.geo.longitude}`,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    knowsLanguage: ["id"],
    sameAs: company.socials.map((social) => social.href),

    // The catalogue, so a search or an assistant can answer "what sizes do
    // they sell?" without parsing the rendered page.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Produk ${company.name}`,
      itemListElement: products.map((product, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: product.images.map((image) => abs(image.src)),
          category: "Karung jumbo bekas / kemasan industri",
          // Sizes are the question people actually ask; keeping them as
          // structured properties beats burying them in prose.
          ...(product.variants?.length
            ? {
                additionalProperty: product.variants.map((variant) => ({
                  "@type": "PropertyValue",
                  name: "Varian ukuran",
                  value: variant,
                })),
              }
            : {}),
        },
      })),
    },
  }),

  defineWebPage({
    inLanguage: "id-ID",
    // The refurbishment steps are the differentiator, so they are stated as
    // machine-readable steps rather than left as pictures with captions.
    mainEntity: {
      "@type": "HowTo",
      name: "Proses pengolahan karung jumbo bekas",
      description:
        "Tahapan yang dilalui setiap karung jumbo bekas sebelum dijual kembali.",
      step: process.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.name,
        text: step.description,
        image: abs(step.images[0]!.src),
      })),
    },
  }),
]);
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <ProductsSection />
      <!-- Sits right after the catalogue: the visitor has just seen what is
           sold, so "here is why ours is not the usual secondhand sack" lands
           with something to attach to. Testimonials then back the claim up. -->
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <AppFooter />
    <WhatsAppFab />
  </div>
</template>
