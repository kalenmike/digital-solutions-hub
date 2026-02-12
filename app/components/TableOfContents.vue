<script setup>
defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <nav v-if="links?.length">
    <!-- Nested H2 -->
    <ul class="space-y-2 text-sm">
      <li v-for="link in links" :key="link.id">
        <a :href="'#' + link.id" class="hover:text-primary transition-colors">
          {{ link.text }}
        </a>

        <!-- Nested H3 -->
        <ul v-if="link.children?.length" class="ml-4 mt-1 space-y-1 text-xs">
          <li v-for="child in link.children" :key="child.id">
            <a
              :href="'#' + child.id"
              class="hover:text-primary transition-colors"
            >
              {{ child.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
