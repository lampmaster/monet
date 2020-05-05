import React from "react"
import classes from './TopBar.module.scss'
import {Droplet, Framer} from "react-feather";

const TopBar = () => {
    return (
        <div className={classes.TopBar}>
            <Droplet/>
            <div className={classes.logo}>
                Monet
            </div>
        </div>
    )
}

export default TopBar
