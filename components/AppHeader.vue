<script setup></script>
<template>
	<header>
		<h2>Header</h2>
		<Navbar />
	</header>
</template>
<style lang="scss" scoped>
header {
	// position: sticky;
	// top: 0;
	// backdrop-filter: blur(0.5rem) brightness(1.05);
	// z-index: 1000;
	height: var(--header-height);
	@include flex-center;
}
</style>
