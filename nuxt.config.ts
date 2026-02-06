// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: "static",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        // 1. The Standard Fallback (Browser Tabs)
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=1" },

        // 2. The Modern Standard (High-res Browser Tabs)
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon.png?v=1",
        },

        // 3. Apple Devices (iOS Home Screen)
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },

        // 4. Android / Web Manifest (Optional but good)
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/android-chrome-512x512.png",
        },
      ],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    "@vueuse/motion/nuxt",
    "@nuxt/image",
  ],
  ssr: true,

  runtimeConfig: {
    public: {
      formHash: "",
    },
  },

  site: {
    url: "https://kalenmichael.com", // Replace with your actual domain
    name: "Digital Solutions Hub",
  },

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  image: {
    format: ['webp']
  },

  postcss: {
    plugins: {
      cssnano: !import.meta.dev ? {} : false,
    },
  },

  hooks: {
    "nitro:config"(config) {
      // Only minify in production
      if (!import.meta.dev) {
        config.prerender?.routes?.push("/");
      }
    },
  },

  nitro: {
    preset: "github-pages",
    // This ensures all pages are crawled and turned into static HTML
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
    minify: true,
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
