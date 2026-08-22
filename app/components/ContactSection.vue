<script setup lang="ts">
import { company, whatsapp } from "~/data/site";

/**
 * The map is only mounted once it scrolls near the viewport. The old build
 * embedded the Google Maps iframe unconditionally, which pulled in Google's
 * scripts on every page load even though the map sits far below the fold.
 */
const mapRoot = useTemplateRef<HTMLElement>("mapRoot");
const showMap = ref(false);

onMounted(() => {
  if (!mapRoot.value) return;

  if (!("IntersectionObserver" in window)) {
    showMap.value = true;
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        showMap.value = true;
        observer.disconnect();
      }
    },
    { rootMargin: "400px" },
  );

  observer.observe(mapRoot.value);
  onBeforeUnmount(() => observer.disconnect());
});
</script>

<template>
  <section id="order-now" class="section">
    <div class="shell">
      <!-- One panel, two columns: the ask on the left, the map on the right.
           Previously this was eight centred blocks stacked down the page with
           the map orphaned at the bottom. -->
      <div
        class="panel surface-brand grid gap-8 p-panel lg:grid-cols-2 lg:items-center lg:gap-12"
      >
        <!-- `min-w-0`: a grid item's automatic minimum size is its
             min-content width, so the unbreakable email address was widening
             the whole track past the panel and pushing the map out with it. -->
        <div class="flex min-w-0 flex-col items-start gap-6">
          <h2 class="text-display-xl">Cocok dengan Produk Kami?</h2>

          <p class="max-w-prose text-body-lg">
            Hubungi kami lewat WhatsApp untuk tanya stok, ukuran, dan harga
            partai besar — atau datang langsung ke gudang kami di Sidoarjo.
          </p>

          <div class="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <UButton
              :to="whatsapp.order"
              target="_blank"
              rel="noopener"
              icon="i-uil-whatsapp"
              label="Pesan Sekarang"
              color="primary"
              size="xl"
              class="justify-center"
            />
            <UButton
              :to="company.phoneHref"
              icon="i-uil-phone"
              :label="company.phone"
              color="neutral"
              variant="outline"
              size="xl"
              class="justify-center"
            />
          </div>

          <address
            class="flex flex-col gap-3 border-t border-default pt-6 text-body not-italic"
          >
            <!-- Icon marks the block, not each line: the address is one item,
                 so repeating a pin per line would read as several addresses. -->
            <span class="flex gap-2">
              <UIcon
                :name="company.addressIcon"
                class="mt-1 size-5 shrink-0"
                aria-hidden="true"
              />
              <span class="flex flex-col gap-1">
                <span class="font-display font-semibold">
                  {{ company.name }}
                </span>
                <span>{{ company.address.street }}</span>
                <span>
                  {{ company.address.locality }}, {{ company.address.region }}
                  {{ company.address.postalCode }}
                </span>
              </span>
            </span>

            <a
              :href="`mailto:${company.email}`"
              class="flex w-full max-w-full items-center gap-2 underline underline-offset-4 wrap-anywhere"
            >
              <UIcon
                :name="company.emailIcon"
                class="size-5 shrink-0"
                aria-hidden="true"
              />
              {{ company.email }}
            </a>
          </address>
        </div>

        <div
          ref="mapRoot"
          class="panel aspect-4/3 w-full min-w-0 overflow-hidden bg-muted lg:aspect-square"
        >
          <iframe
            v-if="showMap"
            :src="company.mapEmbed"
            :title="`Peta lokasi ${company.name}`"
            class="size-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>
