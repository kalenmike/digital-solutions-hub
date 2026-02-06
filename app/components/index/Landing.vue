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
          Helping businesses and individuals bring their digital ideas to life
          with consulting, product development, cloud infrastructure,
          programming, and technical support.
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
          <UButton label="Get in Touch" size="lg" color="primary" icon="i-lucide-send" to="#contact" />
        </span>
        <span v-motion :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 550 } }">
          <UButton label="Learn More" size="lg" color="gray" variant="ghost" to="#about" />
        </span>
      </template>
    </UPageHero>

  </template
