<div class="py-10">
	<header>
		<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<slot name="title"
				><h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900">
					Dashboard
				</h1></slot
			>
		</div>
	</header>
	<main>
		<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
			<!-- Your content -->
			<slot />
		</div>
	</main>
</div>
