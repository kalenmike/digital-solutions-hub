<script setup lang="ts">
const props = defineProps({
  tags: { type: Array as PropType<string[]>, required: true },
  slug: { type: String, required: true },
});

const { data: relatedPosts } = await useAsyncData(() =>
  queryCollection("blog")
    .where("path", "<>", props.slug) // Match articles that share tags
    .orWhere((query) => {
      props.tags.forEach((tag) => {
        query.where("tags", "LIKE", `%${tag}%`);
      });
      return query;
    })
    .select("title", "date", "tags", "path")
    .limit(3) // Limit to 5 related articles
    .all(),
);
</script>
<template>
  <div v-if="relatedPosts && relatedPosts.length" class="mb-10">
    <h3
      class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6"
    >
      Related Posts
    </h3>
    <UBlogPosts orientation="vertical" class="mb-5">
      <UBlogPost
        v-for="(post, index) in relatedPosts"
        :badge="{ label: post.tags[0], color: 'primary', variant: 'solid' }"
        :key="index"
        v-bind="post"
        :to="post.path"
      />
    </UBlogPosts>
  </div>
</template>
