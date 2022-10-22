import {  useCallback, useState } from "react";
import { RestApiClient } from "../../../../../services/service-classes/rest-api-client";
import { CreatePlatformGameRequestsSettings } from "../../../../../services/platform-service/platform-requests-settings"; 
import { PlatformGameFormModel } from "../platform-game-form-model";

export const usePlatformGameUpdateViewModel = (id, platformId) => {

    const [platformGame, setplatformGame] = useState({});

    const loadGameForm = useCallback((id, signal) => {

        let platformGameSettings = CreatePlatformGameRequestsSettings(platformId)    
        let restClient = new RestApiClient(platformGameSettings);

        restClient.getDataById(id, signal).then(x => x.json()).then( x => {               
            let game = new PlatformGameFormModel(
                x.platform.id,
                x.game.id,
                x.game.name,
                x.gamePrice,
                x.gameQtySold
            );
            setplatformGame(game)
        }).catch(e => {
            console.log(e.name)
        })
    }, [platformId]);

    function onSubmitUpdateGame(event, submitFormCallback){
        event.preventDefault();
        let platformGameSettings = CreatePlatformGameRequestsSettings(platformId)    
        let restClient = new RestApiClient(platformGameSettings);

        restClient.updateData(id, {gamePrice: Math.floor(platformGame.gamePrice), gameQtySold: Math.floor(platformGame.gameQtySold)}).then(() => {submitFormCallback();})

    }

    // Using state to store input values

    function onPrecoChange(event){
        setplatformGame({...platformGame, gamePrice: event.target.value});
    }

    function onNumVendasChange(event){
        setplatformGame({...platformGame, gameQtySold: event.target.value});
    }

    return {
        platformGame,
        onPrecoChange,
        onNumVendasChange,
        onSubmitUpdateGame,
        loadGameForm
    }
}        