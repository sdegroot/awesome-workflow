import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { SystemSchema } from './system';

export const collections = {
	docs: defineCollection({
	  schema: docsSchema({
		extend: z.object({
		  system: SystemSchema.optional(),
		}),
	  }),
	}),
  };
