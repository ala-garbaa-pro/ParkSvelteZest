export const usernamePattern = {
	regex: /^[a-zA-Z0-9]{12,}$/,
	pattern: '',
	error: new Error("Please enter a username with at least 12 characters, including lowercase and uppercase letters and numbers without spaces.")
  };
  usernamePattern.pattern = usernamePattern.regex.toString().slice(1, -1);
  