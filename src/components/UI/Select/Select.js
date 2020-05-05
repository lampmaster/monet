import React from "react"
import classes from './Select.module.scss'

const Select = props => {

    // const options = props.children

    const slc = [classes.Select]
    return (
        <select name=''
                id=''
                className={slc.join('')}
                value={props.value}
                onChange={props.onChange}
        >
            {props.children}
        </select>
    )
}

export default Select
