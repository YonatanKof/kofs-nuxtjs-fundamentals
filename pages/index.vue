<script setup>
const { data: queryColor } = await useAsyncData('color', () => {
	return queryContent('try-me').where({ color: 'blond' }).find();
});
const { data: queryFeeling } = await useAsyncData('feeling', () => {
	return queryContent('try-me').where({ feeling: 'cheeky' }).find();
});
</script>
<template>
	<main>
		<h1>Index</h1>
		<h2>Querying the content folder</h2>
		<h3>Color</h3>
		<ul v-if="queryColor">
			<li v-for="color in queryColor" :key="color.title">{{ color.title }}'s color is {{ color.color }} and it feels {{ color.feeling }}</li>
		</ul>
		<hr>
		<h3>Feeling</h3>
		<ul v-if="queryFeeling">
			<li v-for="feel in queryFeeling" :key="feel.id">{{ feel.title }}'s color is {{ feel.color }} and it feels {{ feel.feeling }}</li>
		</ul>
		<h2>Just a simple component</h2>
		<MyComp>
			<code>You slot!</code><br />
			<h3>I love you</h3>
		</MyComp>
		<h2>Nav to subfolder pages</h2>
		<nuxt-link to="/kof/kof-tov">kof tov</nuxt-link>
		<!-- <nuxt-link :to="{`/kof/kof-tov`}">kof tov</nuxt-link> -->
	</main>
</template>
