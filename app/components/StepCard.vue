<script setup lang="ts">
const props = defineProps<{
  step: {
    number: number;
    title: string;
    description: string;
    icon: any;
    animation: string;
  };
  index: number;
}>();

const delay = computed(() => props.index * 100 + "ms");
</script>

<template>
  <div
    v-scroll-animate="delay"
    class="relative flex md:flex-col justify-left md:items-center text-left md:text-center mb-4 md:mb-0 fade-slide-up"
  >
    <div
      class="relative z-10 md:mb-6 flex h-30 w-30 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800"
    >
      <span
        class="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white"
      >
        {{ step.number }}
      </span>
      <UIcon
        :name="step.icon"
        class="size-10 text-primary"
        :class="[
          step.animation === 'rotate' && 'hover:rotate-45 transition-transform',
          step.animation === 'bounce' &&
            'hover:-translate-y-2 transition-transform',
        ]"
      />
    </div>
    <div class="flex flex-col justify-center ml-4 md:ml-0">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">
        {{ step.title }}
      </h3>
      <p class="mt-2 text-gray-500 dark:text-gray-400">
        {{ step.description }}
      </p>
    </div>
  </div>
</template>
