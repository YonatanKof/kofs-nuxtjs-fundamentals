<script setup>
const config = useRuntimeConfig();
const { data: queryColor } = await useAsyncData('color', () => {
	return queryContent('try-me').where({ color: 'blond' }).find();
});
const { data: queryFeeling } = await useAsyncData('feeling', () => {
	return queryContent('try-me').where({ feeling: 'cheeky' }).find();
});
useSeoMeta({
	ogType: 'website',
	description: () => `An amazing site by ${config.public.siteOwnerName}`,
	ogDescription: () => `An amazing site by ${config.public.siteOwnerName}`,
	twitterDescription: () => `An amazing site by ${config.public.siteOwnerName}`,
	image: '/images/main.png',
	ogImage: '/images/main.png',
	twitterImage: '/images/main.png',
	imageAlt: 'Social cover for this site main page',
	ogImageAlt: 'Social cover for this site main page',
	twitterImageAlt: 'Social cover for this site main page',
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});
</script>
<template>
	<main>
		<h1>Index</h1>
		<h2>Querying the content folder</h2>
		<h3>Color</h3>
		<ul v-if="queryColor">
			<li v-for="color in queryColor" :key="color.title">
				{{ color.title }}'s color is {{ color.color }} and it feels {{ color.feeling }}
			</li>
		</ul>
		<hr />
		<h3>Feeling</h3>
		<ul v-if="queryFeeling">
			<li v-for="feel in queryFeeling" :key="feel.id">
				{{ feel.title }}'s color is {{ feel.color }} and it feels {{ feel.feeling }}
			</li>
		</ul>
		<h2>Just a simple component</h2>
		<MyComp>
			<code>You slot!</code><br />
			<h3>I love you</h3>
		</MyComp>
		<h2>Nav to subfolder pages</h2>
		<nuxt-link to="/kof/kof-tov">Kof tov page</nuxt-link>
		<h2>External link</h2>
		<nuxt-link to="https://yonatankof.com/">Yonatan Kof site</nuxt-link>
	</main>
</template>
