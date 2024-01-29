import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { wccDashboardPath, wccPath } from '$lib/constants';

type Props = {
	locals: App.Locals,
	url: URL
}

export const load: PageServerLoad = async ({ locals: { pb, user }, url }: Props) => {
	console.log(`🟩 /web-content-coordinator/+layout.server.ts -> load`);

	// console.log(url.pathname);

	if (user) {
		const isValid = pb.authStore.isValid;
		// console.log("🚀 ~ constload:PageServerLoad= ~ isValid:", isValid)
		const verified = user.verified;
		// console.log("🚀 ~ constload:PageServerLoad= ~ verified:", verified)


		if (!isValid || !verified) {
			if (url.pathname !== wccPath) {
				throw redirect(303, wccPath);
			}
		} else {
			if (url.pathname === wccPath) {
				throw redirect(303, wccDashboardPath);
			}

		}
	}
};

