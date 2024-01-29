<script lang="ts">
	import { formatDateTime } from '$lib/utils/date/formatDateTime';
	import {
		selectedPage,
		pages,
		keywordSearchPageByName,
		isPageStoreLoading
	} from '$lib/stores/pageStore';
	import { doSearchPageByName } from '../functions/doSearchPageByName';
	import { fade, fly } from 'svelte/transition';

	let searchInputValue: string;

	const doSearch = async (pageName: string) => {
		if ($isPageStoreLoading) return;
		isPageStoreLoading.set(true);
		keywordSearchPageByName.set(pageName);
		const filtredPages = await doSearchPageByName({ pageName });
		pages.set(filtredPages);
		isPageStoreLoading.set(false);
	};

	const doClear = () => {
		if ($isPageStoreLoading) return;
		keywordSearchPageByName.set('');
		doSearch('');
	};

	const handleEnterKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			doSearch(searchInputValue);
		}
	};
</script>

<ul class="mt-10">
	<label for="search-page" class="label-action">Search a page</label>
	keywordSearchPageByName: {$keywordSearchPageByName}
	<div class="flex w-5/12 mt-2">
		<input
			type="text"
			name="search-page"
			id="search-page"
			spellcheck="false"
			bind:value={searchInputValue}
			class="input-search"
			placeholder="e.g., home"
			aria-describedby="search-page-description"
			on:keyup={handleEnterKeyPress}
			disabled={$isPageStoreLoading}
		/>

		<button
			disabled={$isPageStoreLoading}
			on:click={() => doClear()}
			class="btn-clear-search"
			class:btn-disabled={$isPageStoreLoading}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>Clear search</title><path
					fill="currentColor"
					d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
				/></svg
			>
		</button>
		<button
			disabled={$isPageStoreLoading}
			on:click={() => doSearch(searchInputValue)}
			class=" btn-search"
			class:btn-disabled={$isPageStoreLoading}
		>
			{#if !$isPageStoreLoading}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><title>Search a page</title><path
						fill="currentColor"
						d="M7.5 11C5 11 3 13 3 15.5C3 16.38 3.25 17.21 3.69 17.9L.61 21L2 22.39L5.12 19.32C5.81 19.75 6.63 20 7.5 20C10 20 12 18 12 15.5S10 11 7.5 11M7.5 18C6.12 18 5 16.88 5 15.5S6.12 13 7.5 13 10 14.12 10 15.5 8.88 18 7.5 18M23 5V19C23 20.11 22.11 21 21 21H10.95C11.76 20.5 12.45 19.81 12.97 19H21V9H13V5H3V10.82C1.77 12 1 13.66 1 15.5V5C1 3.9 1.9 3 3 3H21C22.11 3 23 3.9 23 5Z"
					/></svg
				>
			{:else}
				<svg
					aria-hidden="true"
					role="status"
					class="items-center justify-center inline w-3 h-3 mb-2 text-white animate-spin"
					viewBox="0 0 100 101"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Loading...</title>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="#E5E7EB"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentColor"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<p class="input-hint" id="search-page-description">
		Tap your text and press enter or click on the search button to see the result.
	</p>
</ul>

{#if $pages.length > 0}
	<div class="md:flex">
		<div class="mt-8">
			{#if $selectedPage && $selectedPage.id}
				<h2 class="leading-6 text-gray-900 text-md">
					The page '<b>{$selectedPage.name}</b>' is selected
				</h2>
			{:else}
				<h2 class="leading-6 text-gray-900 text-md">Nothing selected</h2>
			{/if}

			<ul
				role="list"
				class:pointer-events-none={$isPageStoreLoading}
				class:user-select-none={$isPageStoreLoading}
				class="relative w-full p-4 my-4 space-y-4 overflow-y-scroll divide-y divide-gray-100 shadow-md ring-1 ring-slate-100 max-h-96"
			>
				{#each $pages as page (page.id)}
					<div>
						<button
							on:click={() => {
								if ($isPageStoreLoading) return;
								selectedPage.set(page);
							}}
							class:ring-2={$selectedPage && $selectedPage.id === page.id}
							class:ring-slate-400={$selectedPage && $selectedPage.id === page.id}
							class="flex items-center justify-between w-full p-4 py-5 rounded-md shadow-md cursor-pointer ring-1 ring-slate-200 gap-x-6 hover:bg-slate-50"
						>
							<div class="min-w-0">
								<div class="flex items-start gap-x-3">
									<p class="text-sm font-semibold leading-6 text-gray-900">{page.name}</p>
								</div>
								<div class="flex mt-1 text-xs leading-5 text-gray-500 gap-x-2">
									<div class="flex flex-col text-left">
										<p class="whitespace-nowrap">
											Created at <time datetime={page.created}>{formatDateTime(page.created)}</time>
										</p>
										<p class="whitespace-nowrap">
											Updated at <time datetime={page.created}>{formatDateTime(page.updated)}</time>
										</p>
										<p class="whitespace-nowrap">
											#{page.id}
										</p>
									</div>
								</div>
							</div>
							<div class="flex flex-none gap-x-4">
								<div class="relative flex-none">
									<svg
										class="flex-none w-5 h-5 text-slate-400"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</button>
					</div>
				{/each}

				{#if $isPageStoreLoading}
					<div
						in:fade
						out:fly
						role="status"
						class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
					>
						<svg
							aria-hidden="true"
							class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/><path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/></svg
						>
						<span class="sr-only">Loading...</span>
					</div>
				{/if}
			</ul>
		</div>
	</div>
{:else}
	<p>
		nothing found try to<button
			disabled={$isPageStoreLoading}
			on:click={() => doClear()}
			class="bg-transparent min-w-fit hover:bg-transparent btn-clear-search"
			class:btn-disabled={$isPageStoreLoading}
		>
			<u>clear filter</u>
		</button>
	</p>

	{#if $isPageStoreLoading}
		<div class="w-full max-w-sm p-4 mt-4 border border-blue-300 rounded-md shadow">
			<div class="flex space-x-4 animate-pulse">
				<div class="flex-1 py-1 space-y-6">
					<div class="h-2 rounded bg-slate-700"></div>
					<div class="space-y-3">
						
					</div>
				</div>
			</div>
		</div>
	{/if}
{/if}
