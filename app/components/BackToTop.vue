<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll() // From @vueuse/core (included in Nuxt UI)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform scale-0 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-0 opacity-0"
  >
  <div v-if="y > 200">
    <UButton
      icon="i-lucide-arrow-up"
      size="xl"
      color="primary"
      square
      variant="solid"
      class="fixed bottom-8 right-8 z-50 rounded-full shadow-xl"
      @click="scrollToTop"
    />
  </div>
  </Transition>
</template>
