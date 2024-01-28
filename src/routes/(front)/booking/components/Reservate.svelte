<script lang="ts">
	import { formatDateYYYY_MM_DD } from '$lib/utils/date/formatDateYYYY_MM_DD';
	import { getTime_HH_mm } from '$lib/utils/date/getTime_HH_mm';
	import CalendarDateTimeComponent from '$lib/ui/front/CalendarDateTimeComponent.svelte';
	import { countryListNameCode } from '$lib/utils/country/countryListNameCode';
	import { validateAndSanitizeDateAndTime } from '$lib/utils/date/validateAndSanitizeDateAndTime';

	// Props
	export let data;
	export let locale: any;
	export let disabledCalendarDates: any;

	const { ad, at, rd, rt } = data;

	// Flags
	let isExternDates = false;

	let init_date: string[] | undefined = [formatDateYYYY_MM_DD(new Date())];
	let init_time: string = getTime_HH_mm();

	type FormReservationDataType = {
		arrivalDate: string[] | undefined;
		arrivalTime: string;
		returnDate: string[] | undefined;
		returnTime: string;
		tarvelFor: 'leisure' | 'business';
		departureFlight: string;
		returnFlight: string;
		fullname: string;
		country: string;
		email: string;
		emailConfirm: string;
	};

	const formReservationData: FormReservationDataType = {
		arrivalDate: init_date,
		arrivalTime: init_time,
		returnDate: init_date,
		returnTime: init_time,
		tarvelFor: 'leisure',
		departureFlight: '',
		returnFlight: '',
		fullname: '',
		country: 'BE',
		email: '',
		emailConfirm: ''
	};

	// Function to validate and sanitize date and time values
	if (ad !== null && at !== null && rd !== null && rt !== null) {
		isExternDates = true;

		const sanitizedValues = validateAndSanitizeDateAndTime(ad, at, rd, rt);

		formReservationData.arrivalDate = [sanitizedValues.ad];
		formReservationData.arrivalTime = sanitizedValues.at;
		formReservationData.returnDate = [sanitizedValues.rd];
		formReservationData.returnTime = sanitizedValues.rt;
	}

	// Functions
	const cleanData = (formReservationData: FormReservationDataType) => {
		// Check type
		if (formReservationData.arrivalDate === undefined)
			return 'Please check formReservationData.arrivalDate is undefined!!!';
		if (formReservationData.returnDate === undefined)
			return 'Please check formReservationData.returnDate is undefined!!!';

		// Return as JSON object
		return {
			...formReservationData,
			arrivalDate: formReservationData.arrivalDate[0],
			returnDate: formReservationData.returnDate[0]
		};
	};
</script>

<div class="fixed right-0 p-4 bg-purple-100 top-24 rounded-xl">
	<h1>These informations will send to the server:</h1>
	<pre>{JSON.stringify(cleanData(formReservationData), null, 2)}</pre>
</div>

