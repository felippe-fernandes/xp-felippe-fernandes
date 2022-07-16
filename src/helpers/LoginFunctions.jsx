let regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

export const validateEmail = (email) => {
    return (regex.test(email))
};