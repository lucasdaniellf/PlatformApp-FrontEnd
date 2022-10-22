import React from "react";
import classes from "../shared.module.css"

export const Card = (props) => {
    return (
        <li className={classes.cardClass}>
            <div className={classes.settingsDivClass}>
                <p onClick={props.onFormClick} className={classes.settingsLinkClass}/>
            </div>
            {props.children}
        </li>
    );
}