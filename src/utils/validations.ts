function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validatePassword(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^([a-zA-Z0-9@*#-]{8,15})$/.test(value)) {
        error = `Your pasword must contain at least:\n 
        -1 uppercase letter. \n
        -1 lowercase letter. \n
        -1 number. \n
        -1 special character. \n
        And must be at leat 8 characters long.`;
    }
    return error;
}

function validateConfirm(pass, value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (pass && value && value !== pass) {
        error = 'Password confirmation does not match your password';
    }
    return error;
}

function isRequired(value) {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
}

export { validateEmail, validatePassword, validateConfirm, isRequired };
