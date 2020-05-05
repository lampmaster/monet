import React from "react"
import classes from './Input.module.scss'

function isInvalid({valid, touched}) {
    console.log(valid, touched)
    return !valid && touched
}

const Input = props => {
    // debugger
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    // console.log(isInvalid(props))
    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <input
            value={props.value}
            type={inputType}
            className={cls.join(' ')}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

export default Input
