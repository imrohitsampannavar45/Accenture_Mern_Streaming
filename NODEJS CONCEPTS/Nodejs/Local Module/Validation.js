function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(input);
}

function validatePincode(input) {
    const pincodePattern = /^[1-9][0-9]{5}$/;
    return pincodePattern.test(input);
}


module.exports = validateEmail, validatePincode