<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();

const { data: project } = await useAsyncData(() =>
  queryCollection("caseStudies").path(route.path).first(),
);

const siteUrl = config.public.siteUrl;
const title = project.value?.title + " | Digital Solutions Hub";
const description = project.value?.description;
const imageUrl = siteUrl + project.value?.ogImage;

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
  <div v-if="project">
    <div class="bg-[#011936]">
      <UPageHero
        :title="project.title"
        :description="project.description"
        :headline="project.industry"
        orientation="horizontal"
      >
        <img
          :src="project.coverImage"
          alt="App screenshot"
          class="rounded-lg shadow-2xl ring ring-default"
        />
        <template #headline>
          <div class="flex flex-wrap gap-2">
            <UButton
              v-for="tag in project.tags.slice(0, 3)"
              :key="tag"
              size="sm"
              :to="`/blog/tags/${slugify(tag)}`"
              class="mb-6"
            >
              {{ tag }}
            </UButton>
          </div>

          <div
            class="mb-4 font-semibold text-muted flex items-center gap-1.5 uppercase"
          >
            Case Study — {{ project.company }}
          </div>
        </template>
        <template #title>
          <h1
            class="text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-white"
          >
            {{ project.title }}
          </h1>
        </template>
        <template #description>
          <p>{{ project.description }}</p>

          <div class="flex py-4">
            <div class="">
              <div class="text-md text-white">
                {{ project.industry }}
              </div>
              <div class="text-sm text-muted">Industry</div>
            </div>
            <USeparator
              orientation="vertical"
              color="muted"
              class="h-14 mx-5"
            />
            <div class="">
              <div class="text-md text-white">
                {{ project.size }}
              </div>
              <div class="text-sm text-muted">Company Size</div>
            </div>
          </div>
        </template>
      </UPageHero>
    </div>

    <UPageSection v-if="project" :ui="{ container: 'justify-center' }">
      <ContentRenderer :value="project" class="" />
    </UPageSection>
  </div>
  <UPageSection v-else>
    <div>Home not found</div>
  </UPageSection>
</template>
