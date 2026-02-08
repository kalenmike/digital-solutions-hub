<script setup lang="ts">
import { useScroll } from '@vueuse/core';

const steps = [
  {
    number: 1,
    title: "Clarify the Idea",
    description: "Turn your idea into clear direction",
    icon: "i-lucide-compass",
    animation: "rotate",
  },
  {
    number: 2,
    title: "Decide the Approach",
    description: "Make smart build decisions early",
    icon: "i-lucide-puzzle",
    animation: "bounce",
  },
  {
    number: 3,
    title: "Build & Implement",
    description: "I handle the tech, you stay informed",
    icon: "i-lucide-hammer",
    animation: "swing"
  },
  {
    number: 4,
    title: "Launch Confidently",
    description: "A solid product, ready to grow",
    icon: "i-lucide-rocket",
    animation: "launch"
  },
];

// Scroll Progress Logic using VueUse (Better for Nuxt/Vue)
// const sectionRef = ref<HTMLElement | null>(null);
// const { y } = useWindowScroll()

const sectionRef = ref(null)
// We track the window scroll, but calculate based on the section
const { y } = useScroll(window)
const { top, height } = useElementBounding(sectionRef)

const scrollPercent = computed(() => {
  if (!sectionRef.value) return 0

  // Calculation: How far has the section moved past the top of the screen?
  // We divide the distance scrolled by the total height (minus viewport)
  const windowHeight = window.innerHeight
  const progress = -top.value / (height.value - windowHeight)

  // Clamp between 0 and 1
  return Math.max(0, Math.min(1, progress))
})


const lineStyle = computed(() => {
  return {
    transform: `scaleX(${1 - scrollPercent.value})`,
    transformOrigin: 'left', // Ensures it grows from the left
    willChange: 'transform'  // Hints to the browser for smoother animation
  }
})

const verticalLineStyle = computed(() => {
  console.log(scrollPercent.value);
  return {
    transform: `scaleY(${scrollPercent.value})`,
    transformOrigin: 'top', // Ensures it grows from the left
    willChange: 'transform'  // Hints to the browser for smoother animation
  }
})

const isOpen = ref(false);

</script>
<template>
  <!-- <UPageSection -->
  <!--   id="process" -->
  <!--   :ui="{ -->
  <!--     header: 'text-center flex flex-col items-center', -->
  <!--   }" -->
  <!-- > -->
  <!--   <template #headline> -->
  <!--     <UBadge variant="subtle" color="primary" class="mb-4" -->
  <!--       >For Non-technical Founders</UBadge -->
  <!--     > -->
  <!--   </template> -->
  <!--   <template #title> -->
  <!--     Your idea, <span class="text-primary">built right</span> -->
  <!--   </template> -->
  <!--   <template #description> -->
  <!--     I partner with founders to turn ideas into real software. Without the -->
  <!--     stress of managing developers. -->
  <!--   </template> -->
  <!-- </UPageSection> -->
  <UPageSection
    id="process"
    ref="sectionRef"
    >
    <div class="pointer-events-none absolute inset-0 opacity-30">
      <div
        class="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl"
        style="
          background: radial-gradient(
            circle,
            hsl(var(--primary) / 0.08) 0%,
            transparent 70%
          );
        "
      />
    </div>

    <div class="container relative mx-auto max-w-6xl px-4">
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-16 text-center md:mb-20"
      >
        <UBadge variant="subtle" color="primary" class="mb-4">Process</UBadge>
        <h3
          class="mt-6 font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl md:text-5xl"
        >
          From idea to <span class="text-primary-500">launch</span>
        </h3>
        <p
          class="mx-auto mt-4 max-w-md text-base text-gray-500 dark:text-gray-400 md:text-lg"
        >
          A clear, founder-friendly process. No jargon, no guesswork.
        </p>
      </div>

      <!-- Scroll Lines -->
      <!-- Desktop -->
      <div class="relative">
        <div
          class="absolute left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] top-[60px] hidden md:block"
        >
          <div class="h-[3px] w-full bg-gray-200 dark:bg-gray-800" />
          <div
            class="absolute top-0 w-full h-[3px] bg-primary-500 transition-transform duration-75 ease-out"
            :style="lineStyle"
          />
        </div>
        <!-- Mobile -->
        <div class="absolute bottom-8 left-[60px] top-8 md:hidden">
          <div class="h-full w-[3px] bg-gray-200 dark:bg-gray-800" />
          <div
            class="absolute top-0 h-full w-[3px] bg-primary-500 transition-transform duration-700 ease-out"
            style="transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);"
            :style="verticalLineStyle"
          />
        </div>

        <div
          class="relative grid grid-cols-1 gap-8 justify-start md:justify-items-center md:grid-cols-4 md:gap-6 md:justify-items-start"
        >
          <StepCard
            v-for="(step, index) in steps"
            :key="step.number"
            :step="step"
            :index="index"
          />
        </div>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
        class="mt-20 text-center md:mt-24"
      >
        <UButton
          size="xl"
          color="primary"
          class="group px-8 cursor-pointer"
          trailing-icon="i-lucide-rocket"
          :ui="{ rounded: 'rounded-full' }"
          @click="isOpen = true;"
        >
          Book a Call
        </UButton>
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Free 15 minute intro call — no commitment
        </p>
      </div>
    </div>
  </UPageSection>

      <Calendly v-model:open="isOpen"/>
</template>
