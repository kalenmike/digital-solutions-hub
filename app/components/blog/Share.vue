<script setup lang="ts">
const route = useRequestURL();
const pageUrl = encodeURIComponent(route.href);
const pageTitle = encodeURIComponent("Check out this article!");

const shareLinks = [
  {
    icon: "i-lucide-twitter",
    label: "Twitter",
    href: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
  },
  {
    icon: "i-lucide-linkedin",
    label: "LinkedIn",
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
  },
  {
    icon: "i-lucide-facebook",
    label: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
  },
  // { icon: "i-lucide-link-2", label: "Copy link" },
];
</script>

<template>
  <div class="mb-12">
    <p
      class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6"
    >
      Share this article
    </p>

    <div class="flex gap-3">
      <UButton
        v-for="link in shareLinks"
        :key="link.label"
        :icon="link.icon"
        :aria-label="`Share on ${link.label}`"
        :to="link.href"
        variant="outline"
        class="rounded-full"
        size="md"
      />
    </div>
  </div>
</template>
