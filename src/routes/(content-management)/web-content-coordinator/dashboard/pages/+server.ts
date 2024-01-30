import { doSearchPageByNameServerAction } from "./actions/doSearchPageByNameServerAction";
import { getPageContentsByIDServerAction } from "./actions/getPageContentsByIDServerAction";
import { getTextsByContentServerAction } from "./actions/getTextsByContentServerAction";


type Props = {
    locals: App.Locals,
    url: URL
    request: Request
}
export const POST = async ({ request, locals: { pba } }: Props) => {
    console.log(`🟩 /web-content-coordinator/dashboard/pages/actions/searchPageByName.ts`);

    const requestBody = await request.json();


    switch (requestBody.action) {
        case "doSearchPageByName":
            return doSearchPageByNameServerAction({ pageName: requestBody.pageName, pba })

        case "getPageContentsByID":
            return getPageContentsByIDServerAction({ pageID: requestBody.pageID, pba })
        case "getTextsByContent":
            return getTextsByContentServerAction({ contentID: requestBody.contentID, pba })
    }

};