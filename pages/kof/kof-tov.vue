<script setup>
const title = ref('Welcome to my world');
</script>

<template>
	<div>
		<Head>
			<Title>{{ title }}</Title>
			<Meta name="description" :content="title" />
			<Style type="text/css" children="body { background-color: green; }" />
		</Head>
		<h1>Kof tov</h1>
	</div>
</template>
