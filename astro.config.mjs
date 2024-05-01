import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Awesome Workflow Systems',
			social: {
				github: 'https://github.com/zoefapp/awesome-workflow',
			},
			customCss: [
				'./src/styles/tailwind.css',
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Systems',
					autogenerate: {
						directory: 'systems'
					}
				},
				{
					label: 'Guides',
					autogenerate: {
						directory: 'guides'
					}
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
