<script lang="ts">
	import loginBackground from '$lib/cached/web-content-coordinator/login_background.jpg';
	import LogoComponent from '$lib/ui/common/LogoComponent.svelte';
	import type { ActionData } from './$types';
	import { passwordPattern } from './validation/passwordPattern';
	import { usernamePattern } from './validation/usernamePattern';

	export let form: ActionData;
	let username: string;
	let touchedUsernameinput = false;
	let bluredUsernameinput = false;

	let password: string;
	let touchedPasswordinput = false;
	let bluredPasswordinput = false;
</script>

<div class="flex min-h-full">
	<div
		class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="w-full max-w-sm mx-auto lg:w-96">
			<div>
				<LogoComponent className="w-64" />
				<h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
					Content Coordinator Login
				</h2>
			</div>

			<div class="mt-10">
				<div>
					<form method="POST" class="space-y-6" action="?/login">
						<div>
							<label for="username" class="block text-sm font-medium leading-6 text-gray-900"
								>Username</label
							>
							<div class="mt-2">
								<input
									id="username"
									name="username"
									type="username"
									bind:value={username}
									autocomplete="username"
									pattern={usernamePattern.pattern}
									on:input={() => (touchedUsernameinput = true)}
									on:blur={() => (bluredUsernameinput = true)}
									required
									class="pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{#if touchedUsernameinput && bluredUsernameinput && !usernamePattern.regex.test(username)}
								<div class="text-red-500">
									{usernamePattern.error.message}
								</div>
							{/if}
						</div>

						<div>
							<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
								>Password</label
							>
							<div class="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									bind:value={password}
									pattern={passwordPattern.pattern}
									on:input={() => (touchedPasswordinput = true)}
									on:blur={() => (bluredPasswordinput = true)}
									autocomplete="current-password"
									required
									class="pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{#if touchedPasswordinput && bluredPasswordinput && !passwordPattern.regex.test(password)}
								<div class="text-red-500">
									{passwordPattern.error.message}
								</div>
							{/if}
						</div>

						{#if form?.message}
							<p class="text-red-500">{form.message}</p>
						{/if}

						<div>
							<button
								type="submit"
								class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>Sign in</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="relative flex-1 hidden w-0 lg:block">
		<img
			class="absolute inset-0 object-cover w-full h-full"
			src={loginBackground}
			alt="Log In Background"
		/>
	</div>
</div>
