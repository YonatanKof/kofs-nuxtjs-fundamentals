<script setup lang="ts">
const config = useRuntimeConfig();
const siteTitle = `A site by ${config.public.siteOwnerName}`;
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - ` + siteTitle : siteTitle;
	},
	meta: [
		{ property: 'author', content: config.public.siteOwnerName },
	],
});
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
