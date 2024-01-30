import type { Page } from "$lib/types/page.type";
import { fail, json } from "@sveltejs/kit";


type Props = {
    local: string
    parentContentKey: string
    pba: App.Locals["pba"]
}

export const getPageI18n = async ({ local, parentContentKey, pba }: Props) => {
    let pagesList: Page[]


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

    return json(pagesList);
}