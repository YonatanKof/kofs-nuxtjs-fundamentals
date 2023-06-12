<script setup lang="ts">
useHead({
	title: 'Kof tov',
	meta: [{ name: 'description', content: 'My amazing site.' }],
	bodyAttrs: {
		class: 'test',
	},
	script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<template>
	<main>
		<AppHeader />
		<div class="main-content-width"><NuxtPage /></div>
		<AppFooter />
	</main>
</template>
<style lang="scss" scoped>
main {
	margin: 0 auto;
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
}
.main-content-width {
	@include display-width;
}
</style>
