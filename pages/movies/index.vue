<script setup>
const config = useRuntimeConfig();
useHead({
	title: 'Search movies',
});
useSeoMeta({
	ogType: 'website',
	description: () => `Search movies by name – Built with love by ${config.public.siteOwnerName}`,
	ogDescription: () => `Search movies by name – Built with love by ${config.public.siteOwnerName}`,
	twitterDescription: () => `Search movies by name – Built with love by ${config.public.siteOwnerName}`,
	image: '/images/movies.png',
	ogImage: '/images/movies.png',
	twitterImage: '/images/movies.png',
	imageAlt: 'Social cover for the Search movies page',
	ogImageAlt: 'Social cover for the Search movies page',
	twitterImageAlt: 'Social cover for the Search movies page',
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});
definePageMeta({
	pageTransition: {
		name: 'pop',
	},
});
</script>

<template>
	<MovieSearch />
</template>
