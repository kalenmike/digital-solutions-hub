<template>
  <div class="callout" :class="type">
    <h3 v-if="$slots.title">
      <slot name="title" mdc-unwrap="p" />
    </h3>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "info",
  },
});
</script>

<style scoped>
.callout {
  padding: 1rem;
  border-radius: 8px;
}
.callout.info {
  background-color: #e3f2fd;
  border-left: 4px solid #1e88e5;
}
.callout.tip {
  background-color: #f1f8e9;
  border-left: 4px solid #7cb342;
}
.callout.warning {
  background-color: #fff3e0;
  border-left: 4px solid #fb8c00;
}
</style>
