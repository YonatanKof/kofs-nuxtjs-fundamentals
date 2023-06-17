<script setup>
defineProps({
	navigationTree: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<section class="navigation">
		<div v-for="(item, index) in navigationTree" :key="index">
			<NuxtLink :to="item._path">
				<h3>{{ item.title }}</h3>
				<p>{{ item.feeling }}</p>
				<p>{{ item.color }}</p>
			</NuxtLink>
			<!-- <AppNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" /> -->
		</div>
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	gap: var(--space-s);
}
div {
	padding: var(--space-s);
	background-color: aliceblue;
	box-shadow: var(--shadow-md);
}
.navigation li {
	list-style-type: none;
}

.navigation ul {
	margin-left: 0.8rem;
}
</style>
