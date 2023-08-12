<script setup>
const loggedInUser = useLoggedInUser();
definePageMeta({
	layout: 'simple',
});
function login() {
	loggedInUser.value = true;
	useRouter().push('/admin');
}
</script>

<template>
	<form @submit.prevent="login">
		<h1>User login</h1>
		<span>
			<label for="email">Type your email</label>
			<input type="email" id="email" size="30" required />
		</span>
		<span>
			<label for="password">Type your password</label>
			<input type="password" name="password" id="password" required />
		</span>
		<input type="submit" value="Login" />
		<nuxt-link :to="{ name: 'index' }" style="text-align: center">Or go back home</nuxt-link>
	</form>
</template>

<style lang="scss" scoped>
span,
form {
	display: flex;
	flex-direction: column;
}
form {
	gap: var(--space-s);
	width: 100%;
	@include display-width(var(--display-width-narrow));
}
span {
	// gap: var(--space-3xs);
}
#label-hint {
	display: flex;
	justify-content: space-between;
	label:last-child {
		color: var(--color-sys-dim);
	}
}
</style>
