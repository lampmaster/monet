import React from "react"
import classes from './Window.module.scss'
import Backdrop from "../Backdrop/Backdrop";

const Window = props => {

    return (
        <Backdrop onClose={props.onClose} window={props.window}>
            <div className={classes.Window}>
                { props.children }
            </div>
        </Backdrop>
    )
}

export default Window
