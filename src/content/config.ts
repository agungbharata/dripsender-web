import { defineCollection, z } from "astro:content";

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default("Uncategorized"),
    order: z.number().optional(),
    isDefault: z.boolean().optional().default(false), // Tambahkan ini untuk menandai dokumen default
    draft: z.boolean().optional().default(false),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    thumbnail: z.string().optional(),
  }),
});

const pluginCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    thumbnail: z.string().optional(),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
    version: z.string().optional(),
  }),
});

export const collections = {
  docs: docsCollection,
  blog: blogCollection,
  plugin: pluginCollection,
};
