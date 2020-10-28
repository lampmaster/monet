import {Droplet} from "react-feather";
import classes from './Logo.module.scss'
import React from "react";
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";

export const Logo = () => {
    return (
        <div className={classes.logo}>
            <Droplet />
            <div className={classes.name}>
                Monet
            </div>
        </div>
    )
}