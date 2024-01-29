<script lang="ts">
	import { formatDateTime } from '$lib/utils/date/formatDateTime';
	import { selectedPage, pages } from '$lib/stores/pageStore';
</script>

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
