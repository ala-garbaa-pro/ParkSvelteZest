export const passwordPattern = {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{16,}$/,
    pattern: '',
    error: new Error("Please enter a password with at least 16 characters, including lowercase and uppercase letters and numbers.")
  };
  
  passwordPattern.pattern = passwordPattern.regex.toString().slice(1, -1);
  