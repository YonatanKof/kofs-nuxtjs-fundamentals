<script setup>
import Navbar from './Navbar.vue';
</script>
<template>
	<header>
		<h1>Header</h1>
		<Navbar />
	</header>
</template>
<style lang="scss">
header {
	padding: var(--size-010);
    @include flex-center;
}
</style>
