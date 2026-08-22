<script setup lang="ts">
import { process } from "~/data/site";
</script>

<template>
  <section id="process" class="section">
    <div class="shell flex flex-col gap-stack">
      <SectionHeading
        eyebrow="Proses Kami"
        title="Yang membedakan produk kami dari penjual karung bekas lain"
        description="Kebanyakan penjual karung bekas menjual barang apa adanya. Setiap karung yang kami kirim melewati tiga tahap berikut lebih dulu."
      />

      <!-- Three steps, so the grid goes straight from 1 column to 3 at lg
           rather than through a 2-column stage that would orphan the third. -->
      <ol class="grid gap-grid lg:grid-cols-3">
        <li
          v-for="(step, index) in process"
          :key="step.name"
          class="panel lift flex h-full flex-col overflow-hidden"
        >
          <ImageGallery
            :images="step.images"
            aspect="aspect-video"
            class="border-b border-default"
          />

          <div class="flex flex-1 flex-col gap-3 p-6">
            <div class="flex items-center gap-3">
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-full border border-default surface-brand-strong"
              >
                <UIcon :name="step.icon" class="size-5 text-ink-950" />
              </span>
              <!-- The steps are sequential, so they are numbered. -->
              <span class="font-display text-body-sm font-semibold text-muted">
                Langkah {{ index + 1 }}
              </span>
            </div>

            <h3 class="text-display-sm">{{ step.name }}</h3>
            <p class="text-body-sm text-muted">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
