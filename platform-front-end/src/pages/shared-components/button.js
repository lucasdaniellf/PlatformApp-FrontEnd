import React from "react";
import classes from "./shared.module.css"

export const Button = (props) => {
    return (
        <button className={classes.actionButton} onClick={props.onClick}>{props.text}</button>
    );
}