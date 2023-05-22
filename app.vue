<template>
	<div class="main-div">
		<AppHeader />
		<span><NuxtPage /></span>
		<AppFooter />
	</div>
</template>
<style lang="scss">
:root{
	--space-01: 1rem;
}
// body {
// 	margin: 0;
// 	padding: 0;
// }
.main-div {
	height: 100vh;
	display: grid;
	grid-template-rows: auto 1fr auto;
	span {
		padding: var(--space-01);
	}
}
</style>
