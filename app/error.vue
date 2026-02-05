<script setup lang="ts">
// This captures the error object so you can check the status code
const props = defineProps({
  error: Object,
});

// This is a helper function to redirect the user back home
const handleError = () => clearError({ redirect: "/" });

const bannerActions = [
  {
    label: "Back to Home",
    variant: "outline",
    icon: "i-lucide-arrow-left",
    to: "/",
  },
];
</script>

<template>
  <UBanner title="Something went wrong." icon="i-lucide-circle-x" :actions="bannerActions" />
  <div class="error-container">
    <UPageHero :title="error.statusCode" :ui="{
      wrapper:
        'min-h-[calc(100vh-64px)] flex flex-col justify-center py-0 m-0',
      container: 'py-0 sm:py-0 lg:py-0 flex flex-col justify-center',
      base: 'py-0 sm:py-0 lg:py-0',
    }">
      <template #title>
        <div class="flex flex-col justify-center items-center w-full">
          <AppLogo class="mb-15" />
          <h1>{{ error.statusCode }}</h1>
        </div>
      </template>
      <template #description>
        <p v-if="error.statusCode === 404">
          Oops! This digital solution hasn't been built yet.
        </p>
        <p v-else>An unexpected error occurred.</p>
      </template>
      <template #links>
        <UButton @click="handleError" color="primary" icon="i-lucide-arrow-left" class="cursor-pointer">Back to Home
        </UButton>
      </template>
    </UPageHero>
  </div>
</template>
