<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 items-center text-center"
  >
    <div class="column-slot">
      <slot name="left" />
    </div>
    <div class="column-slot">
      <slot name="center" />
    </div>
    <div class="column-slot">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
/* Optional: Ensure markdown images/text inside columns look right */
.column-slot :deep(img) {
  @apply w-full;
}
</style>
