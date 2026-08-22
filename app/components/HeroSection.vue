<script setup lang="ts">
import { company, highlights, whatsapp } from "~/data/site";

const highlightIcons = [
  "i-uil-weight",
  "i-uil-check-circle",
  "i-uil-truck",
  "i-uil-tag-alt",
];
</script>

<template>
  <section id="hero" class="section pt-stack">
    <div class="shell flex flex-col gap-stack">
      <!-- Even 6/6 split. Both halves share the container edges — the previous
           hero stacked a 75%-centred image on a full-width card row on a
           75%-centred CTA, so no two rows lined up. -->
      <div class="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
        <div class="flex flex-col items-start gap-5 lg:col-span-6">
          <p class="eyebrow">{{ company.legalName }} &middot; Sidoarjo</p>

          <h1 class="text-display-xl">
            Karung Jumbo Bekas
            <span class="marker">Siap Pakai</span>
            untuk Industri
          </h1>

          <p class="max-w-prose text-body-lg text-muted">
            Solusi ekonomis untuk kebutuhan pengemasan dan penyimpanan industri.
            Kuat, bersih, dan siap dikirim dalam jumlah besar.
          </p>

          <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <UButton
              :to="whatsapp.general"
              target="_blank"
              rel="noopener"
              icon="i-uil-whatsapp"
              label="Hubungi Kami"
              color="primary"
              size="xl"
              class="justify-center"
            />
            <UButton
              to="#product"
              label="Lihat Produk"
              trailing-icon="i-uil-arrow-right"
              color="neutral"
              variant="outline"
              size="xl"
              class="justify-center"
            />
          </div>
        </div>

        <figure
          class="panel relative aspect-4/3 overflow-hidden sm:aspect-video lg:col-span-6"
        >
          <NuxtImg
            src="/images/2.webp"
            alt="Tumpukan karung jumbo bekas siap pakai di gudang Sidoarjo"
            width="1120"
            height="700"
            sizes="xs:100vw sm:100vw lg:50vw 2xl:48rem"
            preload
            fetchpriority="high"
            class="absolute inset-0 size-full object-cover"
          />
          <figcaption
            class="absolute inset-x-4 bottom-4 mx-auto w-fit rounded-control bg-ink-950/60 px-4 py-2 text-center text-body-sm text-ink-50 backdrop-blur-sm"
          >
            Berkualitas dan durable
          </figcaption>
        </figure>
      </div>

      <!-- One panel holding four items instead of four competing lime cards.
           Ladder: 1 column → 2 at sm → 4 at xl, where there is width for it. -->
      <ul
        class="panel grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:gap-8 xl:grid-cols-4"
      >
        <!-- Centred rather than top-aligned: the labels wrap to two lines at
             some widths and not others, so a top-aligned icon left the row
             looking misaligned against its neighbours. -->
        <li
          v-for="(item, index) in highlights"
          :key="item"
          class="flex items-center gap-3"
        >
          <span
            class="flex size-10 shrink-0 items-center justify-center rounded-full border border-default surface-brand-strong"
          >
            <UIcon :name="highlightIcons[index]!" class="size-5 text-ink-950" />
          </span>
          <span class="text-body-sm font-medium">{{ item }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
