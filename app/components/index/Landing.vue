<template>
  <UPageHero :ui="{
      wrapper:
        'min-h-[calc(100vh-64px)] flex flex-col justify-center py-0 m-0',
      container: 'py-0 sm:py-0 lg:py-0 flex flex-col justify-center',
      base: 'py-0 sm:py-0 lg:py-0',
    }">
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
          Helping businesses and individuals bring their digital ideas to life
          with consulting, product development, cloud infrastructure,
          programming, and technical support.
        </p>
      </template>

      <template #links>
        <span v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }">
          <UButton label="Get in Touch" size="lg" color="primary" icon="i-lucide-send" to="#contact" />
        </span>
        <span v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 550 } }">
          <UButton label="Learn More" size="lg" color="gray" variant="ghost" to="#about" />
        </span>
      </template>
    </UPageHero>

  </template
