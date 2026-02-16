<script setup lang="ts">
const { data: project } = await useAsyncData("project", () =>
  queryCollection("caseStudies").first(),
);
</script>
<template>
  <UPageSection id="work">
    <template #title>
      <div v-scroll-animate class="fade-slide-up">Our Work in Action</div>
    </template>
    <template #description>
      <div v-scroll-animate class="fade-slide-up">
        Explore how we've helped our clients achieve success through innovative
        solutions and strategic partnerships. Each case study highlights our
        approach, results, and the impact we've made in diverse industries.
      </div>
    </template>

    <UPageHero
      v-if="project"
      :title="project.title"
      :description="project.description"
      :headline="project.industry"
      orientation="horizontal"
      reverse
      :ui="{ container: 'py-0 sm:py-0 md:py-0 lg:py-0' }"
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
            color="ghost"
            size="sm"
            class="mb-1 text-muted"
          >
            {{ tag }}
          </UButton>
        </div>
      </template>
      <template #title>
        <h3
          class="text-3xl sm:text-4xl text-pretty tracking-tight font-bold text-default"
        >
          {{ project.title }}
        </h3>
      </template>
      <template #description>
        <p>{{ project.description }}</p>
        <UButton
          size="md"
          class="mt-6 ml-auto"
          trailing-icon="i-lucide-arrow-right"
          :to="project.path"
        >
          Read More
        </UButton>
      </template>
    </UPageHero>
  </UPageSection>
</template>
