// FILE: +page.server.ts

import type { Page } from '$lib/types/page.type';
import type { PageServerLoad } from './$types';

type Props = {
	locals: App.Locals,
}

export const load: PageServerLoad = async ({ locals: { pba } }: Props) => {
	console.log(`🟩 /web-content-coordinator/dashboard/+page.server.ts -> load`);

	// Fetch pages data from your API or database
	const pages: Page[] = await pba.collection('pages').getFullList({
		sort: '-created',
	});

	return { pages }; // Initialize search as an empty string

};
