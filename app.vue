<template>
	<div>
		<AppHeader />
		<span><NuxtPage /></span>
		<AppFooter />
	</div>
</template>
<style lang="scss" scoped>
div {
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
	span {
		padding: var(--size-010);
	}
}
</style>
