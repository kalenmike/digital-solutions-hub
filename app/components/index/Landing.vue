<script setup lang="ts">
const bookMe = () => {
  // Check if the script has loaded to prevent errors
  if ((window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/meet-kalen-michael/intro-call'
    });
  } else {
    console.error("Calendly script hasn't loaded yet.");
  }
};

const isOpen = ref(false)
</script>
<template>
  <UPageHero
    orientation="vertical"
    reverse
    :ui="{
    container: ''
  }"
    class="min-h-[100vh]"
    >
      <template #top>
        <div class="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
          <div
            class="animate-grid absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
        </div>
      </template>
      <template #title>
        <span class="tracking-wider" v-motion :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          Digital Solutions <br /><span class="text-primary">Consultant</span>
        </span>
      </template>

      <template #description>
        <p class="text-2xl tracking-wide" v-motion :initial="{ opacity: 0, y: 20 }" :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 600, delay: 200 },
        }">
Helping non-technical founders launch software without headaches.
        </p>
      </template>


      <div class="relative flex justify-center" v-motion :initial="{ opacity: 0, scale: 0.9 }" :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }">
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

      <img
        src="/images/kalen-michael.png"
        alt="Kalen Michael"
        width="400"
        height="400"
        class="relative rounded-full shadow-2xl ring-1 ring-gray-200 dark:ring-gray-800 object-cover w-64 h-64 lg:w-96 lg:h-96"
      />
    </div>
  </div>

      <template #links>
        <span v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }">
          <UButton label="Book a Strategy Call" size="lg" color="primary" class="cursor-pointer" @click="isOpen = true" />
          <p class="mt-2 text-sm text-gray-500">* Free 15-min, no-pressure intro call</p>
        </span>
        <span v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 550 } }">
          <UButton label="How It Works" size="lg" color="gray" variant="ghost" to="#about" />
        </span>
      </template>
    </UPageHero>

      <Calendly v-model:open="isOpen"/>

  </template
