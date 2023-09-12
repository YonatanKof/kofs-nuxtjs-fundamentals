<template>
	<Section id="blog">
		<div>
			<ol itemscope itemtype="https://schema.org/BreadcrumbList">
				<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
					<nuxt-link itemprop="item" :to="{ name: 'index' }"><span itemprop="name">Home</span></nuxt-link>
					<meta itemprop="position" content="1" />
				</li>
				<span>/</span>
				<li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
					<span itemprop="name">Blog</span>
					<meta itemprop="position" content="2" />
				</li>
			</ol>
		</div>
		<h1>Blog</h1>
		<p>This is a Kof Tov website</p>
	</Section>
</template>
