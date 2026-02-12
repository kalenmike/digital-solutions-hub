<script setup lang="ts">
const props = defineProps({
  items: { type: Array, required: true },
});

// {
//     date: 'Mar 15, 2025',
//     title: 'Project Kickoff',
//     description: 'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
//     icon: 'i-lucide-rocket'
//   }
</script>
<template>
  <UTimeline
    color="primary"
    size="3xl"
    :default-value="1"
    :items="items"
    class="w-96"
  />
</template>
