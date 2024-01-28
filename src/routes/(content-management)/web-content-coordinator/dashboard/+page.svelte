<script lang="ts">
	import MainLayout from './ui/MainLayout.svelte';

	export let data;
</script>

<MainLayout>
	<h1 slot="title" class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
		Dashboard
	</h1>

	{JSON.stringify(data)}
</MainLayout>
