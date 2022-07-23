let regex = new RegExp(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i);

export const validateEmail = (email) => {
  const emailValidation = regex.test(email);
  if (emailValidation === true) {
    return true;
  } else {
    return false;
  }
};
