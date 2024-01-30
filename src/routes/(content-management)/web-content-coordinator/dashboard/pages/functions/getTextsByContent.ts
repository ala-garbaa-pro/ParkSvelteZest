import { wccPagesPath } from "$lib/constants";

type Props = {
    contentID: string
}

export const getTextsByContent = async ({ contentID }: Props) => {
    try {
        const response = await fetch(`${wccPagesPath}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: "getTextsByContent", contentID }),
        });

        if (response.ok) {
            const data = await response.json();

            return data
        } else {
            // Handle errors here
            console.error('Error:', response.statusText);
        }
    } catch (error) {
    }
};
