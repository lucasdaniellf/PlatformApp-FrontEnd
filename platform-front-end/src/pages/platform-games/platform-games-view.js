import {React, useEffect } from 'react'
import { PlatformGameGrid } from './components/platform-game-grid';
import { ConfirmationBox } from '../shared-components/confirmation-box'
import { BlockScreen } from '../shared-components/block-screen'
import { ModelContextProvider } from '../../store/model-context';
import classes from './platform-game.module.css'
import { useParams } from 'react-router-dom';
import { usePlatformGameViewModel } from './platform-games-viewmodel';
import { GameComponentView } from './components/game-component/game-component-view';
import { PlatformGameFormInsertView } from './components/platform-game-form-component/insert/platform-game-form-insert-view';
import { PlatformGameFormUpdateView } from './components/platform-game-form-component/update/platform-game-form-update-view';


export const PlatformGameView = () => {
    
    //---------Properties and Variables-----------//
    const {id} = useParams();

    const {
        ctx,
        reloadFlag,
        isLoading,
        platformGames,
        platformInfo,
        isDeleteButtonClicked,
        isGameCardClicked,
        onGameCardClick,
        isGameFormClicked,
        onGameFormClick,
        onButtonDeleteClick,
        onConfirmDeleteClick,
        disablePopup,
        loadPlatformGames,
        submitFormCallback
    } = usePlatformGameViewModel(id);

    useEffect(() => {
        let controller = new AbortController();
        loadPlatformGames(controller.signal);
        return () => {
            controller?.abort()
        }
        
    }, [loadPlatformGames]);

    useEffect(() => {
       
        let controller = new AbortController();
        loadPlatformGames(controller.signal);
        return () => {
            controller?.abort()
        }

    }, [reloadFlag, loadPlatformGames]);


    return (
        !isLoading &&
        <ModelContextProvider>
            <h1 className={classes.titleClass}>
                {platformGames.length > 0 ? platformInfo.name : "Sem Jogos nesta Plataforma"}
            </h1>
            <PlatformGameGrid 
                platformGame={platformGames} 
                clickButtonEvent={onButtonDeleteClick} 
                clickCardEvent={onGameCardClick}
                clickGameFormEvent={onGameFormClick}>
            </PlatformGameGrid>
            {isDeleteButtonClicked && <ConfirmationBox 
                                        clickYesEvent={onConfirmDeleteClick} 
                                        clickNoEvent={disablePopup}/>
            }
            {isGameCardClicked && <GameComponentView id={ctx.modelId}/>}
            {isGameFormClicked && (ctx.modelId > 0 ? <PlatformGameFormUpdateView id={ctx.modelId} platformId = {id} submitFormCallback = {submitFormCallback}/>
                                                   : <PlatformGameFormInsertView platformId={id} submitFormCallback={submitFormCallback}/>)   
            }
            {(isGameFormClicked || isGameCardClicked || isDeleteButtonClicked) && <BlockScreen clickEvent={disablePopup}/>}
        </ModelContextProvider>
    );
};