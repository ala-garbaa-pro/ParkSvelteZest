<script lang="ts">
	import { formatDateTime } from '$lib/utils/date/formatDateTime';
	import { selectedPage, pages } from '$lib/stores/pageStore';

	let keywordSearchPageByName: string;

	console.log($selectedPage);
</script>

<form class="mt-10">
	<label for="search-page" class="label-action">Search a page</label>
	<div class="flex w-5/12 mt-2">
		<input
			type="text"
			name="search-page"
			id="search-page"
			spellcheck="false"
			value={keywordSearchPageByName ?? ''}
			class="input-search"
			placeholder="e.g., home"
			aria-describedby="search-page-description"
		/>

		<button on:click={() => (keywordSearchPageByName = '')} class="btn-clear-search">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>Clear search</title><path
					fill="currentColor"
					d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
				/></svg
			>
		</button>
		<button class="btn-search">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>Search a page</title><path
					fill="currentColor"
					d="M7.5 11C5 11 3 13 3 15.5C3 16.38 3.25 17.21 3.69 17.9L.61 21L2 22.39L5.12 19.32C5.81 19.75 6.63 20 7.5 20C10 20 12 18 12 15.5S10 11 7.5 11M7.5 18C6.12 18 5 16.88 5 15.5S6.12 13 7.5 13 10 14.12 10 15.5 8.88 18 7.5 18M23 5V19C23 20.11 22.11 21 21 21H10.95C11.76 20.5 12.45 19.81 12.97 19H21V9H13V5H3V10.82C1.77 12 1 13.66 1 15.5V5C1 3.9 1.9 3 3 3H21C22.11 3 23 3.9 23 5Z"
				/></svg
			>
		</button>
	</div>

	<p class="input-hint" id="search-page-description">
		Tap your text and press enter or click on the search button to see the result.
	</p>
</form>

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
				class="w-full p-4 my-4 space-y-4 overflow-y-scroll divide-y divide-gray-100 shadow-md ring-1 ring-slate-100 max-h-96"
			>
				{#each $pages as page (page.id)}
					<div>
						<button
							on:click={() => {
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
			</ul>
		</div>
	</div>
{/if}
