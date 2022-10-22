import React from "react";
import classes from "../shared-components/shared.module.css"

export const BlockScreen = ({clickEvent}) => {
    return (
        <div onClick={clickEvent} className={classes.blockScreen} ></div>
    );
}