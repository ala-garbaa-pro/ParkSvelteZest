import type { Text } from "$lib/types/text.type";
import { fail, json } from "@sveltejs/kit";


type Props = {
    contentID: string
    pba: App.Locals["pba"]
}

export const getTextsByContentServerAction = async ({ contentID, pba }: Props) => {
    // console.log("--------------contentID-----------");
    // console.log(contentID);
    // console.log("--------------contentID-----------");
    
    let pagesContentsTextsList: Text[]

    try {
        // If there is a search query, filter the pages based on it
        let filter = '';
        if (contentID) {
            // If contentID is provided, filter by name contains the contentID term
            filter = `parentContent='${contentID}'`;
        }
        // console.log("🚀 ~ filter:", filter)


        pagesContentsTextsList = await pba.collection('texts').getFullList({
            sort: '-updated',
            filter,
        });
        // console.log("🚀 ~ pagesContentsTextsList:", pagesContentsTextsList)

        // Update the store with the new pages data
    } catch (error) {
        console.log("🚀 ~ error:", error)
        return fail(401, {
            message: 'Invalid search operation'
        });
    }

    return json(pagesContentsTextsList);
}