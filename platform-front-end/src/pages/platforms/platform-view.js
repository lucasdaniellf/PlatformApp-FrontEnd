import {React, useEffect } from 'react'
import { PlatformGrid } from './components/platform-grid'
import { BlockScreen } from '../shared-components/block-screen'
import { ConfirmationBox } from '../shared-components/confirmation-box'
import { usePlatformViewModel } from './platform-viewmodel'
import classes from './platforms.module.css'
import { PlatformFormComponent } from './components/platform-form-component/platform-form-view'

export const PlatformView = () => {
    
    const {
        ctx,
        isLoading,
        reloadFlag,
        platforms,
        isItemClicked,
        isFormClicked,
        loadPlatforms,
        onItemClick,
        onFormClick,
        onDeleteClick,
        submitFormCallback,
        disablePopup
    } = usePlatformViewModel();

    useEffect(() => {
        let controller = new AbortController()
        loadPlatforms(controller.signal)
        //setIsLoading(!isLoading)

        return () => {
            controller?.abort();
        }
    }, [loadPlatforms]);
    
    useEffect(() => {
        let controller = new AbortController()
        loadPlatforms(controller.signal)

        return () => {
            controller?.abort();
        }
    }, [loadPlatforms, reloadFlag]);
    
    return (
            !isLoading &&
                <>
                <h1 className={classes.titleClass}>
                    {platforms.length > 0? "Plataformas" : "Sem Plataformas Cadastradas"}
                </h1>
                <PlatformGrid 
                        platforms={platforms} 
                        onItemClick={onItemClick}
                        onFormClick={onFormClick}>
                </PlatformGrid>
                {isItemClicked && <ConfirmationBox 
                                    clickYesEvent={onDeleteClick} 
                                    clickNoEvent={disablePopup}/>}
                {isFormClicked && <PlatformFormComponent 
                                    id={ctx.modelId}
                                    submitFormCallback = {submitFormCallback}/>}
                {(isItemClicked || isFormClicked) && <BlockScreen 
                                                        clickEvent={disablePopup}/>}    
            </>
    );
}