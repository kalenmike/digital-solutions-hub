<script setup lang="ts">
interface PostHeaderProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readingTime: string;
  coverImage?: string;
}

defineProps<PostHeaderProps>();

const formatDate = (dateString: string) => {
  const date = new Date(dateString); // Convert the string to a Date object
  const options = {
    day: "2-digit", // Day with 2 digits (e.g., 11)
    month: "long", // Full month name (e.g., February)
    year: "numeric", // Full year (e.g., 2026)
  };

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};
</script>

<template>
  <div class="mb-4">
    <h1
      class="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-gray-900 dark:text-white"
    >
      {{ title }}
    </h1>

    <p
      class="font-serif text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed mb-8"
    >
      {{ subtitle }}
    </p>

    <div
      class="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400 border-y border-gray-200 dark:border-gray-800 py-4"
    >
      <span class="flex items-center gap-1.5">
        <UIcon name="i-lucide-user" class="h-4 w-4" />
        {{ author }}
      </span>
      <span class="flex items-center gap-1.5">
        <UIcon name="i-lucide-calendar" class="h-4 w-4" />
        {{ formatDate(date) }}
      </span>
      <span class="flex items-center gap-1.5">
        <UIcon name="i-lucide-clock" class="h-4 w-4" />
        {{ readingTime }}
      </span>
    </div>

    <div v-if="coverImage" class="mt-8">
      <img
        :src="coverImage"
        :alt="title"
        class="w-full rounded-xl object-cover max-h-[480px]"
        loading="lazy"
      />
    </div>
  </div>
</template>
