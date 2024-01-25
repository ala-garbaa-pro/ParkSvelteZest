<script lang="ts">
	import { t, locale } from '$lib/translations';
</script>

<main>
	{$locale}
	<br />
	<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
		Aeropark1000 <br />
		{$t('home.brussels_zaventem')}
	</h1>
	<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
		{$t('home.parking_description')}
	</p>
</main>
