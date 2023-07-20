<script setup lang="ts">
const config = useRuntimeConfig();
const siteTitle = `A site by ${config.public.siteOwnerName}`;
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	},
	meta: [
		{ property: 'author', content: config.public.siteOwnerName },
	],
});
</script>

<template>
	<main>
		<AppHeader />
		<NuxtPage />
		<AppFooter />
	</main>
</template>
<style lang="scss" scoped>
main {
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
	@include display-width;
}
</style>
