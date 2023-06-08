<script setup>
const { data: navigation } = await useAsyncData('equal', () => {
	return queryContent('post').where({}).find();
});
</script>
<template>
	<div>
		<h1>Posts</h1>
		<ContentNavigation :navigation-tree="navigation" />
	</div>
</template>
