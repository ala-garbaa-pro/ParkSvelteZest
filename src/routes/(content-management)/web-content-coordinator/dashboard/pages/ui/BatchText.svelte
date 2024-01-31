<script lang="ts">
	import { selectedContent } from '$lib/stores/pageStore';
</script>
<hr />
<h1>{$selectedContent.key}</h1>

<textarea name="inputData" id="inputData" cols="30" rows="20"></textarea>

<button>Execute</button>