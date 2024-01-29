<!-- FILE: +page.svelte -->

<script lang="ts">
	import MainLayout from '../ui/MainLayout.svelte';
	import FilterPage from './ui/FilterPage.svelte';
	import { selectedPage, pages } from '$lib/stores/pageStore';
	import { onMount } from 'svelte';

	export let data;

	onMount(() => {
		pages.set(data.pages ?? []);
	});
</script>

<MainLayout>
	<h1 slot="title" class="h1-page">Edit Page Contents</h1>

	{#if $pages !== undefined}
		<FilterPage />
	{:else}
		<p>Load pages...</p>
	{/if}

	{#if $selectedPage}
		{JSON.stringify($selectedPage)}
	{/if}
</MainLayout>
