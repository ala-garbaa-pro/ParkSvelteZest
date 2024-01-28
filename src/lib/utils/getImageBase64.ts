
async function getImageBase64(url: string): Promise<string> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch image from ${url}`);
        }

        const imageBuffer = await response.arrayBuffer();
        const base64Image = Buffer.from(imageBuffer).toString('base64');

        return base64Image;
    } catch (error) {
        console.error(error);
        throw error; // Propagate the error
    }
}

export default getImageBase64;
