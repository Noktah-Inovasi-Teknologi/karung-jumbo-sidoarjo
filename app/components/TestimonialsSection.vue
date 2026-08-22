<script setup lang="ts">
import { initialOf, testimonials } from "~/data/site";

/**
 * Autoplay is suppressed for visitors who ask for reduced motion. The CSS
 * media query cannot cover this on its own — Embla advances slides with
 * scripted transforms, not CSS transitions.
 */
const reducedMotion = ref(false);

onMounted(() => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  reducedMotion.value = query.matches;

  const onChange = (event: MediaQueryListEvent) => {
    reducedMotion.value = event.matches;
  };
  query.addEventListener("change", onChange);
  onBeforeUnmount(() => query.removeEventListener("change", onChange));
});

const autoplay = computed(() =>
  reducedMotion.value ? false : { delay: 5000, stopOnInteraction: true },
);
</script>

<template>
  <section id="testimonial" class="section">
    <div class="shell flex flex-col gap-stack">
      <SectionHeading
        eyebrow="Testimoni Pelanggan"
        title="Apa kata pelanggan industri kami"
        description="Ulasan asli dari pelanggan di Google Maps."
      />

      <UCarousel
        v-slot="{ item }"
        :items="testimonials"
        align="start"
        arrows
        dots
        loop
        :autoplay="autoplay"
        :ui="{
          item: 'basis-full sm:basis-1/2 xl:basis-1/3',
        }"
        class="w-full"
      >
        <figure class="panel surface-brand flex h-full flex-col gap-4 p-6">
          <!-- The whole attribution row is the caption. `figcaption` has to be
               a direct child of `figure` per spec — nesting it inside layout
               divs is invalid and trips Vue's hydration checks. -->
          <figcaption class="flex items-start justify-between gap-4">
            <span class="flex min-w-0 items-center gap-3">
              <!-- Initial rather than a photo: these are Google reviewers and
                   we have no portrait of them to use. -->
              <UAvatar
                :text="initialOf(item.name)"
                :alt="item.name"
                size="lg"
              />
              <span class="truncate font-display font-semibold">
                {{ item.name }}
              </span>
            </span>

            <!-- Announced as a single label, so assistive tech reads the score
                 rather than five anonymous icons. Colour comes from
                 `text-highlighted`, not a literal: the card is lime in light
                 mode and dark olive in dark, and near-black stars vanished
                 against the latter. -->
            <span
              class="flex shrink-0 items-center gap-0.5"
              role="img"
              :aria-label="`${item.rating} dari 5 bintang`"
            >
              <UIcon
                v-for="star in 5"
                :key="star"
                name="i-uim-star"
                class="size-4"
                :class="
                  star <= item.rating ? 'text-highlighted' : 'text-highlighted/20'
                "
              />
            </span>
          </figcaption>

          <blockquote class="flex-1 text-body-sm">
            {{ item.content }}
          </blockquote>
        </figure>
      </UCarousel>
    </div>
  </section>
</template>
