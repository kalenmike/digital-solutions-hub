import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**",
      schema: z.object({
        date: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        author: z.string(),
        readingTime: z.string(),
        coverImage: z.string(),
      }),
    }),
  },
});
