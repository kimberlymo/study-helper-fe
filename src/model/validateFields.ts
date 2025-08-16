export const validateString = (value: string) => {
    const regex = /^[a-zA-Z0-9 ]*$/;

    if (value.length < 3) {
        return "Input must be at least 3 characters long";
    }

    if (value.length > 20) {
        return "Input must be at most 20 characters long";
    }

    if (!regex.test(value)) {
        return "Input must contain only letters and numbers";
    }

    return '';
}

export const validateDate = (date: string) => {
    if (!date) {
        return "Date is required";
    }

    const today = new Date();
    const tomorrow = new Date(today);
    const parsedDate = new Date(date);
    tomorrow.setDate(today.getDate() + 1);

    if (parsedDate < tomorrow) {
        return "Date must be at least tomorrow";
    }

    return '';
}