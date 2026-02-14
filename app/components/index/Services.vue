<script setup lang="ts">
const services = [
  {
    icon: "i-lucide-lightbulb",
    title: "Digital Strategy & Consulting",
    description:
      "Transform your business ideas into actionable digital strategies. I help you navigate the tech landscape and make informed decisions that align with your goals.",
  },
  {
    icon: "i-lucide-rocket",
    title: "MVP & Software Development Support",
    description:
      "Get your product to market faster. From architecture planning to hands-on development support, I help startups and businesses build and ship their MVPs.",
  },
  {
    icon: "i-lucide-cloud",
    title: "Cloud & Infrastructure Setup",
    description:
      "Design and implement scalable cloud solutions. Whether it's AWS, Google Cloud, or Azure, I'll set up infrastructure that grows with your business.",
  },
  {
    icon: "i-lucide-globe",
    title: "DNS & Web Hosting Support",
    description:
      "Navigate the complexities of domains, DNS configuration, and hosting environments. Get your web presence running smoothly and securely.",
  },
  {
    icon: "i-lucide-wrench",
    title: "Technical Troubleshooting & Mentorship",
    description:
      "Stuck on a technical challenge? I provide debugging support, code reviews, and mentorship to help you and your team overcome obstacles.",
  },
];
</script>
<template>
  <UPageSection id="services">
    <template #title>
      <div v-scroll-animate class="fade-slide-up">Services</div>
    </template>
    <template #description>
      <div v-scroll-animate class="fade-slide-up">
        Comprehensive digital solutions tailored to your needs, from strategic
        planning to hands-on technical implementation.
      </div>
    </template>
    <template #features>
      <div
        v-for="(item, index) in services"
        :key="item.title"
        v-scroll-animate="`${index * 100}ms`"
        class="cursor-default fade-slide-up"
      >
        <UPageFeature v-bind="item" />
      </div>
    </template>
  </UPageSection>
</template>
