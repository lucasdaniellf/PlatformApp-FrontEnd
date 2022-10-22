import React from 'react'
import classes from "./shared.module.css"

export const AddItemCardComponent = (props) =>{
    return (
        <div className={classes.cardClass} onClick={props.addItemForm}>
            <img src={require('../../icons/Plus-Symbol-Vector.png')} alt={'Add photo symbol'} style={{marginBlock:"25%", opacity:"0.32"}} />
        </div>
    );
}