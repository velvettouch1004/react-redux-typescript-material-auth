import validator from "validator";
import isEmpty from "is-empty";

interface LoginData {
  email: string;
  password: string;
}

export const LoginValidation = (data: LoginData) => {
  let errors: { email?: string; password?: string } = {};

  // Email validation
  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  // Return errors and validation status
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
