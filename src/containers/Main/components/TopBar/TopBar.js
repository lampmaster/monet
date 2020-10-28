import React from "react"
import classes from './TopBar.module.scss'
import {Droplet} from "react-feather";

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
