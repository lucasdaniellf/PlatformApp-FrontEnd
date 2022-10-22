import {React} from 'react'
import { PlatformItem } from './platform-item'
import { Grid } from '../../shared-components/style-components/grid'
import { AddItemCardComponent } from '../../shared-components/add-item-card'


export const PlatformGrid = ({platforms, onItemClick, onFormClick}) => {
    return (
        <Grid>
            {
                platforms.length > 0 && (           
                    platforms.map(x => 
                        <PlatformItem 
                            platform={x} 
                            key={x.id} 
                            onItemClick={onItemClick}
                            onFormClick={onFormClick}/>
                        ))
            }
            <AddItemCardComponent addItemForm={() => {onFormClick(0)}}/>               
        </Grid>
    );
}

