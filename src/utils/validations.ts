const required = (value: string) => {
  return value != null && value === '' ? 'Required' : null;
}

const isEmail = (email: string) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return !regEx.test(email) ? "Invalid email address" : null;
}

const validPassword = (password: string) => {
  const hasNumber = /(?=.*[0-9])/i;
  const hasLowercase = /(?=.*[a-z])/;
  const hasUppercase = /(?=.*[A-Z])/;
  const hasSpecialChar = /(?=.*[*.!@$%^&-])/i;
  const minChars = password.length >= 8;

  const errors: any = {};

  if (!hasNumber.test(password)) {
    errors.hasNumber = "Password must have at least one number";
  } else {
    delete errors.hasNumber;
  }
  if (!hasLowercase.test(password)) {
    errors.hasLowercase = "Password must contain at least one lowercase character";
  } else {
    delete errors.hasLowercase;
  }
  if (!hasUppercase.test(password)) {
    errors.hasUppercase = "Password must contain at least one uppercase character";
  } else {
    delete errors.hasUppercase;
  }
  if (!hasSpecialChar.test(password)) {
    errors.hasSpecialChar = "Password must contain at least one special character (*.!@$%^&-)";
  } else {
    delete errors.hasSpecialChar;
  }
  if (!minChars) {
    errors.minChars = "Password must be at least 8 characters long";
  } else {
    delete errors.minChars;
  }
  return Object.keys(errors).length > 0 ? errors : null;
}

const passwordConfirmed = (password: string, confirmation: string) => {
  return password !== confirmation ? "Pasword and password confirmation does not match" : null;
}


export {
  required,
  isEmail,
  validPassword,
  passwordConfirmed
}

