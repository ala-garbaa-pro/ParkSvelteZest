import { fail } from "@sveltejs/kit";
import { validateLoginForm } from "../lib/validateLoginForm";

type LoginServerActionContext = {
	request: Request;
	locals: App.Locals;
};

export const loginServerAction = async ({
	request,
	locals: { pb }
}: LoginServerActionContext) => {
	console.log(`🟩 Inside loginServerAction`);


	// Destructure values from the validated login form request
	const { username, password, isFormValid } = await validateLoginForm({ request });
	console.log("🚀 ~ username, password, isFormValid:", username, password, isFormValid);

	// Perform additional security check in case of potential injection or hacking attempts on both the frontend and backend
	if (!isFormValid) {
		return fail(400, { message: 'Invalid username or password' });
	}

	try {
		// check the validation from the database
		const authData = await pb.collection('users').authWithPassword(
			username,
			password,
		);
		console.log("🚀 ~ authData:", authData)

		// after the above you can also access the auth data from the authStore
		console.log(pb.authStore.isValid);
		console.log(pb.authStore.token);
		console.log(pb.authStore.model.id);

	} catch (error) {
		return fail(401, {
			message: 'Invalid username or password'
		});
	}



};
