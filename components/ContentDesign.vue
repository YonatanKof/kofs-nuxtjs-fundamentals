<script setup>
import { useDateFormat, useNow, formatDate } from '@vueuse/core';

const formatted = (date) => {
	return useDateFormat(date, 'YYYY-MM-DD');
};

defineProps({
	navigationDesign: {
		type: Array,
		default: () => [],
	},
	// When it comes to layout you should choose either this one ↓
	hasColumns: {
		type: Boolean,
		default: false,
	},
	// Or this one ↓
	hasFlex: {
		type: Boolean,
		default: false,
	},
});
</script>

<template>
	<section :class="{ columns: hasColumns, flex: hasFlex }">
		<div v-for="(item, index) in navigationDesign" :key="index">
			<NuxtLink :to="item._path" style="text-decoration: none">
				<img :src="item.cover_image" alt="" />
				<h3>{{ item.title }}</h3>
				<p style="font-weight: normal" v-if="item.description">{{ item.description }}</p>
				<p style="font-weight: normal" v-if="item.date">{{ formatted(item.date) }}</p>
			</NuxtLink>
		</div>
	</section>
</template>

<style scoped>
section {
	gap: var(--space-s);
}
.columns {
	display: block;
	columns: 2 auto;
}
.flex {
	display: flex;
	flex-direction: column;
}

div {
	margin-block-end: var(--space-s);
	background-color: aliceblue;
	box-shadow: var(--shadow-md);
	overflow: auto;
	&:hover {
		box-shadow: var(--shadow-lg);
	}
}
a {
	padding: var(--space-s);
	inset: 0;
	display: block;
}
</style>
