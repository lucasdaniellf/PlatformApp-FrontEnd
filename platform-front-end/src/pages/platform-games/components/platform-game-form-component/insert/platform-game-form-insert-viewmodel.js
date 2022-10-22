import {  useCallback, useRef, useState } from "react";
import { RestApiClient } from "../../../../../services/service-classes/rest-api-client";
import { CreateGamesRequestSettings, CreatePlatformGameRequestsSettings } from "../../../../../services/platform-service/platform-requests-settings"; 

export const usePlatformGameInsertViewModel = (platformId) => {

    const gameRef = useRef();
    const precoRef = useRef();
    const numVendasRef = useRef();
    const [listGames, setListGames] = useState([])

    const loadGameForm = useCallback((signal) => {
        let gamesSettings = CreateGamesRequestSettings();
        let restClient = new RestApiClient(gamesSettings);

        restClient.settings = gamesSettings;
        restClient.getData(signal).then(x => x.json()).then(x => {
            //console.log(x.filter(game => game.platforms.filter(p => p.id == id).length == 0) )
            setListGames(x)//.filter(game => game.platforms.filter(p => p.id === id) === 0) 
        }).catch( e => {
            console.log(e.name)
        });
    }, []);

    function onSubmitUpdateGame(event, submitFormCallback){
        event.preventDefault();
        let restClient = new RestApiClient(CreatePlatformGameRequestsSettings(platformId));
        restClient.postDataWithId(gameRef.current.value, {gamePrice: Math.floor(precoRef.current.value), gameQtySold: Math.floor(numVendasRef.current.value)}).then(() => {submitFormCallback();})

    }

    return {
        listGames,
        gameRef,
        precoRef,
        numVendasRef,
        onSubmitUpdateGame,
        loadGameForm
    }
}        