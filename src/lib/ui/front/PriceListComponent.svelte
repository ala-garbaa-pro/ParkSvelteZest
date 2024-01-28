<script lang="ts">
	// You can import any necessary Svelte or JavaScript modules here

	function generateRandomPrice() {
		return Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
	}

	let prices = Array.from({ length: 14 }, (_, index) => ({
		numberOfDays: index + 1,
		price: generateRandomPrice()
	}));
</script>

<div class="w-full overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th class="th">Number of Days</th>
				<th class="th">Price</th>
			</tr>
		</thead>
		<tbody>
			{#each prices as { numberOfDays, price }, index}
				<tr class:tr-even={index % 2 === 0} class="tr">
					<td class="td">{numberOfDays}</td>
					<td class="td">${price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/* You can customize the styles using Tailwind CSS classes */
	/* For simplicity, I'm using basic styles here */
	.table {
		@apply w-full bg-white border border-gray-200 divide-y divide-gray-200;
	}

	.th,
	.td {
		@apply p-2 text-left;
	}

	.th {
		@apply font-semibold;
	}

	.tr-even {
		@apply bg-gray-100;
	}

	.tr:hover {
		@apply bg-gray-200;
	}
</style>
