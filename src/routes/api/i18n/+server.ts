

type Props = {
    locals: App.Locals,
    url: URL
    request: Request
}
export const POST = async ({ request, locals: { pba } }: Props) => {
    console.log(`🟩 /web-content-coordinator/dashboard/pages/actions/searchPageByName.ts`);

    const requestBody = await request.json();


    switch (requestBody.action) {
        case "getPageI18n":
            return getPageI18nServerAction({ local: requestBody.local, parentContentKey: requestBody.parentContentKey, pba })


    }

};