import Aura from "@primeuix/themes/aura";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxthub/core",
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "nuxt-viewport",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  viewport: {
    breakpoints: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
});
