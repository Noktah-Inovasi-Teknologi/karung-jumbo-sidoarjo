<script setup lang="ts">
/**
 * Open Graph card, rendered to a static PNG at build time.
 *
 * This component is rasterised by the og-image renderer, not by a browser: it
 * supports only a subset of CSS (flexbox, no grid, no custom properties). That
 * is why the brand colours appear here as literal hex values instead of design
 * tokens — `var(--color-brand-200)` would not resolve. The values are the same
 * ones declared in `app/assets/css/main.css`.
 */
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "Gudang Karung Jumbo Sidoarjo",
    description: "Karung Jumbo Bekas Siap Pakai untuk Industri",
  },
);
</script>

<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #fafafa;
      padding: 72px;
      font-family: Inter, sans-serif;
    "
  >
    <div style="display: flex; flex-direction: column">
      <div
        style="
          display: flex;
          align-self: flex-start;
          border: 2px solid #0a0a0a;
          border-radius: 999px;
          padding: 10px 24px;
          font-size: 24px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #0a0a0a;
          margin-bottom: 40px;
        "
      >
        CV IMRON JAYA
      </div>

      <div
        style="
          display: flex;
          font-size: 76px;
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -2px;
          color: #0a0a0a;
        "
      >
        {{ title }}
      </div>
    </div>

    <div style="display: flex; flex-direction: column">
      <div
        style="
          display: flex;
          align-self: flex-start;
          background-color: #daff95;
          border: 2px solid #0a0a0a;
          border-radius: 999px;
          padding: 14px 32px;
          font-size: 34px;
          font-weight: 600;
          color: #0a0a0a;
        "
      >
        {{ description }}
      </div>

      <div
        style="
          display: flex;
          margin-top: 32px;
          font-size: 26px;
          color: #525252;
        "
      >
        Sidoarjo, Jawa Timur · +62 822-3224-2999
      </div>
    </div>
  </div>
</template>
