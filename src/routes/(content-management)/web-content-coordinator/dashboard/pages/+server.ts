// import { pages } from "$lib/stores/pageStore";
// import type { Page } from "$lib/types/page.type";
// import { fail } from "@sveltejs/kit";

import type { Page } from '$lib/types/page.type';
import { fail, json } from '@sveltejs/kit';



type Props = {
    locals: App.Locals,
    url: URL
    request: Request
}
export const POST = async ({ request, locals: { pba } }: Props) => {
    console.log(`🟩 /web-content-coordinator/dashboard/pages/actions/searchPageByName.ts`);

    const requestBody = await request.json();

    const { pageName } = requestBody;

    let pagesList: Page[]

    if (!pageName || pageName.trim() === "") {
        // Fetch pages data from your API or database
        pagesList = await pba.collection('pages').getFullList({
            sort: '-created',
        });
    } else {
        try {
            // If there is a search query, filter the pages based on it
            let filter = '';
            if (pageName) {
                // If pageName is provided, filter by name contains the pageName term
                filter = `name~"${pageName}"`;
            }
            console.log("🚀 ~ filter:", filter)


            pagesList = await pba.collection('pages').getFullList({
                sort: '-updated',
                filter,
            });
            console.log("🚀 ~ pagesList:", pagesList)

            // Update the store with the new pages data
        } catch (error) {
            console.log("🚀 ~ error:", error)
            return fail(401, {
                message: 'Invalid search operation'
            });
        }
    }
    return json(pagesList);
};