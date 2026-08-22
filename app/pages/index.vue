<script setup lang="ts">
import { company } from "~/data/site";

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
});

defineOgImage("Default", {
  title: company.name,
  description: company.tagline,
});

// Structured data so Google can surface the warehouse as a local business.
useSchemaOrg([
  defineLocalBusiness({
    name: company.name,
    legalName: company.legalName,
    description,
    telephone: `+${company.phone.replace(/\D/g, "").replace(/^0/, "62")}`,
    email: company.email,
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
    sameAs: company.socials.map((social) => social.href),
  }),
  defineWebPage(),
]);

// Note: the product range is deliberately not marked up as schema.org Product.
// Every `defineProduct()` call resolves to the same `#product` @id, so a list
// of them collapses into a single node, and Product without `offers`/price is
// incomplete markup anyway. LocalBusiness is what local search actually uses
// here. Add Product entries back only alongside published prices.
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
