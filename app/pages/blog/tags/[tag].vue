<script setup lang="ts">
const route = useRoute();
const tagSlug = route.params.tag as string;

const unslugify = (slug: string) => {
  if (!slug) return "";

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const tagName = unslugify(tagSlug);

const { data: posts } = await useAsyncData("posts", () =>
  queryCollection("blog").where("tags", "LIKE", `%${tagName}%`).all(),
);
</script>

<template>
  <UPageSection
    :headline="tagName"
    title="Insights & Ideas for Digital Success"
  >
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
