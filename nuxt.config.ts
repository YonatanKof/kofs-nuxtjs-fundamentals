// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxt/content'],
	content: {
		highlight: {
			theme: 'github-light',
		},
		markdown: {
			anchorLinks: {
				depth: 6,
			},
		},
	},
	css: ['~/assets/styles/style.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use '~/assets/styles/reset' as *; 
						@use '~/assets/styles/mixins' as *; 
						@use '~/assets/styles/utopia' as *; 
						@use '~/assets/styles/typography' as *;`,
				},
			},
		},
	},
});
