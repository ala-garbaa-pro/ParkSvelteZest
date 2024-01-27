<script lang="ts">
	import LogoComponent from '../common/LogoComponent.svelte';
	import { parkingContactList } from './parkingContactList';
</script>

<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<LogoComponent className="h-8 w-auto" />
			<nav
				class="mt-10 -mb-6 md:mt-0 columns-2 sm:flex sm:justify-center sm:space-x-12"
				aria-label="Footer"
			>
				<div class="pb-6">
					<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
				</div>
				<div class="pb-6">
					<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
				</div>
				<div class="pb-6">
					<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
				</div>
				<div class="pb-6">
					<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
				</div>
				<div class="pb-6">
					<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Accessibility</a>
				</div>
				<div class="pb-6">
					<a href="/" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
				</div>
			</nav>
		</div>
		<div
			class="flex flex-col items-center pt-8 mt-16 space-y-4 border-t border-gray-900/10 sm:mt-20 lg:mt-24 md:flex-row lg:justify-between"
		>
			<span class="px-4 mt-4 text-sm font-bold leading-6 text-gray-900 no-underline hover:underline"
				>TVA. BE0680 514 980</span
			>

			{#each parkingContactList as parkingContactItem}
				<a
					href={parkingContactItem.href}
					rel="noopener noreferrer"
					target="_blank"
					class="px-4 text-sm font-semibold leading-6 text-gray-900 hover:underline"
					>{parkingContactItem.title}</a
				>
			{/each}
		</div>
		<div class="pt-8 mt-8 border-t border-gray-900/10 md:flex md:items-center md:justify-between">
			<div class="flex space-x-6 md:order-2">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/aeropark1000/"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">LinkedIn</span>
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 448 512"
						height="1.5em"
						width="1.5em"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
						/></svg
					>
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/aeropark1000"
					class="text-gray-400 hover:text-gray-500"
				>
					<span class="sr-only">Twitter</span>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
						/>
					</svg>
				</a>
			</div>
			<p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
				&copy; Aeropark1000 © 2017 - {new Date().getFullYear()} Made By
				<a
					target="_blank"
					rel="noopener noreferrer"
					class="font-bold text-blue-500"
					href="https://www.develiorate.com/">Develiorate</a
				>, Inc. All rights reserved.
			</p>
		</div>
	</div>
</footer>
