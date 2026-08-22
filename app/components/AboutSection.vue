<script setup lang="ts">
import { aboutSecondary, stats } from "~/data/site";
</script>

<template>
  <section id="why-us" class="section">
    <div class="shell flex flex-col gap-stack">
      <SectionHeading
        eyebrow="Tentang Kami"
        title="Penyedia karung jumbo bekas untuk industri di Indonesia"
      />

      <!-- Text and image are siblings in one grid with matched heights, rather
           than the old stack of a full-width panel above a half-width image
           whose edges never met. -->
      <div class="grid gap-grid lg:grid-cols-12">
        <div
          class="panel surface-brand flex flex-col justify-center gap-4 p-panel lg:col-span-7 lg:gap-6"
        >
          <p class="text-display-sm">
            Fokus kami adalah memberikan solusi yang hemat biaya namun tetap
            andal, terutama bagi sektor yang membutuhkan kapasitas dan jumlah
            besar seperti manufaktur, logistik, pertanian, dan tambang.
          </p>
          <p class="text-body">
            Setiap produk yang kami jual telah melalui proses sortir untuk
            memastikan higienitas, kelayakan pakai, dan durabilitas terbaik di
            lapangan.
          </p>
          <p class="text-body">
            Dengan pengalaman melayani berbagai jenis industri, kami memahami
            pentingnya ketersediaan stok, pengiriman tepat waktu, dan komunikasi
            yang cepat — baik untuk pembelian satuan maupun partai besar.
          </p>
        </div>

        <!-- Secondary: cycles through the stock collage on its own. No dot
             controls — it is ambient supporting imagery, not something the
             visitor is meant to operate. -->
        <ImageGallery
          :images="aboutSecondary"
          aspect="aspect-4/3 sm:aspect-video lg:aspect-auto"
          :controls="false"
          sizes="xs:100vw sm:100vw lg:40vw 2xl:40vw"
          :width="900"
          class="panel lg:col-span-5"
        >
          <figcaption
            class="absolute inset-x-4 bottom-4 mx-auto w-fit rounded-control bg-ink-950/60 px-4 py-2 text-center text-body-sm text-ink-50 backdrop-blur-sm"
          >
            Tersedia dalam berbagai ukuran dan bentuk
          </figcaption>
        </ImageGallery>

        <!-- Primary: one image, so a plain figure rather than a gallery. -->
        <figure
          class="panel relative aspect-video overflow-hidden lg:col-span-12 lg:aspect-21/6"
        >
          <NuxtImg
            src="/images/about-primary/about-primary-1.webp"
            alt="Truk sedang dimuati karung jumbo di gudang Karung Jumbo Sidoarjo"
            width="1600"
            sizes="xs:100vw sm:100vw lg:100vw 2xl:96rem"
            loading="lazy"
            class="absolute inset-0 size-full object-cover"
          />
          <figcaption
            class="absolute inset-x-4 bottom-4 mx-auto w-fit rounded-control bg-ink-950/60 px-4 py-2 text-center text-body-sm text-ink-50 backdrop-blur-sm"
          >
            Siap dikirim dengan mudah tanpa ribet
          </figcaption>
        </figure>
      </div>

      <!-- Inverted band. The one high-contrast moment on the page: without it
           every section is the same lime rectangle and nothing stands out. -->
      <div
        class="panel bg-inverted p-panel text-inverted"
      >
        <p class="text-center text-body-lg">
          Kami telah melayani pelanggan industri sebanyak
        </p>
        <dl
          class="mt-8 grid gap-8 divide-y divide-ink-700 sm:grid-cols-2 sm:divide-x sm:divide-y-0 dark:divide-ink-300"
        >
          <div
            v-for="(stat, index) in stats"
            :key="stat.value"
            class="flex flex-col items-center gap-2 text-center"
            :class="index > 0 ? 'pt-8 sm:pt-0' : ''"
          >
            <dt class="text-display-xl font-bold">{{ stat.value }}</dt>
            <dd class="text-body-sm opacity-80">{{ stat.label }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
