import { wccPagesPath } from "$lib/constants";

type Props = {
    contentID: string
}

export const getTextsByContent = async ({ contentID }: Props) => {
    try {
       
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
