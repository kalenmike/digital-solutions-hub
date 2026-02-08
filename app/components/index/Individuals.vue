<template>
  <UPageSection id="support">
    <template #title>
      <span
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        New to Technology?
      </span>
    </template>
    <template #description>
      <span
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        You don't need to understand code to build great digital products. I'm
        here to guide you every step of the way.
      </span>
    </template>
    <UCard variant="subtle">
      <h3 class="text-xl mb-5">How I Make Technology Accessible</h3>
      <UPageFeature
        title=""
        description="I explain technical concepts in plain English. No jargon, no confusion!"
        icon="i-lucide-circle-check-big"
      />
      <UPageFeature
        title=""
        description="Step-by-step guidance from idea to implementation"
        icon="i-lucide-circle-check-big"
      />
      <UPageFeature
        title=""
        description="I act as your trusted technical advisor and translator"
        icon="i-lucide-circle-check-big"
      />
      <UPageFeature
        title=""
        description="You stay in control while I handle the technical details"
        icon="i-lucide-circle-check-big"
      />
      <UPageFeature
        title=""
        description="Regular updates and clear communication throughout our work together"
        icon="i-lucide-circle-check-big"
      />
      <UCard variant="subtle" class="mt-7">
        <p class="text-xl">
          "My goal is to empower you with the knowledge and tools you need, so
          technology becomes an enabler, <span class="text-primary">not a barrier</span>, to your success."
        </p>
      </UCard>
    </UCard>
  </UPageSection>
</template>
