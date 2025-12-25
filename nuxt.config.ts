import tailwindcss from "@tailwindcss/vite";

import Aura from "@primeuix/themes/aura";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["./app/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "nuxt-viewport",
    "@primevue/nuxt-module",
  ],
  nitro: {
    preset: "cloudflare-module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
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
  vite: {
    plugins: [tailwindcss()],
  },
});
