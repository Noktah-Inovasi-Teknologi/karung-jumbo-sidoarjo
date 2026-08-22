<script setup lang="ts">
import { id } from "@nuxt/ui/locale";

// Nuxt UI's built-in strings (carousel "Prev"/"Next", slideover "Close",
// colour-mode labels) default to English. The site is Indonesian, so the
// bundled `id` locale is applied here rather than left mismatched.
</script>

<template>
  <UApp :locale="id">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </UApp>
</template>
