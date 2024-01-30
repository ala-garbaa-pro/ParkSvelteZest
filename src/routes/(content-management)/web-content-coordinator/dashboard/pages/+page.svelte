<!-- FILE: +page.svelte -->

<script lang="ts">
	import MainLayout from '../ui/MainLayout.svelte';
	import FilterPage from './ui/FilterPage.svelte';
	import { selectedPage, pages } from '$lib/stores/pageStore';
	import { onMount } from 'svelte';
	import FilterPageContents from './ui/FilterPageContents.svelte';

	export let data;

	onMount(() => {
		pages.set(data.pages ?? []);
	});
</script>

<MainLayout>
	<h1 slot="title" class="h1-page">Edit Page Contents</h1>
	<div class="flex space-x-16">
		{#if $pages !== undefined}
			<div class="flex flex-col">
				<FilterPage />
			</div>
		{:else}
			<p>Load pages...</p>
		{/if}

		{#if $selectedPage}
			<div class="flex flex-col">
				<FilterPageContents />
			</div>
		{/if}
	</div>
</MainLayout>
