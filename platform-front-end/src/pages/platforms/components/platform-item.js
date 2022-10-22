import React from "react";
import {Link} from 'react-router-dom'
import classes from '../platforms.module.css'
import { Card } from '../../shared-components/style-components/card'

export const PlatformItem = ({platform, onItemClick, onFormClick}) => {
    return (
        <Card onFormClick={() => {onFormClick(platform.id)}}>
            <Link to={`/${platform.id}`}>
                <h2>{platform.name}</h2>      
                <img src={require(`../../../icons/no-image.png`)} 
                     alt={`${platform.name} photo`}/>

                <h4>Companhia: {platform.company}</h4>
                <h4>Tipo: {platform.platformType? platform.platformType.description: ''}</h4>
            </Link>
            <button className={classes.itemButtonClass} onClick={() => onItemClick(platform.id)}>Deletar</button>
        </Card>
    );
}