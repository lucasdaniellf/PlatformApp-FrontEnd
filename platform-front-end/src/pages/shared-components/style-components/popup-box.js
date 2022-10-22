import React from "react";
import classes from "../shared.module.css"

export const PopupBox = (props) => {
    return (
        <div className={classes.confirmationBox}>
            {props.children}
        </div>
    );
};