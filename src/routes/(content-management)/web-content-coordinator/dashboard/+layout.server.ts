
import { PB_URL } from '$env/static/private';
import getImageBase64 from '$lib/utils/getImageBase64';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pb, user } }) => {
	console.log(`🟩 /web-content-coordinator/dashboard/+page.server.ts -> load`);

	if (user) {
		const isValid = pb.authStore.isValid;
		console.log("🚀 ~ constload:PageServerLoad= ~ isValid:", isValid)
		const verified = user.verified;
		console.log("🚀 ~ constload:PageServerLoad= ~ verified:", verified)

		const imageUrl = `${PB_URL}/api/files/${user.collectionId}/${user.id}/${user.avatar}`;

		if (isValid && verified) {

			try {
				const base64Image = await getImageBase64(imageUrl);

				return {
					base64Image: `data:image/jpeg;base64,${base64Image}`
				}

				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (error: any) {
				return {
					status: 500,
					error: new Error(`Failed to load image: ${error.message}`)
				};
			}

		}
	}

};

// export const actions = {
// 	login: loginServerAction,
// };
