import { passwordPattern } from '../validation/passwordPattern';
import { usernamePattern } from '../validation/usernamePattern';

//
const DEBUG = false;
export type validateLoginFormProps = {
	request: Request;
};
export const validateLoginForm = async ({ request }: validateLoginFormProps) => {
	const loginFormData = await request.formData();

	const username = loginFormData.get('username')?.toString() ?? '';
	const password = loginFormData.get('password')?.toString() ?? '';

	let isFormValid = true;

	if (!username) {
		DEBUG &&
			console.log('🚀 ~ file: validateLoginForm.ts:16 ~ validateLoginForm ~ !username:', !username);

		isFormValid = false;
	}

	if (!usernamePattern.regex.test(username)) {
		DEBUG &&
			console.log(
				'🚀 ~ file: validateLoginForm.ts:22 ~ validateLoginForm ~ !usernamePattern.regex.test(username):',
				!usernamePattern.regex.test(username)
			);
		isFormValid = false;
	}

	if (!password) {
		DEBUG &&
			console.log('🚀 ~ file: validateLoginForm.ts:27 ~ validateLoginForm ~ !password:', !password);
		isFormValid = false;
	}

	if (!passwordPattern.regex.test(password)) {
		DEBUG &&
			console.log('🚀 ~ file: validateLoginForm.ts:32 ~ validateLoginForm ~ password:', password);
		DEBUG &&
			console.log(
				'🚀 ~ file: validateLoginForm.ts:32 ~ validateLoginForm ~ !passwordPattern.regex.test(password):',
				!passwordPattern.regex.test(password)
			);
		isFormValid = false;
	}

	return { username, password, isFormValid };
};
