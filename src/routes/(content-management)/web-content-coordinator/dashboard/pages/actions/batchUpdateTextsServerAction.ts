import type { BatchUpdateTexts, BatchUpdateTextsResponse } from "$lib/types/batchUpdateTexts.type";
import { json } from "@sveltejs/kit";


type Props = {
    parentContentID: string
    data: string
    pba: App.Locals["pba"]
}

export const batchUpdateTextsServerAction = async ({ parentContentID, data, pba }: Props) => {
    const batchedTexts: BatchUpdateTexts[] = JSON.parse(data)

    if (data.length === 0) return null;

    const pagesContentsList: BatchUpdateTextsResponse[] = []


    for (const text of batchedTexts) {

        let currentTextExistsID = ""
        try {
            const currentText = await pba.collection('texts')
                .getFirstListItem(`parentContent='${parentContentID}' && lang='${text.lang}'`, { $autoCancel: false });
            currentTextExistsID = currentText.id
        } catch (error) {
            currentTextExistsID = ""
        }

        // console.log("🚀 ~ batchUpdateTextsServerAction ~ currentText:", currentText)
        let flagUpdated = ""
        if (currentTextExistsID !== "") {
            const responseUpdate = await pba.collection('texts').update(currentTextExistsID, { ...text, parentContent: parentContentID }, { $autoCancel: false });

            flagUpdated = `${responseUpdate && responseUpdate.id} was updated`

            // console.log("🚀 ~ batchUpdateTextsServerAction ~ responseUpdate:", responseUpdate)

        } else {
            const responseCreate = await pba.collection('texts').create({ ...text, parentContent: parentContentID }, { $autoCancel: false });

            flagUpdated = `${responseCreate && responseCreate.id} was created`

            // console.log("🚀 ~ batchUpdateTextsServerAction ~ responseCreate:", responseCreate)
        }

        pagesContentsList.push({ ...text, staus: flagUpdated })

        console.log(text.lang, flagUpdated);

    }



    return json(pagesContentsList);
}