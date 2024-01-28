<script lang="ts">
	// Imports
	import { formatDateYYYY_MM_DD } from '$lib/utils/date/formatDateYYYY_MM_DD';
	import { getTime_HH_mm } from '$lib/utils/date/getTime_HH_mm';
	import VanillaCalendar, { type Options } from '@uvarov.frontend/vanilla-calendar';
	import { onMount } from 'svelte';
	import Modal from './Modal.svelte';
	import { closestQuarterHour } from '../../utils/date/closestQuarterHour';
	import { fixMinutes } from '$lib/utils/date/fixMinutes';

	// Props
	export let locale: string;
	export let disabledCalendarDates: string[];
	export let labelTitle: string;
	export let id_dom: string;
	export let design: 'normal' | 'float-label' = 'normal';
	export let text_date: string[] | undefined = [formatDateYYYY_MM_DD(new Date())];
	export let text_time: string = getTime_HH_mm();

	// Internal vars
	let calendar: VanillaCalendar<string, Options>;
	let showModal = false;
	let shadow_text_date: string[] | undefined;
	let shadow_text_time: string;
	const calendar_dom = `calendar-${id_dom}`;
	const calendar_dom_selector = `#${calendar_dom}`;
	let minutesElement: HTMLInputElement | null; // Declare the variable

	const initCalendar = () => {
		try {
			const options: Options = {
				type: 'default',
				actions: {
					clickDay(_event, dates) {
						if (dates && dates.length > 0) {
							console.log(dates);
							shadow_text_date = dates;
						}
					},
					changeTime(_e, time) {
						if (time) {
							shadow_text_time = fixMinutes(time);
						}
					}
				},
				settings: {
					selected: {
						dates: text_date,
						time: fixMinutes(text_time)
					},
					lang: locale,
					selection: {
						time: 24,
						stepMinutes: 15
					},
					visibility: {
						theme: 'light'
					},
					range: {
						min: `${formatDateYYYY_MM_DD(new Date())}`,
						disabled: disabledCalendarDates
					}
				}
			};

			calendar = new VanillaCalendar(calendar_dom_selector, options);
			calendar.init();

			minutesElement = document.querySelector(
				'.vanilla-calendar-time__minutes > input'
			) as HTMLInputElement;

			// Add event listener to the minutes element
			minutesElement.addEventListener('blur', () => {
				// Update the value using Svelte's reactivity
				minutesElement!.value = closestQuarterHour(+minutesElement!.value);
			});
		} catch (error) {
			console.error(error);
		}
	};

	onMount(() => {
		initCalendar();
	});

	const normalDesignLabel = 'block text-sm font-medium leading-6 text-gray-900';
	const floatDesignLabel =
		'absolute inline-block px-1 text-xs font-medium text-gray-900 bg-white -top-2 left-2';

	const normalDesignInput =
		'mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
	const floatDesignInput =
		'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
</script>

<div class="relative flex flex-col h-16 rounded-sm lg:pb-0">
	<div class="relative max-w-[150px] lg:max-w-[135px]" id={`${id_dom}wrapper`}>
		<label for="name" class={design === 'normal' ? normalDesignLabel : floatDesignLabel}
			>{labelTitle} *</label
		>
		<input
			type="text"
			name={id_dom}
			id={id_dom}
			readonly
			value={`${text_date?.join(',')} ${fixMinutes(text_time)}`}
			on:click={() => (showModal = true)}
			class={design === 'normal' ? normalDesignInput : floatDesignInput}
		/>
		<Modal
			bind:showModal
			runActionAfterClose={() => {
				// re-init
				initCalendar();
			}}
		>
			<div id={calendar_dom} />
			<div class="flex justify-end w-full mt-2">
				<button
					type="button"
					on:click={() => {
						if (shadow_text_date) {
							text_date = shadow_text_date;
						}

						if (shadow_text_time) {
							text_time = fixMinutes(shadow_text_time);
						}

						showModal = false;
					}}
					class="inline-flex items-center gap-x-1.5 rounded-md bg-green-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
				>
					<svg class="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clip-rule="evenodd"
						/>
					</svg>
					Confirm
				</button>
			</div>
		</Modal>
	</div>
</div>
