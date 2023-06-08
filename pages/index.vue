<script setup>
const { data: equalQuery } = await useAsyncData('equal', () => {
	return queryContent('post').where({ color: 'red' }).find();
});

</script>
<template>
	<div>
		<h1>Index</h1>
		<h2>Querying the content folder</h2>
		<ul v-if="equalQuery">
			<li v-for="color in equalQuery" :key="color.id">Color is {{ color.color }} and it feels {{ color.feeling }}</li>
		</ul>
		<h2>Just a simple component</h2>
		<MyComp>
			<code>You slot!</code><br />
			<h3>I love you</h3>
		</MyComp>
	</div>
</template>
