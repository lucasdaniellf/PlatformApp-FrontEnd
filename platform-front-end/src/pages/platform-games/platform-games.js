import { React } from 'react'
import { ModelContextProvider } from '../../store/model-context';
import { PlatformGameView } from './platform-games-view';


export const PlatformGames = () => {
    return (
        <ModelContextProvider>
            <PlatformGameView>
                </PlatformGameView>    
        </ModelContextProvider>
    );
}