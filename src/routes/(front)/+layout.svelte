<script>
	// Basic styles
	import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';

	// Additional styles
	import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';
	import '@uvarov.frontend/vanilla-calendar/build/themes/dark.min.css';
	import FrontMenuComponent from '$lib/ui/front/FrontMenuComponent.svelte';
	import FooterComponent from '$lib/ui/front/FooterComponent.svelte';

</script>

<FrontMenuComponent />

<div class="relative z-0 px-4 pt-24">
	<slot />
</div>

<FooterComponent />