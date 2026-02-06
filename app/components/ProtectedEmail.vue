<script setup lang="ts">
const { email, isRevealed, reveal } = useSecureEmail(3000);
</script>

<template>
<div class="flex items-center gap-3">
    <UIcon
      :name="isRevealed ? 'i-lucide-mail' : 'i-lucide-lock'"
      class="w-5 h-5 transition-transform"
      :class="{ 'scale-110 text-primary': isRevealed }"
    />

    <ClientOnly>
      <span v-if="isRevealed" class="animate-in fade-in">
        <a :href="`mailto:${email}`" class="hover:text-primary transition-colors">
            {{ email }}
          </a>
      </span>

      <button
        v-else
        @click="reveal"
        class="hover:text-gray-600 italic text-sm"
      >
        Click to show email
      </button>

      <template #fallback>
        <span class="">Protected</span>
      </template>
    </ClientOnly>
  </div>
</template>
