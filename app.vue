<script setup lang="ts">
const config = useRuntimeConfig();
const siteTitle = `A site by ${config.public.siteOwnerName}`;
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	},
	meta: [{ property: 'author', content: config.public.siteOwnerName }],
});
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<style>
.page-enter-active,
.page-leave-active {
	transition: opacity 0.14s, filter 0.07s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.25rem);
}
.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.14s, filter 0.07s;
}
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(0.25rem);
}
</style>