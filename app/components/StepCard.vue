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
  active: boolean;
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
        class="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold bg-primary-500 text-white"
      >
        {{ step.number }}
      </span>
      <UIcon
        :name="step.icon"
        class="size-10"
        :class="[
          active ? 'text-primary' : 'text-muted',
          step.animation === 'rotate' && 'hover:rotate-45 transition-transform',
          step.animation === 'bounce' &&
            'hover:-translate-y-2 transition-transform',
          step.animation === 'swing' && 'hover:rotate-45 transition-transform',
          step.animation === 'launch' &&
            'hover:translate-x-2.5 hover:-translate-y-2.5 hover:rotate-12 transition-transform',
        ]"
        :style="[
          step.animation === 'rotate' && active
            ? { animation: `compassSettle 1.5s forwards` }
            : '',
          step.animation === 'bounce' && active
            ? { animation: `bounceOnce 0.5s forwards` }
            : '',
          step.animation === 'swing' && active
            ? { animation: `hammerHit 0.5s forwards` }
            : '',
          step.animation === 'launch' && active
            ? { animation: `rocketTakeOff 1s forwards` }
            : '',
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

<style>
@keyframes compassSettle {
  0% {
    transform: rotate(-30deg);
    transform-origin: center;
  }
  20% {
    transform: rotate(15deg);
    transform-origin: center;
  }
  40% {
    transform: rotate(-10deg);
    transform-origin: center;
  }
  60% {
    transform: rotate(5deg);
    transform-origin: center;
  }
  80% {
    transform: rotate(-2deg);
    transform-origin: center;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: center;
  }
}
@keyframes bounceOnce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  } /* adjust height */
}

@keyframes hammerHit {
  0% {
    transform: rotate(0deg);
    transform-origin: center;
  }
  50% {
    transform: rotate(45deg);
    transform-origin: center;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: center;
  }
}

@keyframes rocketTakeOff {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(10px, -10px) rotate(12deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>
