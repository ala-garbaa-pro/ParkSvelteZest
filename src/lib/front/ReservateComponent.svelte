<script lang="ts">
	import { onMount } from 'svelte';
	import CalendarDateTimeComponent from './CalendarDateTimeComponent.svelte';

	export let locale: string;
	export let disabledCalendarDates: string[];
	export let extraParams;

	let arrivalDate: string[] | undefined;
	let arrivalTime: string;
	let returnDate: string[] | undefined;
	let returnTime: string;

	let mountClientComponent = false;

	onMount(() => {
		if (window) {
			mountClientComponent = true;
		}
	});

	$: {
		extraParams = `&ad=${arrivalDate}&at=${arrivalTime}&rd=${returnDate}&rt=${returnTime}`;
	}
</script>

{#if mountClientComponent}
	<div class="relative flex w-full h-16 my-4 rounded-lg bg-slate-200/10">
		<CalendarDateTimeComponent
			{locale}
			{disabledCalendarDates}
			labelTitle="Arrival datetime"
			id_dom="arrival_datetime"
			design="float-label"
			bind:text_date={arrivalDate}
			bind:text_time={arrivalTime}
		/>
		<div class="w-4" />

		<CalendarDateTimeComponent
			{locale}
			{disabledCalendarDates}
			labelTitle="Return datetime"
			id_dom="return_datetime"
			design="float-label"
			bind:text_date={returnDate}
			bind:text_time={returnTime}
		/>
	</div>
{:else}
	<div role="status" class="flex animate-pulse">
		<div class="flex items-center mt-4 mr-4">
			<div>
				<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2" />
				<div class="h-2 bg-gray-200 rounded-full w-36 dark:bg-gray-700" />
			</div>
		</div>
		<div class="flex items-center mt-4">
			<div>
				<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-2" />
				<div class="h-2 bg-gray-200 rounded-full w-36 dark:bg-gray-700" />
			</div>
		</div>
	</div>
{/if}
