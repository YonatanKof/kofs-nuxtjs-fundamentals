<script setup></script>
<template>
	<header>
		<div>
			<h1>Header</h1>
			<Navbar />
		</div>
	</header>
</template>
<style lang="scss" scoped>
header {
	position: sticky;
	top: 0;
	backdrop-filter: blur(0.5rem) brightness(1.05);
	z-index: 1000;
}
div{
	padding: var(--size-010);
	@include flex-center;
	@include display-width;
}
</style>
