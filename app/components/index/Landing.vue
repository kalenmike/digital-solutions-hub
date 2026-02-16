<script setup lang="ts">
const isCalendlyOpen = useState("calendly-modal");
</script>
<template>
  <UPageHero
    orientation="vertical"
    reverse
    :ui="{
      container:
        'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex flex-col lg:grid gap-8 sm:gap-y-16 py-12 sm:py-24 lg:py-40',
      footer: 'mt-2 md:mt-4 lg:mt-10',
    }"
    class="min-h-[calc(100svh-64px)] h-auto lg:min-h-[calc(100svh-64px)] flex flex-col justify-center"
  >
    <template #top>
      <BackgroundGrid />
    </template>
    <template #title>
      <div v-scroll-animate class="fade-slide-up tracking-wider">
        Digital Solutions <br /><span class="text-primary">Consultant</span>
      </div>
    </template>

    <template #description>
      <p v-scroll-animate:100ms class="text-2xl tracking-wide fade-slide-up">
        Helping non-technical founders launch software without headaches.
      </p>
    </template>

    <div
      v-scroll-animate:50ms
      class="relative flex justify-center fade-in-scale"
    >
      <div class="relative group">
        <div
          class="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"
        ></div>

        <img
          src="/images/kalen-michael.png"
          alt="Kalen Michael"
          class="relative rounded-full shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 object-cover w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
        />
      </div>
    </div>

    <template #links>
      <div class="flex flex-col sm:flex-row sm:gap-4 gap-2 mt-4">
        <span v-scroll-animate:400ms class="fade-in-scale">
          <UButton
            label="Book a Strategy Call"
            trailing-icon="i-lucide-rocket"
            size="lg"
            color="primary"
            class="cursor-pointer"
            @click="isCalendlyOpen = true"
          />
          <p class="mt-2 text-sm text-gray-500">
            Free 15 minute call - no commitment
          </p>
        </span>
        <span v-scroll-animate:550ms class="fade-in-scale">
          <UButton
            label="How It Works"
            size="lg"
            color="neutral"
            variant="ghost"
            to="#process"
          />
        </span>
      </div>
    </template>
  </UPageHero>
</template>
