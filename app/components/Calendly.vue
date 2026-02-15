<script setup lang="ts">
const router = useRouter();
const colorMode = useColorMode();

const calendlyLoaded = ref(false);
const calendlyFailed = ref(false);
let loadTimeout: any = null;

const isOpen = defineModel<boolean>("open", { default: false });
const calendlyTarget = ref<HTMLElement | null>(null);

// Define your color themes
const themes = {
  dark: {
    bg: "0F172B", // Deep navy
    text: "ffffff",
    primary: "009777",
  },
  light: {
    bg: "ffffff", // Pure white
    text: "030712", // Near black
    primary: "009777",
  },
};

const loadCalendlyScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined") return resolve();

    // Already available
    if ((window as any).Calendly) return resolve();

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    console.info("Calendly script reloaded.");

    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Calendly"));

    document.head.appendChild(script);
  });
};

const initCalendly = async () => {
  calendlyLoaded.value = false;
  calendlyFailed.value = false;

  // Wait for the Modal to render the <div>
  await nextTick();

  await loadCalendlyScript();

  const calendly = (window as any).Calendly;
  if (!calendly || !calendlyTarget.value) {
    calendlyFailed.value = true;
    return;
  }

  // Select theme based on current mode
  const mode = colorMode.value === "dark" ? "dark" : "light";
  const theme = themes[mode];

  // Clear the div first to prevent duplicate widgets if reopened
  calendlyTarget.value.innerHTML = "";

  calendly.initInlineWidget({
    url: `https://calendly.com/meet-kalen-michael/intro-call?hide_gdpr_banner=1&background_color=${theme.bg}&text_color=${theme.text}&primary_color=${theme.primary}`,
    parentElement: calendlyTarget.value,
  });

  // Detect iframe load
  loadTimeout = setTimeout(() => {
    const iframe = calendlyTarget.value?.querySelector("iframe");
    if (iframe) {
      calendlyLoaded.value = true;
    } else {
      calendlyFailed.value = true;
      console.error("Calendly not rendered.");
    }
  }, 4000);
};

let debugFailureTimer: ReturnType<typeof setTimeout> | null = null;
// Debug Calendly Failure
const triggerCalendlyDebugFailure = () => {
  // Reset first (optional but cleaner)
  calendlyFailed.value = false;

  if (debugFailureTimer) {
    clearTimeout(debugFailureTimer);
  }

  debugFailureTimer = setTimeout(() => {
    calendlyFailed.value = true;
  }, 3000);
};

const handleContactRedirect = async () => {
  isOpen.value = false;

  // wait one tick so modal closes cleanly
  await nextTick();

  router.push("/#contact");
};

// Watch for the modal opening to trigger Calendly
watch(
  isOpen,
  async (open) => {
    if (!open) return;

    await initCalendly();
  },
  { immediate: true },
);
</script>

<template>
  <UModal
    v-model:open="isOpen"
    title="Book a Free Strategy Call"
    class="w-full lg:max-w-[1049px]"
  >
    <template #body>
      <div class="min-w-[320px] h-[700px]">
        <div
          v-if="!calendlyLoaded && !calendlyFailed"
          class="absolute inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80"
        >
          <div>
            <UProgress class="mb-5" />
            <span class="text-gray-700 dark:text-gray-200 font-medium">
              Loading...
            </span>
          </div>
        </div>
        <Transition name="fade" mode="out-in">
          <div
            v-if="calendlyFailed"
            class="flex flex-col items-center justify-center gap-4 h-full"
          >
            <!-- Icon -->
            <div
              class="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10"
            >
              <UIcon
                name="i-heroicons-calendar-days"
                class="w-7 h-7 text-primary"
              />
            </div>

            <!-- Title -->
            <h3 class="text-lg font-semibold">Scheduling Unavailable</h3>

            <!-- Description -->
            <p class="text-sm text-gray-500 text-center dark:text-gray-400">
              The calendar couldn’t load. You can still reach out and we’ll get
              back to you quickly.
            </p>

            <!-- CTA -->
            <UButton size="lg" color="primary" @click="handleContactRedirect">
              Go to Contact Form
            </UButton>
          </div>

          <div
            v-else
            class="calendly-inline-widget flex items-center justify-center min-w-[320px] h-[700px] dark:bg-[#0F172B]"
            ref="calendlyTarget"
          ></div>
        </Transition>
      </div>
    </template>
  </UModal>
</template>
<style>
/* Fix the background of the Calendly iFrame*/
.calendly-inline-widget > iframe {
  color-scheme: light;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
