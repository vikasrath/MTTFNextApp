
const validateData = (formData) => {
    let errors = {};

    if (!formData.name || formData.name.length < 3) {
        errors.name = "Name must be at least 3 characters long";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!formData.phone || formData.phone.length !== 10) {
        errors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.amount) {
        errors.amount = "Membership fee is required";
    }

    return errors;
};

export default validateData;