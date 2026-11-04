import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { seriesIds } from './data/series';

/**
 * Posts live in `src/content/blog/<locale>/<slug>.mdx`.
 * The file name is the URL slug; the folder must match `locale`.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Drafts render in `npm run dev` (with a badge) and are excluded from builds. */
    draft: z.boolean().default(false),
    /** Optional social image (PNG or JPG under /public; social networks do not show SVG). Falls back to /og-default.png. */
    heroImage: z.string().optional(),
    locale: z.enum(['en', 'pt-br', 'es']),
    /** Shared by the translations of the same article; drives the language switcher and hreflang. */
    translationKey: z.string(),
    series: z.enum(seriesIds).optional()
  })
});

export const collections = { blog };
