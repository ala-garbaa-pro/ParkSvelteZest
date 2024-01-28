<script lang="ts">
	import { wccProfilePath } from '$lib/constants';
	import MainLayout from '../ui/MainLayout.svelte';

	export let data;

	const { name, email, id } = data.user;
	const { base64Image } = data;
</script>

<MainLayout>
	<h1 slot="title" class="text-2xl font-bold leading-tight tracking-tight text-gray-900">
		Hello, {name}
	</h1>

	<div class="pt-0 mx-auto max-w-7xl lg:flex lg:gap-x-16 lg:px-8">
		<aside
			class="flex py-2 overflow-x-auto border-b border-gray-900/5 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20"
		>
			<nav class="flex-none px-4 sm:px-6 lg:px-0">
				<ul role="list" class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
					<li>
						<!-- Current: "bg-gray-50 text-indigo-600", Default: "text-gray-700 hover:text-indigo-600 hover:bg-gray-50" -->
						<a
							href={wccProfilePath}
							class="flex py-2 pl-2 pr-3 text-sm font-semibold leading-6 text-indigo-600 rounded-md bg-gray-50 group gap-x-3"
						>
							<svg
								class="w-6 h-6 text-indigo-600 shrink-0"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							General
						</a>
					</li>
				</ul>
			</nav>
		</aside>

		<main class="px-4 py-8 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
			<div class="max-w-2xl mx-auto space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
				<div>
					<div class="flex items-center justify-center w-full">
						<img
							class="flex-none object-cover bg-gray-800 rounded-lg w-36 h-36"
							src={base64Image}
							alt={`${name} profile`}
						/>
					</div>

					<h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
					<p class="mt-1 text-sm leading-6 text-gray-500">Personal Information.</p>

					<dl
						class="mt-6 space-y-6 text-sm leading-6 border-t border-gray-200 divide-y divide-gray-100"
					>
						<div class="pt-6 sm:flex">
							<dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">ID</dt>
							<dd class="flex justify-between mt-1 gap-x-6 sm:mt-0 sm:flex-auto">
								<div class="text-gray-900">#{id}</div>
							</dd>
						</div>
						<div class="pt-6 sm:flex">
							<dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
							<dd class="flex justify-between mt-1 gap-x-6 sm:mt-0 sm:flex-auto">
								<div class="text-gray-900">{name}</div>
							</dd>
						</div>
						<div class="pt-6 sm:flex">
							<dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
							<dd class="flex justify-between mt-1 gap-x-6 sm:mt-0 sm:flex-auto">
								<div class="text-gray-900">{email}</div>
							</dd>
						</div>
						<div class="pt-6 sm:flex">
							<dt class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Title</dt>
							<dd class="flex justify-between mt-1 gap-x-6 sm:mt-0 sm:flex-auto">
								<div class="text-gray-900">Web Content Coordinator</div>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</main>
	</div>
</MainLayout>
