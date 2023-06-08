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
				<h1>{{ item.title }}</h1>
				<p>{{ item.feeling }}</p>
				<p>{{ item.color }}</p>
			</NuxtLink>
			<AppNavigation v-if="item.children" :navigation-tree="item.children" class="sub-navigation" />
		</div>
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	gap: var(--size-010);
}
div {
	padding: var(--size-010);
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
