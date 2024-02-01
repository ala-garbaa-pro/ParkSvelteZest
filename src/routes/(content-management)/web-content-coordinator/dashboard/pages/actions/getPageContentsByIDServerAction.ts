import type { Content } from "$lib/types/content.type";
import { fail, json } from "@sveltejs/kit";


type Props = {
    pageID: string
    pba: App.Locals["pba"]
}

export const getPageContentsByIDServerAction = async ({ pageID, pba }: Props) => {
    let pagesContentsList: Content[]

    try {
        // If there is a search query, filter the pages based on it
        let filter = '';
        if (pageID) {
            // If pageID is provided, filter by name contains the pageID term
            filter = `parentPage='${pageID}'`;
        }
        // console.log("🚀 ~ filter:", filter)


        pagesContentsList = await pba.collection('contents').getFullList({
            sort: '-updated',
            filter,
        });
        // console.log("🚀 ~ pagesContentsList:", pagesContentsList)

        // Update the store with the new pages data
    } catch (error) {
        console.log("🚀 ~ error:", error)
        return fail(401, {
            message: 'Invalid search operation'
        });
    }

    return json(pagesContentsList);
}