<script setup>
const route = useRoute();
const { data } = await useAsyncData(
	`/movies/${route.params.id}`,
	() => {
		return $fetch(`http://www.omdbapi.com/?apikey=fab7e09d&i=${route.params.id}`);
	},
	{ pick: ['Title', 'Poster', 'Director', 'Released', 'Plot'] }
);
</script>

<template>
	<main>
		<h2>{{ data.Title }}</h2>
		<img :src="data.Poster" :alt="`Cover poster for the movie ${data.Title}`" />
		<h3>A movie by {{ data.Director }}, released on {{ data.Released }}</h3>
		<p>{{ data.Plot }}</p>
		<!-- This shows all the available data -->
		<pre>{{ data }}</pre>
	</main>
</template>

<style scoped></style>
