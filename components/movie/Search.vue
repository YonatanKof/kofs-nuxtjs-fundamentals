<script setup>
const config = useRuntimeConfig()
const query = ref('');
const movies = ref([]);
async function search() {
	// https://nuxt.com/docs/api/utils/dollarfetch#fetch
	const { Search } = await $fetch(`https://www.omdbapi.com/?apikey=fab7e09d&s=${query.value}`);
	// the "s" after the API key is the search by name
	// see Parameters by search here: http://www.omdbapi.com/
	// then we paste in the query value
	movies.value = Search;
}
// search()
</script>
<template>
	<div>
		<h1>Movies</h1>
		<form @submit.prevent="search">
			<input type="text" v-model="query" />
			<button>Search</button>
		</form>
		<section>
			<div v-for="movie in movies" :id="movie.imdbID">
				<nuxt-link :to="{ name: 'movies-id', params: { id: movie.imdbID } }">
					<h5>{{ movie.Title }}</h5>
					<h6>{{ movie.Year }}</h6>
					<img
						:src="movie.Poster == 'N/A' ? config.public.missingImg : movie.Poster"
						:alt="`Cover poster for the movie ${movie.Title}`" />
				</nuxt-link>
			</div>
		</section>
	</div>
</template>
<style scoped>
section {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
}
img {
	width: 100%;
}
</style>
