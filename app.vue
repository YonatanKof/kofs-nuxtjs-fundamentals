<script setup lang="ts">
useHead({
	title: 'Kof tov',
	meta: [{ name: 'description', content: 'My amazing site.' }],
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
