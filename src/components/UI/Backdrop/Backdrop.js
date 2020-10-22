import React from "react"
import classes from './Backdrop.module.scss'

const Backdrop = props => {
    let ref = React.createRef()
    const clickHandler = (e) => {
        if (ref.current === e.target) {
            props.onClose()
        }
    }

    return (
        <div ref={ref} onClick={clickHandler}
            className={classes.Backdrop}
        >{props.children}</div>
    )
}

export default Backdrop
