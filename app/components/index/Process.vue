<script setup lang="ts">
const isCalendlyOpen = useState("calendly-modal", () => false);

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
    animation: "swing",
  },
  {
    number: 4,
    title: "Launch Confidently",
    description: "A solid product, ready to grow",
    icon: "i-lucide-rocket",
    animation: "launch",
  },
];

const stepActive = ref([false, false, false, false]);

const updateSteps = (progress: number) => {
  const activationPoints: number[] = [0.01, 0.25, 0.6, 0.95];

  for (let i = 0; i < activationPoints.length; i++) {
    const point = activationPoints[i];
    if (point === undefined) continue; // Typescript error check

    if (progress >= point) {
      stepActive.value[i] = true;
    } else {
      stepActive.value[i] = false;
    }
  }
};

const sectionRef = ref(null);
// We track the window scroll, but calculate based on the section
const { top, height } = useElementBounding(sectionRef);

const scrollPercent = computed(() => {
  if (!sectionRef.value) return 0;

  const windowHeight = window.innerHeight;

  // Section fully below the viewport → 0
  if (top.value >= windowHeight) return 0;

  // Section fully above the viewport → 1
  if (top.value + height.value <= 0) return 1;

  // Define your buffer percentages (0.0 → 1.0)
  const bufferStart = 0.6; // 10% into the viewport
  const bufferEnd = 0.0; // 10% before leaving viewport

  // Calculate the start/end trigger points in pixels
  const startTrigger = windowHeight * (1 - bufferStart); // top of viewport + bufferStart
  const endTrigger = -height.value * bufferEnd; // bottom of section - bufferEnd

  // Raw scroll distance between start and end
  const totalDistance = startTrigger - endTrigger;
  const distanceScrolled = startTrigger - top.value;

  // Normalize to 0 → 1
  let pos = distanceScrolled / totalDistance;
  pos = Math.max(0, Math.min(1, pos)); // clamp
  updateSteps(pos);
  return pos;
});

const lineStyle = computed(() => {
  return {
    transform: `scaleX(${scrollPercent.value})`,
    transformOrigin: "left", // Ensures it grows from the left
    willChange: "transform", // Hints to the browser for smoother animation
  };
});

const verticalLineStyle = computed(() => {
  return {
    transform: `scaleY(${scrollPercent.value})`,
    transformOrigin: "top", // Ensures it grows from the left
    willChange: "transform", // Hints to the browser for smoother animation
  };
});
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
  <UPageSection id="process" ref="sectionRef">
    <div class="container relative mx-auto max-w-6xl px-4">
      <div v-scroll-animate class="mb-16 text-center md:mb-20 fade-slide-up">
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
            style="transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1)"
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
            :active="stepActive[index]"
            :index="index"
          />
        </div>
      </div>

      <div
        v-scroll-animate:300ms
        class="mt-20 text-center md:mt-24 fade-slide-up"
      >
        <UButton
          size="xl"
          color="primary"
          class="group px-8 cursor-pointer"
          trailing-icon="i-lucide-rocket"
          :ui="{ rounded: 'rounded-full' }"
          @click="isCalendlyOpen = true"
        >
          Book a Call
        </UButton>
        <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Free 15 minute intro call — no commitment
        </p>
      </div>
    </div>
  </UPageSection>
</template>
