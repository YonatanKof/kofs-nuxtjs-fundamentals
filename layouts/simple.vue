<template>
	<main>
		<slot />
	</main>
</template>

<style lang="scss" scoped>
main {
	height: 100vh;
	// display: grid;
	// grid-template-columns: 1fr;
	@include display-width;
	@include flex-center;
}
</style>
