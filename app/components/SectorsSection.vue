<script setup lang="ts">
import { sectors } from "~/data/site";
</script>

<template>
  <section id="usage" class="section">
    <div class="shell flex flex-col gap-stack">
      <SectionHeading
        eyebrow="Cocok Digunakan untuk Sektor"
        title="Dipakai lintas industri, dari agrikultur sampai pertambangan"
      />

      <!-- Uniform tiles on a plain ladder (1 → 2 at sm → 3 at lg). The previous
           grid mixed col-span-2 and row-span-2 per item, which left holes and a
           different silhouette at every width. -->
      <ul class="grid gap-grid sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="sector in sectors"
          :key="sector.name"
          class="panel lift group relative aspect-4/3 overflow-hidden"
        >
          <NuxtImg
            :src="sector.image"
            :alt="sector.alt"
            width="560"
            height="420"
            sizes="xs:100vw sm:50vw lg:33vw 2xl:33vw"
            loading="lazy"
            class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <!-- The label sits on the image behind a scrim instead of in its own
               caption bar, so every tile is exactly the same height whatever
               the length of the sector name. -->
          <div
            class="absolute inset-0 bg-linear-to-t from-ink-950/90 via-ink-950/30 to-transparent"
          />
          <h3
            class="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-display-sm text-ink-50"
          >
            <span
              class="flex size-9 shrink-0 items-center justify-center rounded-full surface-brand-strong"
            >
              <UIcon :name="sector.icon" class="size-5 text-ink-950" />
            </span>
            {{ sector.name }}
          </h3>
        </li>
      </ul>
    </div>
  </section>
</template>
