import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	// Note: These extensions are manually imported into the svelte configuration.
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
