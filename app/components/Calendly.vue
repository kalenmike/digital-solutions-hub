<script setup lang="ts">
  const colorMode = useColorMode();

const isOpen = defineModel<boolean>('open', { default: false });
const calendlyTarget = ref<HTMLElement | null>(null);

// Define your color themes
const themes = {
  dark: {
    bg: '0F172B',    // Your deep navy
    text: 'ffffff',
    primary: '009777'
  },
  light: {
    bg: 'ffffff',    // Pure white
    text: '030712',  // Near black
    primary: '009777'
  }
};

// Watch for the modal opening to trigger Calendly
watch(isOpen, async (newVal) => {
  if (newVal) {
    // Wait for the Modal to render the <div>
    await nextTick();

    const calendly = (window as any).Calendly;
    if (calendly && calendlyTarget.value) {

    // Select theme based on current mode
  const mode = colorMode.value === 'dark' ? 'dark' : 'light';
  const theme = themes[mode];
      // Clear the div first to prevent duplicate widgets if reopened
      calendlyTarget.value.innerHTML = '';

      calendly.initInlineWidget({
        url: `https://calendly.com/meet-kalen-michael/intro-call?hide_gdpr_banner=1&background_color=${theme.bg}&text_color=${theme.text}&primary_color=${theme.primary}`,
        parentElement: calendlyTarget.value,
      });

      var calendlyEmbed = document.getElementById('calendly-embed');
      calendlyEmbed.setAttribute("style", "background-color: #00000000;min-width:100%;height:960px;");
    }
  }
});
</script>

<template>
  <UModal v-model:open="isOpen" title="Book a Free Strategy Call" class="w-full sm:max-w-[1050px]">
    <template #body>
      <div class="calendly-inline-widget flex items-center justify-center min-w-[320px] h-[700px] dark:bg-[#0F172B]" ref="calendlyTarget"></div>
    </template>
  </UModal>
</template>
<style>
.calendly-inline-widget>iframe {
  color-scheme: light;
}

</style>
