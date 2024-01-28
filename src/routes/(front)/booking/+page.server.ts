import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
    const ad = url.searchParams.get('ad');
    const at = url.searchParams.get('at');
    const rd = url.searchParams.get('rd');
    const rt = url.searchParams.get('rt');

    return { ad, at, rd, rt };
};

