export default {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "640px", // Tailwind's default
      md: "768px", // Tailwind's default
      lg: "1024px", // Tailwind's default
      xl: "1280px", // Tailwind's default
      "2xl": "1536px", // Tailwind's default
      "3xl": "1920px", // custom
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
};
