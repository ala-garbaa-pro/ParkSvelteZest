export const submitFormWithXHR = (form: HTMLFormElement) => {
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);

    // xhr.onreadystatechange = () => {
    // 	if (xhr.readyState === XMLHttpRequest.DONE) {
    // 		if (xhr.status === 200) {
    // 			// Handle the successful response here
    // 			toast.success('Opération terminée avec succès');
    // 		} else {
    // 			// Handle errors here
    // 			toast.error("L'opération a échoué");
    // 		}
    // 	}
    // };

    // Send the form data
    xhr.send(formData);
};
