<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const { data, error } = await useFetch(
	`https://www.omdbapi.com/?apikey=${config.public.apiSecret}&i=${route.params.id}`,
	{
		pick: ['Title', 'Poster', 'Director', 'Released', 'Plot', 'Actors', 'Error'],
	}
);
if (error.value) {
	showError({ statusCode: 500, statusMessage: 'Oh boy, this is an internal server error' });
}
if (data.value.Error === 'Incorrect IMDb ID.') {
	showError({ statusCode: 404, statusMessage: "Can't find page" });
}
useHead({
	title: data.value.Title,
});
useSeoMeta({
	ogType: 'website',
	description: () => `Movie plot: ${data.value.Plot}`,
	ogDescription: () => `Movie plot: ${data.value.Plot}`,
	twitterDescription: () => `Movie plot: ${data.value.Plot}`,
	image: () => data.value.Poster,
	ogImage: () => data.value.Poster,
	twitterImage: () => data.value.Poster,
	imageAlt: () => `Poster of the movie: ${data.value.Title}`,
	ogImageAlt: () => `Poster of the movie: ${data.value.Title}`,
	twitterImageAlt: () => `Poster of the movie: ${data.value.Title}`,
	twitterCard: 'summary_large_image',
	twitterSite: '@yonatankof',
});
</script>

<template>
	<main>
		<div class="grid">
			<img :src="data.Poster" :alt="`Cover poster for the movie ${data.Title}`" />
			<span>
				<h1>{{ data.Title }}</h1>
				<h3>A movie by {{ data.Director }}, released on {{ data.Released }}</h3>
			</span>
		</div>
		<h4>Staring: {{ data.Actors }}</h4>
		<p>{{ data.Plot }}</p>
		<!-- This shows all the available data -->
		<!-- <pre>{{ data }}</pre> -->
	</main>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: var(--space-s);
}
</style>
