<script lang="ts">
	import { onMount } from 'svelte';

	let faqs = [
		{
			question: 'Comment la surveillance est-elle assurée dans le parking ?',
			answer:
				'Le parking est surveillé 24/24 par des caméras et une personne présente sur place et notre « ROY » est toujours présent également.',
			isOpen: false
		},
		{
			question: "A quelle distance se situe de l'aéroport de Zaventem ?",
			answer:
				"Nous sommes à 3.8km du terminal de l'aéroport. Le temps de parcours est de 07 minutes",
			isOpen: false
		},
		{
			question: 'Le service de navettes est-il assuré 24/7 ?',
			answer: 'Oui, la navette est gratuite à aller et au retour.',
			isOpen: false
		},
		{
			question: 'Comment le retour à Zaventem est-il organisé ?',
			answer:
				"Il vous suffit d'indiquer le numéro de vol retour. La date et l'heure exacte de l'atterrissage sur votre formulaire de réservation. Nous vous donnerons une carte visite avec numéro de téléphone ou vous pouvez appeler au moment que vous arrivez et récupérer votre bagages et que vous avez passé la douane. Nous viendrons vous chercher quelque minute après dans le même endroit où on vous déposer à aller (station de bus blockC (etage 0)",
			isOpen: false
		},
		{
			question: 'Comment puis-je annuler ma réservation ?',
			answer:
				'Vous pouvez annuler gratuitement votre réservation sur notre site www.aeropark1000.com ou en nous envoyant un mail.',
			isOpen: false
		},
		{
			question: 'Comment puis-je modifier ma réservation ?',
			answer: 'Si vous souhaitez modifier, vous pouvez le faire directement sur notre site.',
			isOpen: false
		},
		{
			question: "Combien de temps à l'avance dois-je réserver ?",
			answer: 'Vous pouvez réserver à tout moment sur notre site même 2 heures avant votre vol.',
			isOpen: false
		},
		{
			question: 'Vais-je recevoir un mail de confirmation ?',
			answer:
				'Oui, nous vous enverrons un email de confirmation dès réception de votre réservation.',
			isOpen: false
		},
		{
			question: 'Quand et comment puis-je payer ?',
			answer: 'Vous payez en liquide quand vous arrivez au parking pour déposer votre véhicule.',
			isOpen: false
		}
	];

	function toggle(index: Number) {
		faqs = faqs.map((faq, i) => (i === index ? { ...faq, isOpen: !faq.isOpen } : faq));
	}

	onMount(() => {
		// Additional initialization or data fetching logic can be placed here
	});
</script>

<dl class="mt-4 space-y-6 divide-y divide-gray-900/10">
	{#each faqs as { question, answer, isOpen }, index (index)}
		<div class="pt-6">
			<dt>
				<button
					type="button"
					class="flex items-start justify-between w-full text-left text-gray-900"
					aria-controls={`faq-${index}`}
					aria-expanded={isOpen}
					on:click={() => toggle(index)}
				>
					<span class="text-base font-semibold leading-7">{question}</span>
					<span class="flex items-center ml-6 h-7">
						<svg
							class="{isOpen ? 'hidden' : ''} w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
						</svg>
						<svg
							class="{isOpen ? '' : 'hidden'} w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
						</svg>
					</span>
				</button>
			</dt>
			{#if isOpen}
				<dd class="pr-12 mt-2" id={`faq-${index}`}>
					<p class="text-base leading-7 text-gray-600">{answer}</p>
				</dd>
			{/if}
		</div>
	{/each}
</dl>

<style>
	/* Add Tailwind CSS classes here if needed */
</style>
