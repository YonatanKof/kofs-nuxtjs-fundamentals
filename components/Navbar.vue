<script setup>
const loggedInUser = useLoggedInUser();
</script>
<template>
	<nav>
		<nuxt-link :to="{name: 'index'}">Home</nuxt-link>
		<nuxt-link :to="{name: 'posts'}">Posts</nuxt-link>
		<nuxt-link :to="{name: 'designs'}">Designs</nuxt-link>
		<nuxt-link :to="{name: 'movies'}">Movies</nuxt-link>
		<NuxtLink v-if="!loggedInUser" to="/login">Login</NuxtLink>
		<NuxtLink v-if="loggedInUser" to="/admin">Admin</NuxtLink>
	</nav>
</template>
<style lang="scss" scoped>
nav {
	@include flex-center;
	gap: var(--size-010);
}
</style>
