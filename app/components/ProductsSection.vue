<script setup lang="ts">
import { products, whatsapp } from "~/data/site";
</script>

<template>
  <section id="product" class="section">
    <div class="shell flex flex-col gap-stack">
      <SectionHeading
        eyebrow="Produk Kami"
        title="Karung jumbo, sling bag, pallet, dan plastik PE"
      />

      <!-- Embla sizes slides from CSS, so the visible count is a basis utility
           on the item slot rather than a JS breakpoint array: 1 → 2 at sm →
           3 at lg. Arrows and dots render below the track (see app.config). -->
      <UCarousel
        v-slot="{ item }"
        :items="products"
        align="start"
        arrows
        dots
        loop
        :ui="{ item: 'basis-full sm:basis-1/2 lg:basis-1/3' }"
        class="w-full"
      >
        <article class="panel lift flex h-full flex-col overflow-hidden">
          <!-- Products stay square. Stated explicitly rather than riding the
               component default, so changing that default cannot silently
               reshape the catalogue. -->
          <ImageGallery
            :images="item.images"
            aspect="aspect-square"
            class="border-b border-default"
          />

          <div class="flex flex-1 flex-col gap-3 p-6">
            <h3 class="text-display-sm">{{ item.name }}</h3>

            <!-- Sizes are variations of one product, not separate products —
                 badges keep the catalogue at five entries instead of one card
                 per dimension. -->
            <ul
              v-if="item.variants?.length"
              class="flex flex-wrap gap-2"
              :aria-label="`Varian ${item.name}`"
            >
              <li v-for="variant in item.variants" :key="variant">
                <UBadge :label="variant" color="neutral" variant="outline" />
              </li>
            </ul>

            <p class="flex-1 text-body-sm text-muted">
              {{ item.description }}
            </p>

            <UButton
              :to="whatsapp.product(item.name)"
              target="_blank"
              rel="noopener"
              icon="i-uil-whatsapp"
              label="Tanya produk ini"
              color="primary"
              size="lg"
              block
              class="mt-1"
            />
          </div>
        </article>
      </UCarousel>
    </div>
  </section>
</template>
