<template>
  <UPageSection
    id="about"
    class="md:px-16 bg-[var(--ui-bg)] shadow-[0_0_10px_0_rgba(0,0,0,0.05)] dark:shadow-[0_0_10px_0_rgba(250,250,250,0.05)]"
  >
    <template #title>
      <div v-scroll-animate class="fade-slide-up">About me</div>
    </template>
    <UContainer>
      <p
        class="text-lg text-muted mb-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { delay: 200, mass: 0.8 },
        }"
      >
        With over a
        <span class="text-primary font-semibold">decade of experience</span>
        in the technology industry, I've had the privilege of working across
        diverse sectors; from startups racing to launch their MVPs to
        established enterprises modernizing their infrastructure.
      </p>
      <p
        class="text-lg text-muted mb-6"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { delay: 2 * 200, mass: 0.8 },
        }"
      >
        After taking time away to focus on personal growth and family, I've
        returned with
        <span class="text-primary font-semibold">renewed passion</span> and a
        fresh perspective on what businesses truly need in today's digital
        landscape. My break gave me clarity:
        <span class="text-primary font-semibold"
          >technology should serve people</span
        >, not the other way around.
      </p>
      <p
        class="text-lg text-muted"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: { delay: 3 * 200, mass: 0.8 },
        }"
      >
        I
        <span class="text-primary font-semibold">bridge the gap</span> between
        technical complexity and business objectives. Whether you're a
        non-technical founder with a brilliant idea or a development team
        needing an extra set of expert hands, I
        <span class="text-primary font-semibold">adapt to your needs</span>
        and communicate in your language.
      </p>

      <UContainer class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        <span
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 400 + 1 * 300,
              stiffness: 100,
              damping: 15,
              mass: 0.8,
            },
          }"
        >
          <UPageCard
            title="10+"
            description="Years Experience"
            :ui="{
              wrapper: 'text-center items-center',
              title: 'text-4xl font-bold',
              description: 'text-gray-500 font-semibold tracking-wide',
            }"
          />
        </span>
        <span
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 400 + 2 * 300,
              type: 'spring',
              stiffness: 100,
              damping: 15,
              mass: 0.8,
            },
          }"
        >
          <UPageCard
            title="50+"
            description="Projects Delivered"
            :ui="{
              wrapper: 'text-center items-center',
              title: 'text-4xl font-bold',
              description: 'text-gray-500 font-semibold tracking-wide',
            }"
          />
        </span>
        <span
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 400 + 3 * 300,
              stiffness: 100,
              damping: 15,
              mass: 0.8,
            },
          }"
        >
          <UPageCard
            title="100%"
            description="Client Focused"
            :ui="{
              wrapper: 'text-center items-center',
              title: 'text-4xl font-bold',
              description: 'text-gray-500 font-semibold tracking-wide',
            }"
          />
        </span>
      </UContainer>

      <UContainer class="mt-20 justify-center flex gap-5">
        <span class="transition-transform duration-300 hover:-translate-y-2">
          <UButton
            to="https://github.com/kalenmike"
            target="_blank"
            aria-label="GitHub"
            color="neutral"
            variant="link"
          >
            <template #leading>
              <UIcon name="i-simple-icons-github" class="w-8 h-8" />
            </template>
          </UButton>
        </span>
        <span class="transition-transform duration-300 hover:-translate-y-2">
          <UButton
            to="https://www.linkedin.com/in/kalenmichael/"
            target="_blank"
            aria-label="LinkedIn"
            color="neutral"
            variant="link"
          >
            <template #leading>
              <UIcon name="i-simple-icons-linkedin" class="w-8 h-8" />
            </template>
          </UButton>
        </span>
      </UContainer>
    </UContainer>
  </UPageSection>
</template>
