import React from "react";
import classes from "../shared.module.css"

export const Grid = (props) => {
    return (
        <div className={classes.gridClass}>
            {props.children}
        </div>
    );
}