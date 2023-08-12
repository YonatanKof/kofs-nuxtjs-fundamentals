<script setup>
const counter = useRandomCounter();
defineProps({
	pageName: {
		type: String,
		default: '___',
	},
});
</script>
<template>
	<div>
		<hr />
		<p>
			Counter with persistent state: <code>{{ counter }}</code>
		</p>
		<button @click="counter++">➕</button>
		<button @click="counter--">➖</button>
		<p>
			Check out the <strong>{{ pageName }}</strong> page to see it persist
		</p>
		<hr />
	</div>
</template>
<style scoped>
button {
	height: var(--space-l);
	width: var(--space-l);
	margin-inline-end: var(--space-3xs);
	margin-block-end: var(--space-2xs);
}
</style>