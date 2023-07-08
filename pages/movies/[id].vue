<script setup>
const route = useRoute();
const { data } = await useFetch(`http://www.omdbapi.com/?apikey=fab7e09d&i=${route.params.id}`, {
	pick: ['Title', 'Poster', 'Director', 'Released', 'Plot', 'Actors'],
});
</script>

<template>
	<main>
		<h1>{{ data.Title }}</h1>
		<img :src="data.Poster" :alt="`Cover poster for the movie ${data.Title}`" />
		<h3>A movie by {{ data.Director }}, released on {{ data.Released }}</h3>
		<h4>Staring: {{ data.Actors }}</h4>
		<p>{{ data.Plot }}</p>
		<!-- This shows all the available data -->
		<!-- <pre>{{ data }}</pre> -->
	</main>
</template>

<style scoped></style>
