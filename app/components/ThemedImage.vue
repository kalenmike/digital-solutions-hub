<script setup lang="ts">
const props = defineProps<{
  src: string;
  darkSrc?: string;
  height: string;
  alt: string;
}>();

// Compute the darkSrc if not passed
const computedDarkSrc = computed(() => {
  if (props.darkSrc) return props.darkSrc;

  // Insert "-dark" before file extension
  const dotIndex = props.src.lastIndexOf(".");
  if (dotIndex === -1) return `${props.src}-dark`; // fallback if no extension
  return `${props.src.slice(0, dotIndex)}-dark${props.src.slice(dotIndex)}`;
});
</script>

<template>
  <div class="themed-image">
    <img :src="src" :alt="alt" :class="`show-light h-${height}`" />
    <img :src="computedDarkSrc" :alt="alt" :class="`show-dark h-${height}`" />
  </div>
</template>
