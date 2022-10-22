import {React} from 'react'
import { Card } from '../../shared-components/style-components/card';
import classes from '../platform-game.module.css'

export const PlatformGameItem = ({platformGame, 
                                    clickButtonEvent, 
                                    clickCardEvent, 
                                    clickGameFormEvent}) => {
    return (
        <Card onFormClick={() => {clickGameFormEvent(platformGame.game.id)}}>
            <div onClick={() => clickCardEvent(platformGame.game.id)}>
                <h2>{platformGame.game.name}</h2>
        
                <img src={require(`../../../icons/no-image.png`)} 
                    alt={`${platformGame.game.name} photo`}/>
        
                <h4>Preço: R$ {platformGame.gamePrice.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h4>
                <h4>Nº de Cópias: {platformGame.gameQtySold.toLocaleString('pt-br')}</h4>
            </div>
            <button className={classes.itemButtonClass} 
                    onClick={() => clickButtonEvent(platformGame.game.id)}>Remover</button>
        </Card>
    );
};