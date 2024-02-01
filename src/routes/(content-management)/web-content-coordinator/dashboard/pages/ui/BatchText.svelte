<script lang="ts">
	import { selectedContent } from '$lib/stores/pageStore';
	import { batchUpdateTexts } from '../functions/batchUpdateTexts';

	let data: string;
	let response = '';
	let isLoading = false;
</script>

<hr />

<h1>{$selectedContent.key}</h1>

<textarea name="data" id="data" cols="30" rows="20" bind:value={data}></textarea>

<button
	on:click={async () => {
		if (data.length === 0 || isLoading) return;
		isLoading = true;
		response = await batchUpdateTexts({ parentContentID: $selectedContent.id, data });
		isLoading = false;
	}}>Execute</button
>

{#if response !== ''}
	<pre>
	{JSON.stringify(response, null, 2)}
	</pre>
{/if}
