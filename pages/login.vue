<script setup>
definePageMeta({
	layout: 'simple',
});
</script>

<template>
	<form>
		<h1>User login</h1>
		<p>
			To change the state of this page go to <code>login.vue</code> and change <code>loggedInUser</code> to
			<code>true</code>
		</p>
		<span>
			<label for="email">Type your email</label>
			<input type="email" id="email" size="30" required />
		</span>
		<span>
			<label for="password">Type your password</label>
			<input type="text" name="password" id="password" required />
		</span>
		<span class="messageBox">
			<div id="label-hint">
				<label for="message">Request</label>
				<label>Optional</label>
			</div>
			<textarea id="message" rows="8" placeholder="My shoes are too tight, and I have forgotten how to dance.">
			</textarea>
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
