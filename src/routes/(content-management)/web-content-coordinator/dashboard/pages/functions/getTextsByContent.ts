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

    
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
