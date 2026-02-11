<script setup lang="ts">
const bookMe = () => {
  // Check if the script has loaded to prevent errors
  if ((window as any).Calendly) {
    (window as any).Calendly.initPopupWidget({
      url: "https://calendly.com/meet-kalen-michael/intro-call",
    });
  } else {
    console.error("Calendly script hasn't loaded yet.");
  }
};

const isOpen = ref(false);
</script>
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
          delay: 300,
        },
      }"
    >
      <template #description>
        <span class="text-muted"
          >Let’s turn your vision into results - strategy, code, and everything
          in between.</span
        >
        <br /><br />
        Ready to grow?
      </template>

      <template #links>
        <span
          class="text-center"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { delay: 400 } }"
        >
          <UButton
            label="Book a Strategy Call"
            trailing-icon="i-lucide-rocket"
            size="lg"
            color="primary"
            class="cursor-pointer"
            @click="isOpen = true"
          />
          <p class="mt-2 text-sm text-gray-500">
            Free 15 minute call - no commitment
          </p>
        </span>
      </template>
    </UPageCTA>
  </UPageSection>

  <Calendly v-model:open="isOpen" />
</template>
