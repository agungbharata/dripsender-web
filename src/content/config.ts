import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('Uncategorized'),
    order: z.number().optional(),
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

export const collections = {
  'docs': docsCollection,
  'blog': blogCollection,
};