// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/styles/style.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "@/assets/styles/_mixins.scss" as *; 
						@use "@/assets/styles/_try.scss" as *;
					`,	
				},
			},
		},
	},
});