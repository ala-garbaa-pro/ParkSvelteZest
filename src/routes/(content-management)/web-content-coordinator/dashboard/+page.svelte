<script lang="ts">
	import MainLayout from './ui/MainLayout.svelte';
</script>

<MainLayout>
	<h1 slot="title" class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
		Dashboard
	</h1>

	<div class="pt-6 space-y-10 divide-y divide-gray-900/10">
		<div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
			<div class="px-4 sm:px-0">
				<h2 class="text-base font-semibold leading-7 text-gray-900">Website Info</h2>
				<p class="mt-1 text-sm leading-6 text-gray-600">
					The following parking information will be publicly displayed, so exercise caution when sharing details.
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
