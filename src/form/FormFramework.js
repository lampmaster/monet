import is from "is_js";

export function validate(value, validation = null) {
    if  (!validation) {
        return true
    }

    let isValid = true

    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
        isValid = is.email(value.trim()) && isValid
    }

    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
    }

    return isValid
}

export function validateForm(formControl) {
    let isFormValid = true

    for (let control in formControl) {
        if (formControl[control].hasOwnProperty('valid')) {
            isFormValid = formControl[control].valid && isFormValid
        }
    }

    return isFormValid

}
