<script lang="ts">
	import { onMount } from "svelte";

	export let showModal: boolean;
	export let runActionAfterClose: () => void;

	let isInit = false

	let dialog: HTMLDialogElement;

	const closeTheDialog = () => {
		dialog.close();
		runActionAfterClose();
	};

	$: {
		if (dialog) {
			if (showModal) dialog.showModal();
			if (isInit && !showModal) closeTheDialog();

		}
	}

	onMount(()=>{
		isInit = true
	})
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => closeTheDialog()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header"
			><button
				id="close-modal"
				class="flex justify-end w-full hover:text-red-500"
				on:click={() => closeTheDialog()}
			>
				<svg
					stroke="currentColor"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 512 512"
					height="1.5em"
					width="1.5em"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill="none"
						stroke-miterlimit="10"
						stroke-width="32"
						d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
					/><path
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M320 320L192 192m0 128l128-128"
					/></svg
				>
			</button>
		</slot>
		<slot />
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
		opacity: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		opacity: 1;
	}

	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
