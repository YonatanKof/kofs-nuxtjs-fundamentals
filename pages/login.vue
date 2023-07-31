<script setup>
definePageMeta({
	layout: 'simple',
});
</script>

<template>
	<form>
		<h1>User login</h1>
		<span> <label for="email">Type your email</label> <input type="text" name="email" id="email" /></span>
		<span> <label for="password">Type your password</label> <input type="text" name="password" id="password" /></span>
	</form>
</template>

<style scoped>
span,
form {
	display: flex;
	flex-direction: column;
}
form {
	gap: var(--space-s);
}
span {
	gap: var(--space-3xs);
}
</style>
