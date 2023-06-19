<script setup>
import { useChangeCase } from '@vueuse/integrations/useChangeCase';
const route = useRoute();

const goodLookingName = useChangeCase(route.params.name, 'capitalCase');
const mes = computed(() => `${goodLookingName.value} is form year ${route.params.year} `);
</script>

<template>
	<div>
		<h1>
			{{ mes }}
		</h1>
		<ul>
			<li>
				Movie name: <strong>{{ goodLookingName }}</strong>
			</li>
			<li>
				Year of release: <strong>{{ route.params.year }}</strong>
			</li>
		</ul>
	</div>
</template>