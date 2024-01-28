<script lang="ts">
	import MainLayout from './ui/MainLayout.svelte';
	const normalTabStyle =
		'px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700 whitespace-nowrap';
	const activeTabStyle =
		'px-1 py-4 text-sm font-medium text-blue-600 border-b-2 border-blue-500 whitespace-nowrap';

	export let data;

	const { pages } = data;
	let selectedPage = pages[0].name ?? '';

	// Function to handle changes in the select input
	function handleChange(event: Event) {
		// Cast the event.target.value to a string or the type that matches your data
		selectedPage = (event.target as HTMLSelectElement).value;
	}
</script>

<MainLayout>
	<h1 slot="title" class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
		Edit Page Contents
	</h1>

	<div>
		<div class="sm:hidden">
			<label for="tabs" class="sr-only">Select a tab</label>
			<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
			<select
				id="tabs"
				name="tabs"
				bind:value={selectedPage}
				on:change={handleChange}
				class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
			>
				{#each pages as page}
					{#if selectedPage === page.name}
						<option value={page.name} selected>{page.name}</option>
					{:else}
						<option value={page.name}>{page.name}</option>
					{/if}
				{/each}
			</select>
		</div>
		<div class="hidden sm:block">
			<div class="border-b border-gray-200">
				<nav class="flex -mb-px space-x-8" aria-label="Tabs">
					<!-- Current: "border-blue-500 text-blue-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					{#each pages as page}
						{#if selectedPage === page.name}
							<button class={activeTabStyle} aria-current="page">{page.name}</button>
						{:else}
							<button
								on:click={() => (selectedPage = page.name)}
								class={normalTabStyle}
								aria-current="page">{page.name}</button
							>
						{/if}
					{/each}
				</nav>
			</div>
		</div>
	</div>

	<div>
		Selected page is: [{selectedPage}]
	</div>

	<div class="pt-6 space-y-10 divide-y divide-gray-900/10">
		<div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
			<div class="px-4 sm:px-0">
				<h2 class="text-base font-semibold leading-7 text-gray-900">Website information</h2>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					The following parking information will be publicly displayed, so exercise caution when
					sharing details.
				</p>
			</div>

			<form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
				<div class="px-4 py-6 sm:p-8">
					<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div class="col-span-full">
							<label for="street-address" class="block text-sm font-medium leading-6 text-gray-900"
								>Street address</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="street-address"
									id="street-address"
									placeholder="Verdun Street 679, 1130 Brussels"
									autocomplete="street-address"
									class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div class="sm:col-span-4">
							<label for="website" class="block text-sm font-medium leading-6 text-gray-900"
								>Google Maps</label
							>
							<div class="mt-2">
								<div
									class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 sm:max-w-md"
								>
									<span class="flex items-center pl-3 text-gray-500 select-none sm:text-sm"
										>URL</span
									>
									<input
										type="text"
										name="website"
										id="website"
										class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
										placeholder="https://goo.gl/maps/gLFGPeDEAMNPBfjv6"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					class="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
				>
					<button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button
					>
					<button
						type="submit"
						class="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
						>Save</button
					>
				</div>
			</form>
		</div>
	</div>
</MainLayout>
