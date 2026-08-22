<script setup lang="ts">
import type { GalleryImage } from "~/data/site";

/**
 * Reusable image area for cards — product photos and process photos alike.
 *
 * Images are `object-contain`, not `object-cover`: the sources arrive in mixed
 * ratios (portrait sacks, landscape warehouse shots) and cropping them to the
 * frame cut up to 44% off the tall ones. Letterboxing shows the whole product
 * instead, against the frame's muted background. Sources already cut to the
 * frame ratio — the process photos — render identically either way.
 *
 * Only a width is handed to NuxtImg, never a height. Supplying both makes ipx
 * emit fixed WxH derivatives, which bakes the crop into the generated file at
 * build time and leaves object-contain with nothing to letterbox.
 *
 * Multiple images cross-fade in place rather than sliding: this sits inside a
 * carousel slide, and nesting a second draggable track would fight the parent
 * for horizontal gestures. Fading needs no gesture at all.
 *
 * The images advance on their own so a second photo is never missed. Cycling
 * only runs while the card is actually on screen — otherwise every gallery on
 * the page would be firing timers into the void — and stops for good once the
 * visitor picks a dot themselves, since manual control should win. Suppressed
 * entirely when the visitor asks for reduced motion.
 */
const props = withDefaults(
  defineProps<{
    images: GalleryImage[];
    sizes?: string;
    width?: number;
    /** Milliseconds each image is held before advancing. */
    interval?: number;
    /** Aspect-ratio utility for the frame. Must be a literal class. */
    aspect?: string;
    /** Show dot controls. Off means autoplay-only, with no affordance. */
    controls?: boolean;
  }>(),
  {
    sizes: "xs:100vw sm:50vw lg:33vw 2xl:33vw",
    width: 560,
    interval: 3000,
    aspect: "aspect-square",
    controls: true,
  },
);

const root = useTemplateRef<HTMLElement>("root");
const index = ref(0);

const hasMultiple = computed(() => props.images.length > 1);

let timer: ReturnType<typeof setInterval> | undefined;
let takenOver = false;
let reducedMotion = false;

function stop() {
  if (timer) {
    clearInterval(timer);
    timer = undefined;
  }
}

function start() {
  if (!hasMultiple.value || reducedMotion || takenOver || timer) return;
  timer = setInterval(() => {
    index.value = (index.value + 1) % props.images.length;
  }, props.interval);
}

function select(next: number) {
  // The visitor is driving now; do not yank the image out from under them.
  takenOver = true;
  stop();
  index.value = next;
}

onMounted(() => {
  if (!hasMultiple.value) return;

  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  if (!root.value || !("IntersectionObserver" in window)) {
    start();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) start();
        else stop();
      }
    },
    { threshold: 0.25 },
  );

  observer.observe(root.value);
  onBeforeUnmount(() => observer.disconnect());
});

onBeforeUnmount(stop);
</script>

<template>
  <div
    ref="root"
    class="relative overflow-hidden bg-muted"
    :class="aspect"
  >
    <NuxtImg
      v-for="(image, i) in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      :width="width"
      :sizes="sizes"
      loading="lazy"
      :aria-hidden="i !== index ? 'true' : undefined"
      class="absolute inset-0 size-full object-contain transition-opacity duration-500 ease-out"
      :class="i === index ? 'opacity-100' : 'opacity-0'"
    />

    <!-- The dots sit on a scrim: product shots are mostly white sacks, and
         plain dots disappeared against them. -->
    <div
      v-if="hasMultiple && controls"
      class="absolute inset-x-0 bottom-3 flex justify-center"
    >
      <div
        class="flex items-center gap-2 rounded-full bg-ink-950/55 px-2.5 py-1.5 backdrop-blur-sm"
      >
        <button
          v-for="(image, i) in images"
          :key="image.src"
          type="button"
          :aria-label="`Lihat gambar ${i + 1} dari ${images.length}`"
          :aria-current="i === index ? 'true' : undefined"
          class="size-2.5 rounded-full transition-colors"
          :class="i === index ? 'bg-primary' : 'bg-ink-50/60 hover:bg-ink-50'"
          @click="select(i)"
        />
      </div>
    </div>

    <!-- Overlay content: captions and the like, layered above the images. -->
    <slot />
  </div>
</template>
