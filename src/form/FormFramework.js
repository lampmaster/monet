export function validate(value, validation = null) {
    if  (!validation) {
        return true
    }

    let isValid = true

    if (validation.required) {
        isValid = value.trim() !== ''
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
