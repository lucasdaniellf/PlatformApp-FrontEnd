import {React} from 'react'
import { PlatformGameItem } from './platform-game-item';
import { Grid } from '../../shared-components/style-components/grid';
import { AddItemCardComponent } from '../../shared-components/add-item-card'

export const PlatformGameGrid = ({platformGame, 
                                  clickButtonEvent, 
                                  clickCardEvent,
                                  clickGameFormEvent}) => {
    return (
        <Grid>
            {
                platformGame.length > 0 && (           
                    platformGame.map(x => 
                        <PlatformGameItem
                            platformGame={x} 
                            key={x.game.id} 
                            clickButtonEvent={clickButtonEvent}
                            clickCardEvent={clickCardEvent}
                            clickGameFormEvent={clickGameFormEvent}/>
                        ))      
            }
            <AddItemCardComponent addItemForm={() => {clickGameFormEvent(0)}}/>                  
        </Grid>
    );
}