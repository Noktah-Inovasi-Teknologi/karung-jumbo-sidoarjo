<script setup lang="ts">
import { whatsapp } from "~/data/site";

/**
 * Persistent WhatsApp shortcut.
 *
 * Built on UButton rather than a hand-rolled anchor so it inherits the design
 * system's control radius, hairline border and hard-shadow hover from
 * `app.config.ts` instead of restating them here.
 *
 * `color="primary"` resolves to a light lime in both colour modes, so the dark
 * icon stays legible either way — `surface-brand-strong` would go dark olive in
 * dark mode and lose the icon.
 */
</script>

<template>
  <UButton
    :to="whatsapp.general"
    target="_blank"
    rel="noopener"
    icon="i-uil-whatsapp"
    color="primary"
    square
    aria-label="Hubungi kami lewat WhatsApp"
    title="Hubungi kami lewat WhatsApp"
    :ui="{ leadingIcon: 'size-7' }"
    class="fixed end-4 z-40 size-14 shadow-hard-sm hover:shadow-hard sm:end-6 sm:size-16"
  />
</template>

<style scoped>
/* Kept out of the class list because it needs env() for the iOS home
   indicator, which would otherwise sit under the button. */
a {
  bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
}

@media (min-width: 40rem) {
  a {
    bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px));
  }
}
</style>
