let regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

export const validateEmail = (email) => {
    const emailValidation = regex.test(email);
    if (emailValidation === true) {
        return true;
    } else {
        return false;
    }
};