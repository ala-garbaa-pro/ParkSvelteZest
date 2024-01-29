const DEBUG = false;
export type ValidateInputSearchFormProps = {
	request: Request;
	inputName: string;
};
export const validateInputSearchForm = async ({ request, inputName }: ValidateInputSearchFormProps) => {
	const loginFormData = await request.formData();

	const search = loginFormData.get(inputName)?.toString() ?? '';

	let isFormValid = true;


	if (!search || search.trim() === "") {
		DEBUG &&
			console.log(
				'🚀 ~ file: validateInputSearchForm.ts:22  ~ search === ""');
		isFormValid = false;
	}

	return { search, isFormValid };
};
