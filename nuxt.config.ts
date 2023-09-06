// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['nuxt-content-assets', '@nuxt/content', '@nuxt/image'],
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
	runtimeConfig: {
		// Private keys are only available on the server
		// Public keys that are exposed to the client
		public: {
			apiSecret: process.env.NUXT_OMDBAPI_KEY,
			siteOwnerName: 'Yonatan Ben Knaan',
			missingImg: '/missing.svg',
		},
	},
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in', // default
		},
		layoutTransition: {
			name: 'layout',
			mode: 'out-in', // default
		},
	},
	// image: {
	// 	domains: ['m.media-amazon.com'],
	// },
});
