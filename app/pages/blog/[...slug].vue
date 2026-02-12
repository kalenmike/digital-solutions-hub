<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(() =>
  queryCollection("blog").path(route.path).first(),
);

const siteUrl = "https://kalenmichael.com";
const title = post.value?.title + " | Digital Solutions Hub";
const description = post.value?.description;
const imageUrl = siteUrl + post.value?.coverImage;

useSeoMeta({
  title: title,
  description: description,

  ogTitle: title,
  ogDescription: description,
  ogImage: imageUrl,
  ogUrl: siteUrl + route.path,
  ogType: "article",

  twitterImage: imageUrl,
  twitterCard: "summary_large_image",
  twitterTitle: title,
  twitterDescription: description,
});

const slugify = (str: string) => str.toLowerCase().replaceAll(" ", "-");
</script>

<template>
  <UPageSection v-if="post">
    <div class="max-w-6xl mx-auto">
      <div class="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
        <!-- Main column -->
        <div class="min-w-0">
          <article class="mx-auto py-8">
            <header>
              <div class="flex gap-2 mb-2">
                <UBadge
                  v-for="tag in post.tags.slice(0, 3)"
                  :key="tag"
                  size="md"
                  :to="`/blog/tags/${slugify(tag)}`"
                >
                  {{ tag }}
                </UBadge>
              </div>
              <BlogHeader
                :title="post.title"
                :subtitle="post?.description"
                :author="post?.author"
                :date="post.date"
                :readingTime="post.readingTime"
                :coverImage="post.coverImage"
              />
            </header>
            <!-- Main Markdown content -->
            <ContentRenderer :value="post" class="prose dark:prose-invert" />

            <!-- Tags and footer -->
            <footer class="mt-8 border-t pt-4">
              <p
                class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6"
              >
                Topics
              </p>
              <div class="flex flex-wrap gap-2">
                <UButton
                  v-for="tag in post.tags"
                  :key="tag"
                  size="sm"
                  :to="`/blog/tags/${slugify(tag)}`"
                >
                  {{ tag }}
                </UButton>
              </div>
              <div class="mt-8">
                <BlogShare />
              </div>
            </footer>
          </article>
        </div>
        <!-- Sidebar -->
        <div class="hidden lg:block">
          <div class="sticky top-16">
            <div class="spacer p-4"></div>
            <aside>
              <BlogRelatedPosts :tags="post.tags" :slug="post.path" />
              <UCard>
                <h3 class="text-sm font-semibold mb-4">In this article</h3>
                <TableOfContents :links="post.body.toc.links" />
              </UCard>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </UPageSection>

  <UPageSection v-else>
    <div>Home not found</div>
  </UPageSection>
</template>
