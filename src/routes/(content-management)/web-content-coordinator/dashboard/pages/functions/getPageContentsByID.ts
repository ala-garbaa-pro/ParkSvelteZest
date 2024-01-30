import { wccPagesPath } from "$lib/constants";

type Props = {
    pageID: string
}

export const getPageContentsByID = async ({ pageID }: Props) => {
    try {
        const response = await fetch(`${wccPagesPath}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: "getPageContentsByID", pageID }),
        });

        if (response.ok) {
            const data = await response.json();

            return data
        } else {
            // Handle errors here
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
