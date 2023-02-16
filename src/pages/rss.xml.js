import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
	return rss({
		title: 'Astro Learner | Blog',
		description: 'Building the Astro based blog!',
		site: 'https://chimerical-pixie-82bd72.netlify.app',
		items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
		customData: `<language>en-us</language>`,
	});
}
