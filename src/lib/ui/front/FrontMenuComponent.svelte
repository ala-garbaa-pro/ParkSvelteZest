<script>
	import { t, locales, locale } from '$lib/translations';
	import { goto } from '$app/navigation';
	import LogoComponent from '$lib/ui/common/LogoComponent.svelte';
	import MarkLogoComponent from '$lib/ui/common/MarkLogoComponent.svelte';

	import { page } from '$app/stores';
	import { parkingContactList } from './parkingContactList';
	$: ({ route } = $page.data);

	let isLanguageMenuOpen = false;
	let isLanguageMobileMenuOpen = false;

	function toggleLanguageMenu() {
		isLanguageMenuOpen = !isLanguageMenuOpen;
	}

	function toggleLanguageMobileMenu() {
		isLanguageMobileMenuOpen = !isLanguageMobileMenuOpen;
	}

	let isMobileMenuOpen = false;

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	const languagesList = ['English', 'Français'];
</script>

<header class="fixed z-10 w-screen bg-white/95 backdrop-blur-sm">
	<nav class="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href={`/?lang=${$locale}`} class="-m-1.5 p-1.5 mr-1">
				<span class="sr-only">Aeropark1000</span>
				<LogoComponent className="h-8 w-auto" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={() => toggleMobileMenu()}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-6 h-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">

			<a
				href={parkingContactList[0].href}
				rel="noopener noreferrer"
				target="_blank"
				class="text-sm font-semibold leading-6 text-gray-900 hover:underline"
				>{parkingContactList[0].title}</a
			>

			<a
				href={parkingContactList[1].href}
				rel="noopener noreferrer"
				target="_blank"
				class="text-sm font-semibold leading-6 text-gray-900 hover:underline"
				>{parkingContactList[1].title}</a
			>

			<a
				href={parkingContactList[2].href}
				rel="noopener noreferrer"
				target="_blank"
				class="text-sm font-semibold leading-6 text-gray-900 hover:underline"
				>{parkingContactList[2].title}</a
			>

			<div class="relative">
				<button
					type="button"
					class="flex items-center text-sm font-semibold leading-6 text-gray-900 gap-x-1"
					aria-expanded={isLanguageMenuOpen}
					on:click={() => toggleLanguageMenu()}
				>
					{$t(`menu.language`)}
					<svg
						class="flex-none w-5 h-5 text-gray-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>

				<!--
            'Company' flyout menu, show/hide based on flyout menu state.
  
            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
				<div
					class={`transition absolute z-10 w-56 p-2 mt-3 bg-white shadow-lg -left-8 top-full rounded-xl ring-1 ring-gray-900/5 ${
						isLanguageMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
					}`}
				>
					{#each $locales as lc}
						<button
							on:click={() => {
								goto(`${route}?lang=${lc}`).then(() => {
									isLanguageMenuOpen = false;
								});
							}}
							class={`${
								lc === $locale ? 'bg-gray-300/30' : ''
							} block w-full px-3 py-2 text-sm font-semibold leading-6 text-gray-900 rounded-lg hover:bg-gray-50`}
							>{$t(`lang.${lc}`)}</button
						>
					{/each}
				</div>
			</div>
		</div>
		{#if isLanguageMenuOpen}
			<button
				on:click={() => {
					isLanguageMenuOpen = false;
				}}
				class="absolute top-0 left-0 w-screen h-screen bg-slate-900/50"
			/>
		{/if}
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href={`/booking?lang=${$locale}`} class="text-sm font-semibold leading-6 text-gray-900"
				>{$t('menu.booking')} <span aria-hidden="true">&rarr;</span></a
			>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class="lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<button
			on:click={() => (isMobileMenuOpen = false)}
			class="fixed inset-0 z-10 bg-black bg-opacity-50"
			class:hidden={!isMobileMenuOpen}
		/>
		<div
			class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto transition-transform duration-300 ease-in-out transform bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			class:translate-x-0={isMobileMenuOpen}
			class:translate-x-full={!isMobileMenuOpen}
		>
			<div class="flex items-center justify-between">
				<a href={`/?lang=${$locale}`} class="-m-1.5 p-1.5">
					<span class="sr-only">Aeropark1000</span>
					<MarkLogoComponent className="h-10 w-auto" />
				</a>
				<button
					type="button"
					class="-m-2.5 rounded-md p-2.5 text-gray-700"
					on:click={() => toggleMobileMenu()}
				>
					<span class="sr-only">Close menu</span>
					<svg
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flow-root mt-6">
				<div class="-my-6 divide-y divide-gray-500/10">
					<div class="py-6 space-y-2">
						{#each parkingContactList as parkingContactItem}
							<a
								href={parkingContactItem.href}
								rel="noopener noreferrer"
								target="_blank"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>{parkingContactItem.title}</a
							>
						{/each}

						<div class="-mx-3">
							<button
								type="button"
								class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50"
								aria-controls="disclosure-2"
								aria-expanded={isLanguageMobileMenuOpen}
								on:click={() => toggleLanguageMobileMenu()}
							>
								{$t(`menu.language`)}
								<!--
                    Expand/collapse icon, toggle classes based on menu open state.
  
                    Open: "rotate-180", Closed: ""
                  -->
								<svg
									class={`transition flex-none w-5 h-5 ${
										isLanguageMobileMenuOpen ? 'rotate-180' : ''
									}`}
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
							<!-- 'Company' sub-menu, show/hide based on menu state. -->
							<div
								class={`transition mt-2 space-y-2 ${
									isLanguageMobileMenuOpen
										? 'block ease-out duration-300 transform translate-y-0 opacity-100'
										: 'hidden ease-in duration-300 transform translate-y-2 opacity-0'
								}`}
								id="disclosure-2"
							>
								{#each languagesList as language}
									<a
										href={`/?lang=${$locale}`}
										class="block py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
										>{language}</a
									>
								{/each}
							</div>
						</div>
					</div>
					<div class="py-6">
						<a
							href={`/booking?lang=${$locale}`}
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							>{$t('menu.booking')}</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
