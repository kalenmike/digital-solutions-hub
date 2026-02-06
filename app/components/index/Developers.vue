<script setup lang="ts">
const technical = [
  {
    icon: "i-lucide-code",
    title: "Full-Stack Development",
    description:
      "TypeScript, React, Node.js, Python, and modern web frameworks",
  },
  {
    icon: "i-lucide-server",
    title: "Cloud Architecture",
    description: "AWS, GCP, Azure—design, deployment, and optimization",
  },
  {
    icon: "i-lucide-git-branch",
    title: "DevOps & CI/CD",
    description: "Docker, Kubernetes, GitHub Actions, automated pipelines",
  },
  {
    icon: "i-lucide-terminal",
    title: "Systems & Infrastructure",
    description: "Linux, networking, security, and performance tuning",
  },
];
</script>
<template>
  <UPageSection id="developers" :features="technical">
    <template #title>
      <span
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        For Technical Teams
      </span>
    </template>
    <template #description>
      <span
        v-motion
        :initial="{ opacity: 0, x: -20 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      >
        <p>
          Need an experienced developer to augment your team or lead a project?
          I bring deep technical expertise and a pragmatic approach to solving
          complex challenges.
        </p>
        <br />
        <p>
          Whether you need architecture review, hands-on development, or
          technical leadership, I integrate seamlessly with your existing
          workflows and deliver production-ready results.
        </p>
      </span>
    </template>
    <template #features>
      <div
        v-for="(item, index) in technical"
        :key="item.title"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 150,
            type: 'spring',
            stiffness: 50,
          },
        }"
        :hovered="{ y: -8, transition: { type: 'spring', stiffness: 300 } }"
        class="cursor-default"
      >
        <UPageFeature v-bind="item" />
      </div>
    </template>
  </UPageSection>
</template>
