import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';
import node from '@astrojs/node';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
	theme: {
		extend: {
			colors: {
				// Your preferred accent color. Indigo is closest to Starlight’s defaults.
				accent: colors.indigo,
				// Your preferred gray scale. Zinc is closest to Starlight’s defaults.
				gray: colors.zinc,
			},
		},
	},
	plugins: [starlightPlugin()],
};
