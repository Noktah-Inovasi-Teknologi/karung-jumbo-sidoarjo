<script setup lang="ts">
/**
 * The pill label that introduces every section, plus an optional headline and
 * standfirst.
 *
 * The old markup repeated this eight times as a hand-rolled string of ten
 * utility classes, which is how `text-normal` (not a real Tailwind class) crept
 * into half the copies.
 *
 * `description` belongs here rather than in each section because the parent
 * lays its children out with `gap-stack`. A standfirst placed as a sibling
 * inherited that full gap and drifted away from its own heading, which two
 * sections were correcting with `-mt-2`.
 */
withDefaults(
  defineProps<{
    eyebrow: string;
    title?: string;
    description?: string;
    align?: "center" | "start";
  }>(),
  { align: "start" },
);
</script>

<template>
  <div
    class="flex flex-col gap-4"
    :class="align === 'center' ? 'items-center text-center' : 'items-start'"
  >
    <p class="eyebrow">{{ eyebrow }}</p>
    <h2 v-if="title" class="text-display-lg max-w-3xl">{{ title }}</h2>
    <p v-if="description" class="max-w-prose text-body-lg text-muted">
      {{ description }}
    </p>
  </div>
</template>
