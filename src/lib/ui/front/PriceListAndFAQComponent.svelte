<script lang="ts">
	import FaqComponent from './FAQComponent.svelte';
	import PriceListComponent from './PriceListComponent.svelte';
</script>

<div class="py-24 bg-gray-100/30 sm:py-32">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-2xl mx-auto lg:mx-0">
			<h2 class="text-base font-semibold leading-7 text-indigo-400">Aeropark1000</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Price list & FAQ</p>
			<p class="mt-6 text-lg leading-8 text-gray-800">
				Welcome to our Price List and Frequently Asked Questions (FAQ) page! Explore the details
				below to learn more about our offerings.
			</p>
		</div>

        <div class="flex w-full mt-12 flex-col md:flex-row">
			<div class="flex flex-col w-full">
				<h2 class="pb-2 text-4xl font-semibold leading-7 text-indigo-400">Prices</h2>
				<h2 class="mb-6 text-base font-semibold leading-7">Price per number of days (taxes included)</h2>

				<div class="max-w-md mt-10">
					<PriceListComponent />
				</div>
			</div>
			<div class="flex flex-col w-full mt-16 md:mt-0">
				<h2 class="pb-2 text-4xl font-semibold leading-7 text-indigo-400">FAQ</h2>
				<h2 class="mb-6 text-base font-semibold leading-7">Frequently Ask Questions</h2>

				<FaqComponent />
			</div>
		</div>
		<dl
			class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 text-base leading-7 text-gray-800 sm:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-x-16"
		>
			<div class="relative pl-9">
				<dt class="inline font-semibold text-black">
					<svg
						class="absolute w-5 h-5 text-indigo-500 left-1 top-1"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
							clip-rule="evenodd"
						/>
					</svg>
					Indoor Parking
				</dt>
				<dd class="inline">
					Our indoor parking facilities provide a secure and monitored environment for your vehicle.
				</dd>
			</div>

			<div class="relative pl-9">
				<dt class="inline font-semibold text-black">
					<svg
						class="absolute w-5 h-5 text-indigo-500 left-1 top-1"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
							clip-rule="evenodd"
						/>
					</svg>
					24/7 Access
				</dt>
				<dd class="inline">
					Enjoy easy access to our facilities at any time, day or night, with our 24/7 availability.
				</dd>
			</div>

			<div class="relative pl-9">
				<dt class="inline font-semibold text-black">
					<svg
						class="absolute w-5 h-5 text-indigo-500 left-1 top-1"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
						/>
						<path
							fill-rule="evenodd"
							d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
						/>
					</svg>
					Free Shuttle
				</dt>
				<dd class="inline">
					Take advantage of our complimentary shuttle service for convenient transportation to and
					from our facilities.
				</dd>
			</div>

			<div class="relative pl-9">
				<dt class="inline font-semibold text-black">
					<svg
						class="absolute w-5 h-5 text-indigo-500 left-1 top-1"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
							clip-rule="evenodd"
						/>
					</svg>
					Secure and Monitored by CCTV System
				</dt>
				<dd class="inline">
					Rest easy knowing that our facilities are equipped with advanced security measures,
					including a CCTV system.
				</dd>
			</div>
		</dl>

		
	</div>
</div>
