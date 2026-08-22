<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { company, navigation, whatsapp } from "~/data/site";

const open = ref(false);

// Highlight whichever section is actually on screen, not just the last hash
// that was clicked. Null until mounted, so the server-rendered markup has no
// active item and hydration matches.
const activeId = useScrollSpy(navigation.map((item) => item.to.slice(1)));

const items = computed<NavigationMenuItem[]>(() =>
  navigation.map((item) => ({
    label: item.label,
    to: item.to,
    active: activeId.value === item.to.slice(1),
  })),
);
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-default bg-default/85 backdrop-blur-md"
  >
    <div
      class="shell flex h-(--ui-header-height) items-center justify-between gap-4 px-gutter"
    >
      <NuxtLink
        to="/"
        class="shrink-0"
        :aria-label="`${company.name} — beranda`"
      >
        <!-- The wordmark is dark ink beside a green mark, so it disappears on a
             near-black page. Swapping the asset via CSS (rather than reading
             the colour mode in JS) keeps it correct in the server-rendered
             HTML, with no flash on hydration. -->
        <NuxtImg
          src="/images/text-black.webp"
          :alt="company.name"
          width="180"
          height="50"
          sizes="140px md:180px"
          preload
          class="h-8 w-auto md:h-10 dark:hidden"
        />
        <NuxtImg
          src="/images/text-light.webp"
          alt=""
          aria-hidden="true"
          width="180"
          height="50"
          sizes="140px md:180px"
          class="hidden h-8 w-auto md:h-10 dark:block"
        />
      </NuxtLink>

      <!-- Desktop navigation. Rendered as the brand's lime pill bar.
           Visibility is CSS-driven, so it is correct in the server-rendered
           HTML — the previous build decided this in JS via nuxt-viewport,
           which flashed and shifted layout on first paint. -->
      <UNavigationMenu
        :items="items"
        variant="pill"
        aria-label="Navigasi utama"
        class="hidden md:flex"
        :ui="{ list: 'gap-1' }"
      />

      <div class="flex items-center gap-2">
        <!-- The label is deliberately state-independent. The stock one reads
             "switch to dark/light" based on the current mode, but this page is
             prerendered: the server cannot know the visitor's mode, and Vue
             does not patch attribute mismatches on hydration, so that label
             would be stuck at whatever the build guessed. The icon (swapped in
             CSS, not JS) is what conveys the current state. -->
        <UColorModeButton
          color="neutral"
          variant="outline"
          size="lg"
          square
          aria-label="Ganti tema terang atau gelap"
          title="Ganti tema terang atau gelap"
        />

        <UButton
          :to="whatsapp.general"
          target="_blank"
          rel="noopener"
          icon="i-uil-whatsapp"
          label="Hubungi Kami"
          color="primary"
          class="hidden sm:inline-flex"
        />

        <UButton
          color="neutral"
          variant="outline"
          icon="i-uil-bars"
          square
          class="md:hidden"
          aria-label="Buka menu navigasi"
          @click="open = true"
        />
      </div>
    </div>

    <USlideover
      v-model:open="open"
      side="right"
      title="Menu"
      description="Navigasi halaman"
      :ui="{ content: 'bg-default', header: 'border-b border-default' }"
    >
      <template #body>
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          variant="pill"
          aria-label="Navigasi utama (mobile)"
          class="w-full"
          @click="open = false"
        />

        <UButton
          :to="whatsapp.general"
          target="_blank"
          rel="noopener"
          icon="i-uil-whatsapp"
          label="Hubungi Kami"
          color="primary"
          block
          class="mt-6"
        />
      </template>
    </USlideover>
  </header>
</template>
