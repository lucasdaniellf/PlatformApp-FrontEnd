import { React } from 'react'
import { ModelContextProvider } from '../../store/model-context';
import { PlatformView } from './platform-view';


export const Platform = () => {
    return (
        <ModelContextProvider>
            <PlatformView>
                </PlatformView>    
        </ModelContextProvider>
    );
}