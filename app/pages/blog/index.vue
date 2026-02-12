<script setup lang="ts">
const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog").all(),
);
</script>

<template>
  <UPageSection title="Insights & Ideas for Digital Success">
    <template #description>
      Explore <span class="text-primary">practical strategies</span>, expert
      tips, and industry insights to help you navigate the digital landscape.
      Our blog delivers <span class="text-primary">actionable guidance</span> on
      technology, innovation, and
      <span class="text-primary">digital transformation.</span> Free for
      business leaders, entrepreneurs, and digital enthusiasts looking to
      <span class="text-primary">stay ahead.</span>
    </template>
    <UBlogPosts>
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
        :to="post.path"
      />
    </UBlogPosts>
  </UPageSection>
</template>
