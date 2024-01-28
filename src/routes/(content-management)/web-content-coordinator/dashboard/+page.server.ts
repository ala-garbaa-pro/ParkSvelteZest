
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pba } }) => {
	const pages = await pba.collection('pages').getFullList({
		sort: '-created',
	});

	return { pages }

};
