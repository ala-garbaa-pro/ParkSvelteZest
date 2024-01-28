<script lang="ts">
	import { onMount } from 'svelte';
	import Reservate from './components/Reservate.svelte';

	// Props
	export let locale: string;
	export let disabledCalendarDates: string[];

	// Locals
	export let data;

	let isMounted = false;

	onMount(() => {
		isMounted = true;
	});
</script>

<div class="py-12 bg-white sm:py-16">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-2xl mx-auto lg:mx-0">
			<p class="text-base font-semibold leading-7 text-indigo-600">Book Your Parking Spot Now</p>
			<h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
				Secure and Convenient Parking
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Reserve your parking space in advance to ensure a hassle-free experience. <br /> Our secure and
				convenient parking facilities are designed to meet your needs.
			</p>
		</div>
	</div>
</div>

{#if isMounted}
	<Reservate {data} {locale} {disabledCalendarDates} />
{:else}
	<div role="status" class="space-y-2.5 animate-pulse max-w-lg">
		<div class="flex items-center w-full">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		</div>
		<div class="flex items-center w-full max-w-[480px]">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
		</div>
		<div class="flex items-center w-full max-w-[400px]">
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		</div>
		<div class="flex items-center w-full max-w-[480px]">
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
		</div>
		<div class="flex items-center w-full max-w-[440px]">
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
		</div>
		<div class="flex items-center w-full max-w-[360px]">
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
			<div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
			<div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
		</div>
		<span class="sr-only">Loading...</span>
	</div>
{/if}
