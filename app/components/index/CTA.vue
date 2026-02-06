<template>
  <UPageSection>
    <UPageCTA
      title="Your partner in digital growth."
      description="Ready to start your next project? I'm here to help with the strategy, the code, and everything in between."
      variant="subtle"
      :links="[
        {
          label: 'Get Started',
          to: '#contact',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'primary',
        },
      ]"
      v-motion
      :initial="{
        opacity: 0,
        y: 40,
      }"
      :visible-once="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 60,
          damping: 15,
          mass: 1,
          delay:300,
        },
      }"
    >
    </UPageCTA>
  </UPageSection>
</template>
