<script setup lang="ts">
import { company, whatsapp } from "~/data/site";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="px-gutter pt-section">
    <div
      class="shell rounded-t-panel border border-b-0 border-default surface-brand p-panel"
    >
      <!-- `[&>*]:min-w-0`: the email address is one unbreakable token and
           would otherwise widen its column past the footer panel. -->
      <div class="grid gap-8 md:grid-cols-3 [&>*]:min-w-0">
        <div class="flex flex-col gap-4">
          <div>
            <p class="font-display text-display-sm">{{ company.legalName }}</p>
            <p class="font-display text-display-sm">{{ company.name }}</p>
          </div>
          <!-- WhatsApp rather than a `tel:` link: the number is the same, but
               opening a chat is what customers actually use here, and it works
               from desktop where a dialer does not. -->
          <a
            :href="whatsapp.general"
            target="_blank"
            rel="noopener"
            class="flex w-fit items-center gap-2 font-display text-display-sm underline underline-offset-4"
          >
            <UIcon name="i-uil-whatsapp" class="size-6 shrink-0" />
            {{ company.phone }}
          </a>
        </div>

        <address class="flex flex-col gap-3 text-body-sm not-italic">
          <!-- Icon marks the block, not each line: the address is one item, so
               repeating a pin per line would read as three addresses. -->
          <span class="flex gap-2">
            <UIcon
              :name="company.addressIcon"
              class="mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <span class="flex flex-col gap-1">
              <span>{{ company.address.street }}</span>
              <span>{{ company.address.locality }}</span>
              <span>
                {{ company.address.region }} {{ company.address.postalCode }}
              </span>
            </span>
          </span>

          <a
            :href="`mailto:${company.email}`"
            class="flex max-w-full items-center gap-2 underline underline-offset-4 wrap-anywhere"
          >
            <UIcon
              :name="company.emailIcon"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
            {{ company.email }}
          </a>
        </address>

        <!-- Page links removed: the header nav already covers them, and the
             footer is where people look for the off-site profiles. -->
        <nav class="flex flex-col gap-3" aria-label="Media sosial">
          <a
            v-for="social in company.socials"
            :key="social.href"
            :href="social.href"
            target="_blank"
            rel="noopener"
            class="flex w-fit items-center gap-2 text-body-sm underline underline-offset-4"
          >
            <UIcon :name="social.icon" class="size-4 shrink-0" />
            {{ social.label }}
          </a>
        </nav>
      </div>

      <p class="mt-8 border-t border-default pt-6 text-body-sm text-muted">
        &copy; 2025 - {{ year }} {{ company.legalName }}. Seluruh hak cipta
        dilindungi.
      </p>
    </div>
  </footer>
</template>
