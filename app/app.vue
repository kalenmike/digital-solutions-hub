<script setup lang="ts">
import type { FooterColumn } from "@nuxt/ui";

const title = "Digital Solutions Hub";
const description =
  "Helping businesses and individuals bring their digital ideas to life";
const siteUrl = "https://kalenmichael.com";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: `${siteUrl}/favicon-500.png`,
  twitterImage: `${siteUrl}/favicon-500.png`,
  twitterCard: "summary_large_image",
});

onMounted(() => {
  const contactUrl = `${window.location.origin}/#contact`;
  console.log(
    "%c 👋 Hello there! %c Looking for a developer? %c \n\nMessage me from this site: %c" +
    contactUrl +
    "%c\nOr email me directly: %c hello@kalenmichael.com",
    "color: white; background: #3b82f6; padding: 5px 10px; border-radius: 5px 0 0 5px; font-weight: bold;",
    "color: #3b82f6; background: #eff6ff; padding: 5px 10px; border-radius: 0 5px 5px 0; font-weight: bold;",
    "color: #64748b; font-style: italic;", // Career text
    "color: #3b82f6; text-decoration: underline; font-weight: bold;", // URL
    "color: #64748b; font-style: italic;", // Email text
    "color: #3b82f6; font-weight: bold;", // Email address
  );
});

const columns: FooterColumn[] = [
  {
    label: "Quick Links",
    children: [
      {
        label: "About",
        to: "#about",
      },
      {
        label: "Services",
        to: "#services",
      },
      {
        label: "How I Help",
        to: "#support",
      },
      {
        label: "For Developers",
        to: "#developers",
      },
      {
        label: "Contact",
        to: "#contact",
      },
    ],
  },
];

const navItems = [
  {
    label: "About",
    to: "#about",
  },
  {
    label: "Services",
    to: "#services",
  },
  {
    label: "How I Help",
    to: "#support",
  },
  {
    label: "For Developers",
    to: "#developers",
  },
  {
    label: "Contact",
    to: "#contact",
  },
  {
    label: "Tools",
    to: "/external-tools",
  },
];

const showGrain = false;
</script>

<template>
  <UApp>
    <UNotifications />
    <BackToTop />

    <div v-if="showGrain" class="fixed min-h-screen">
      <div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
        <div
          class="animate-noise absolute -inset-[10%] h-[120%] w-[120%] opacity-[0.05] mix-blend-soft-light dark:mix-blend-overlay"
          style="
            background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;);
          "></div>
      </div>
    </div>

    <UHeader>
      <template #left>
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </template>

      <template #right>
        <UNavigationMenu color="neutral" variant="link" :items="navItems" class="hidden lg:flex" />

        <UColorModeButton />

        <UButton to="https://github.com/kalenmike" target="_blank" icon="i-simple-icons-github" aria-label="GitHub"
          color="neutral" variant="ghost" />
      </template>
      <template #body>
        <UNavigationMenu color="neutral" variant="link" :items="navItems" orientation="vertical" :ui="{
          link: 'text-xl justify-center py-4',
          item: 'w-full text-center',
        }" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-lucide-thumbs-up" />

    <UFooter>
      <template #top>
        <UContainer>
          <div class="flex flex-col md:flex-row justify-between items-start gap-20">
            <div class="w-80">
              <h3 class="text-lg font-bold">Kalen Michael</h3>
              <p class="mt-2 text-m text-gray-500 dark:text-gray-400 tracking-wide">
                Digital Solutions Consultant helping businesses and individuals
                bring their digital ideas to life.
              </p>
            </div>

            <div class="flex-1">
              <UFooterColumns :columns="[
                {
                  label: 'Quick Links',
                  children: [
                    {
                      label: 'About',
                      to: '#about',
                    },
                    {
                      label: 'Services',
                      to: '#services',
                    },
                    {
                      label: 'How I Help',
                      to: '#support',
                    },
                    {
                      label: 'For Developers',
                      to: '#developers',
                    },
                    {
                      label: 'Contact',
                      to: '#contact',
                    },
                  ],
                },
              ]" :ui="{
                  label: 'mb-3 text-sm',
                  list: 'space-y-1 mt-0',
                  base: 'py-0',
                }" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold mb-3 text-sm">Connect</h3>
              <UButton to="https://github.com/kalenmike" target="_blank" icon="i-simple-icons-github"
                aria-label="GitHub" color="neutral" variant="ghost" size="xl" />
              <UButton to="https://www.linkedin.com/in/kalenmichael/" target="_blank" icon="i-simple-icons-linkedin"
                aria-label="GitHub" color="neutral" variant="ghost" size="xl" />
            </div>
          </div>
        </UContainer>
      </template>
      <template #default>
        <p class="text-sm text-muted text-center">
          Made by humans, not robots 🤖
          <br />
          © 2006 - {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
