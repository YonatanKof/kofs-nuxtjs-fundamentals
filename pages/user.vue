<script lang="ts" setup>
definePageMeta({
	middleware: ['auth'],
});
const loggedInUser = useLoggedInUser();
</script>

<template>
	<div>
		<h1>The user page!</h1>
		<NuxtLink v-if="loggedInUser" @click.prevent="loggedInUser = false" to="/">Logout</NuxtLink>
	</div>
</template>

<style scoped></style>