<div class="py-24 bg-white sm:py-16">
	<div class="px-6 mx-auto max-w-7xl lg:px-8">
		<div class="max-w-4xl mx-auto lg:mx-0">
			<!-- FORM ---------------------------------------- -->
			<div class="space-y-10">
				<!-- Travel Details::start -->
				<div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
					<div class="px-4 sm:px-0">
						<h2 class="text-base font-semibold leading-7 text-gray-900">Travel Details</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">
							This information will be used for logistical purposes, so please ensure accuracy.
						</p>
					</div>

					<div class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div class="px-4 py-6 sm:p-8">
							<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div class="flex sm:col-span-4">
									<CalendarDateTimeComponent
										{locale}
										{disabledCalendarDates}
										labelTitle="Arrival datetime"
										id_dom="arrival_datetime"
										bind:text_date={formReservationData.arrivalDate}
										bind:text_time={formReservationData.arrivalTime}
									/>
									<div class="w-4" />

									<CalendarDateTimeComponent
										{locale}
										{disabledCalendarDates}
										labelTitle="Return datetime"
										id_dom="return_datetime"
										bind:text_date={formReservationData.returnDate}
										bind:text_time={formReservationData.returnTime}
									/>
								</div>

								<div class="sm:col-span-3">
									<label
										for="departure-flight"
										class="block text-sm font-medium leading-6 text-gray-900"
										>Departure flight</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="departure-flight"
											id="departure-flight"
											placeholder="XYZ123"
											bind:value={formReservationData.departureFlight}
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-3">
									<label
										for="return-flight"
										class="block text-sm font-medium leading-6 text-gray-900">Return flight</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="return-flight"
											id="return-flight"
											placeholder="ZYX456"
											bind:value={formReservationData.returnFlight}
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="travel-for" class="block text-sm font-medium leading-6 text-gray-900"
										>Travel for *</label
									>
									<div class="mt-4">
										<div class="flex items-center">
											<span class="text-sm" id="annual-billing-label">
												<span
													class={`font-medium  ${
														formReservationData.tarvelFor !== 'business'
															? 'text-gray-900'
															: 'text-gray-400'
													}`}>Leisure</span
												>
											</span>
											<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
											<button
												id="travel-for"
												type="button"
												class="relative inline-flex flex-shrink-0 h-6 ml-3 transition-colors duration-200 ease-in-out bg-indigo-600 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
												role="switch"
												aria-checked="false"
												aria-labelledby="annual-billing-label"
												on:click={() => {
													if (formReservationData.tarvelFor === 'leisure') {
														formReservationData.tarvelFor = 'business';
													} else {
														formReservationData.tarvelFor = 'leisure';
													}
												}}
											>
												<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
												<span
													aria-hidden="true"
													class={`inline-block w-5 h-5 transition duration-200 ease-in-out transform ${
														formReservationData.tarvelFor === 'leisure'
															? 'translate-x-0'
															: 'translate-x-5'
													}  bg-white rounded-full shadow pointer-events-none ring-0`}
												/>
											</button>
											<span class="ml-3 text-sm" id="annual-billing-label">
												<span
													class={`font-medium  ${
														formReservationData.tarvelFor !== 'leisure'
															? 'text-gray-900'
															: 'text-gray-400'
													}`}>Business</span
												>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex my-10" />
				<!-- Travel Details::end -->

				<!-- Your information::start -->
				<div class="grid grid-cols-1 pt-8 gap-x-8 gap-y-8 md:grid-cols-3">
					<div class="px-4 sm:px-0">
						<h2 class="text-base font-semibold leading-7 text-gray-900">Your information</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">----------------------------</p>
					</div>

					<form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div class="px-4 py-6 sm:p-8">
							<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div class="sm:col-span-3">
									<label for="fullname" class="block text-sm font-medium leading-6 text-gray-900"
										>Fullname *</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="fullname"
											id="fullname"
											placeholder="e.g., John Doe"
											bind:value={formReservationData.fullname}
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="country" class="block text-sm font-medium leading-6 text-gray-900"
										>Country *</label
									>
									<div class="mt-2">
										<select
											id="country"
											name="country"
											bind:value={formReservationData.country}
											autocomplete="country-name"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:max-w-xs sm:text-sm sm:leading-6"
										>
											{#each countryListNameCode as countryItem}
												<option value={countryItem.code}>{countryItem.name}</option>
											{/each}
										</select>
									</div>
								</div>

								<div class="sm:col-span-4">
									<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
										>Email address</label
									>
									<div class="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											bind:value={formReservationData.email}
											placeholder="e.g., john.doe@email.com"
											autocomplete="email"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-4">
									<label
										for="confirm-email"
										class="block text-sm font-medium leading-6 text-gray-900"
										>Confirm email address</label
									>
									<div class="mt-2">
										<input
											id="confirm-email"
											name="confirm-email"
											type="email"
											bind:value={formReservationData.emailConfirm}
											placeholder="Re-enter, e.g., john.doe@email.com"
											autocomplete="email"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-4">
									<label for="phone" class="block text-sm font-medium leading-6 text-gray-900"
										>Phone number</label
									>
									<div class="mt-2">
										<input
											id="phone"
											name="phone"
											type="tel"
											placeholder="e.g., (555) 123-4567"
											autocomplete="tel"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<!-- Your information::end -->

				<div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
					<div class="px-4 sm:px-0" />
					<div class="mt-4 bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div class="flex items-center justify-end px-4 py-4 gap-x-6 sm:px-8">
							<button
								type="button"
								on:click={() => window.location.reload()}
								class="text-sm font-semibold leading-6 text-gray-900">Cancel</button
							>
							<button
								type="submit"
								class="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>Save</button
							>
						</div>
					</div>
				</div>

				<div class="grid grid-cols-1 pt-10 gap-x-8 gap-y-8 md:grid-cols-3">
					<div class="px-4 sm:px-0">
						<h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">
							Use a permanent address where you can receive mail.
						</p>
					</div>

					<form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div class="px-4 py-6 sm:p-8">
							<div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<div class="sm:col-span-3">
									<label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
										>First name</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autocomplete="given-name"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-3">
									<label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"
										>Last name</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autocomplete="family-name"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-4">
									<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
										>Email address</label
									>
									<div class="mt-2">
										<input
											id="email"
											name="email"
											type="email"
											autocomplete="email"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="col-span-full">
									<label
										for="street-address"
										class="block text-sm font-medium leading-6 text-gray-900">Street address</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="street-address"
											id="street-address"
											autocomplete="street-address"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-2 sm:col-start-1">
									<label for="city" class="block text-sm font-medium leading-6 text-gray-900"
										>City</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="city"
											id="city"
											autocomplete="address-level2"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-2">
									<label for="region" class="block text-sm font-medium leading-6 text-gray-900"
										>State / Province</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="region"
											id="region"
											autocomplete="address-level1"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>

								<div class="sm:col-span-2">
									<label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900"
										>ZIP / Postal code</label
									>
									<div class="mt-2">
										<input
											type="text"
											name="postal-code"
											id="postal-code"
											autocomplete="postal-code"
											class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							class="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
						>
							<button type="button" class="text-sm font-semibold leading-6 text-gray-900"
								>Cancel</button
							>
							<button
								type="submit"
								class="px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>Save</button
							>
						</div>
					</form>
				</div>

				<div class="grid grid-cols-1 pt-10 gap-x-8 gap-y-8 md:grid-cols-3">
					<div class="px-4 sm:px-0">
						<h2 class="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
						<p class="mt-1 text-sm leading-6 text-gray-600">
							We'll always let you know about important changes, but you pick what else you want to
							hear about.
						</p>
					</div>

					<form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
						<div class="px-4 py-6 sm:p-8">
							<div class="max-w-2xl space-y-10">
								<fieldset>
									<legend class="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
									<div class="mt-6 space-y-6">
										<div class="relative flex gap-x-3">
											<div class="flex items-center h-6">
												<input
													id="comments"
													name="comments"
													type="checkbox"
													class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
												/>
											</div>
											<div class="text-sm leading-6">
												<label for="comments" class="font-medium text-gray-900">Comments</label>
												<p class="text-gray-500">
													Get notified when someones posts a comment on a posting.
												</p>
											</div>
										</div>
										<div class="relative flex gap-x-3">
											<div class="flex items-center h-6">
												<input
													id="candidates"
													name="candidates"
													type="checkbox"
													class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
												/>
											</div>
											<div class="text-sm leading-6">
												<label for="candidates" class="font-medium text-gray-900">Candidates</label>
												<p class="text-gray-500">
													Get notified when a candidate applies for a job.
												</p>
											</div>
										</div>
										<div class="relative flex gap-x-3">
											<div class="flex items-center h-6">
												<input
													id="offers"
													name="offers"
													type="checkbox"
													class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
												/>
											</div>
											<div class="text-sm leading-6">
												<label for="offers" class="font-medium text-gray-900">Offers</label>
												<p class="text-gray-500">
													Get notified when a candidate accepts or rejects an offer.
												</p>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset>
									<legend class="text-sm font-semibold leading-6 text-gray-900"
										>Push Notifications</legend
									>
									<p class="mt-1 text-sm leading-6 text-gray-600">
										These are delivered via SMS to your mobile phone.
									</p>
									<div class="mt-6 space-y-6">
										<div class="flex items-center gap-x-3">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
											/>
											<label
												for="push-everything"
												class="block text-sm font-medium leading-6 text-gray-900">Everything</label
											>
										</div>
										<div class="flex items-center gap-x-3">
											<input
												id="push-email"
												name="push-notifications"
												type="radio"
												class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
											/>
											<label
												for="push-email"
												class="block text-sm font-medium leading-6 text-gray-900"
												>Same as email</label
											>
										</div>
										<div class="flex items-center gap-x-3">
											<input
												id="push-nothing"
												name="push-notifications"
												type="radio"
												class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-600"
											/>
											<label
												for="push-nothing"
												class="block text-sm font-medium leading-6 text-gray-900"
												>No push notifications</label
											>
										</div>
									</div>
								</fieldset>
							</div>
						</div>
						<div
							class="flex items-center justify-end px-4 py-4 border-t gap-x-6 border-gray-900/10 sm:px-8"
						>
							<button type="button" class="text-sm font-semibold leading-6 text-gray-900"
								>Cancel</button
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
		</div>
	</div>
</div>
