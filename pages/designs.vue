<script setup>
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
