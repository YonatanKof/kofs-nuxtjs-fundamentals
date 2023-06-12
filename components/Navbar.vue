<template>
	<nav>
		<nuxt-link :to="{name: 'index'}">Home</nuxt-link>
		<nuxt-link :to="{name: 'posts'}">Posts</nuxt-link>
		<nuxt-link :to="{name: 'designs'}">Designs</nuxt-link>
	</nav>
</template>
<style lang="scss" scoped>
nav {
	@include flex-center;
	gap: var(--size-010);
}
</style>
