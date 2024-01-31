<!-- FILE: +page.svelte -->

<script lang="ts">
	import MainLayout from '../ui/MainLayout.svelte';
	import FilterPage from './ui/FilterPage.svelte';
	import { selectedPage, pages, selectedText, selectedContent } from '$lib/stores/pageStore';
	import { onMount } from 'svelte';
	import FilterContents from './ui/FilterContents.svelte';
	import FilterText from './ui/FilterText.svelte';
	import BatchText from './ui/BatchText.svelte';

	export let data;

	onMount(() => {
		pages.set(data.pages ?? []);
	});
</script>

<MainLayout>
	<h1 slot="title" class="h1-page">Edit Page Contents</h1>
	<div class="flex flex-col">
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
					<FilterContents />
				</div>
			{/if}
		</div>

		{#if $selectedContent}
			<div class="flex flex-col">
				<BatchText />
			</div>
			<div class="flex flex-col">
				<FilterText />
			</div>
		{/if}
	</div>
</MainLayout>
