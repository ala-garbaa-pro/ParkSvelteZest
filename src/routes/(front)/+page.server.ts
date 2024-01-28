import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    console.log(`🟩 /(front)/+page.server.ts -> load`);

    return { disabledCalendarDates: ['2023-11-28:2023-11-29', '2023-11-25'] };
};

export const actions = {
    reservate: () => {
        console.log("start reservate");
    },
};
