import validator from "validator";
import isEmpty from "is-empty";

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password2: string;
}

export const RegisterValidation = (data: RegisterData) => {
  let errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    password2?: string;
  } = {};
  if (validator.isEmpty(data.firstName)) {
    errors.firstName = "FirstName field is required";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.lastName = "LastName field is required";
  }
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
  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Password2 is required";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords are not match!";
  }

  // Return errors and validation status
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
