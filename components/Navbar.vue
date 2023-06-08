<template>
	<nav>
		<nuxt-link to="/">Home</nuxt-link>
		<nuxt-link to="/posts">Posts</nuxt-link>
		<nuxt-link to="/designs">Designs</nuxt-link>
	</nav>
</template>
<style lang="scss" scoped>
nav {
	@include flex-center;
	gap: var(--size-010);
}
</style>
