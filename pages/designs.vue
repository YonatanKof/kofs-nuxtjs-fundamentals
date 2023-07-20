<script setup>
const config = useRuntimeConfig();
useHead({
	title: 'Designs',
});
useSeoMeta({
	ogType: 'website',
	description: () => `Amazing designs by ${config.public.siteOwnerName}`,
	ogDescription: () => `Amazing designs by ${config.public.siteOwnerName}`,
	twitterDescription: () => `Amazing designs by ${config.public.siteOwnerName}`,
	image: '/images/designs.png',
	ogImage: '/images/designs.png',
	twitterImage: '/images/designs.png',
	imageAlt: 'Social cover for this site designs page',
	ogImageAlt: 'Social cover for this site designs page',
	twitterImageAlt: 'Social cover for this site designs page',
	twitterCard: 'summary_large_image',
});
const { data: navigation } = await useAsyncData('equal', () => {
	return queryContent('design').where({}).find();
});
</script>
<template>
	<div>
		<h1>Designs</h1>
		<ContentNavigation :navigation-tree="navigation" />
	</div>
</template>
