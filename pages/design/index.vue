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

// Find the number of blogs present
const itemCountLimit = 4;
const { data } = await useAsyncData(`content-/design`, async () => {
	const _designs = await queryContent('/design').only('title').find();
	return Math.ceil(_designs.length / itemCountLimit);
});
</script>
<template>
	<!-- This is the design list initial page -->
	<div>
		<h1>Designs</h1>
		<ContentQuery
			path="/design"
			:where="{}"
			:sort="{
				date: -1,
			}"
			:limit="itemCountLimit"
			v-slot="{ data }"
		>
			<ContentList :navigation="data" has-columns />
		</ContentQuery>
		<Pagination
			v-if="data > 1"
			:currentPage="1"
			:totalPages="data"
			:nextPage="data > 1"
			baseUrl="/design/"
			pageUrl="/design/page/"
		/>
	</div>
</template>
