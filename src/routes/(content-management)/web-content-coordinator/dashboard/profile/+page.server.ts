
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pb, user } }) => {
	console.log(`🟩 /web-content-coordinator/dashboard/profile/+page.server.ts -> load`);

	if (user) {
		const isValid = pb.authStore.isValid;
		console.log("🚀 ~ constload:PageServerLoad= ~ isValid:", isValid)
		const verified = user.verified;
		console.log("🚀 ~ constload:PageServerLoad= ~ verified:", verified)

		if (isValid && verified) {
			return {
				user
			}
		}


	}
};

// export const actions = {
// 	login: loginServerAction,
// };
