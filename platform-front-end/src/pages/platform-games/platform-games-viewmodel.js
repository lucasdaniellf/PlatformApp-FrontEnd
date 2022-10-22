import { useCallback, useContext, useState } from "react";
import { CreatePlatformGameRequestsSettings, CreatePlatformRequestsSettings } from "../../services/platform-service/platform-requests-settings";
import { RestApiClient } from "../../services/service-classes/rest-api-client";
import { ModelContext } from '../../store/model-context';

export const usePlatformGameViewModel = (id) => {
    
    //---------Hooks-------------//
    const ctx = useContext(ModelContext);
    const [platformGames, setPlatformGames] = useState([]);
    const [platformInfo, setPlatformInfo] = useState({}); 
    const [reloadFlag, setReloadFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false);
    const [isGameCardClicked, setIsGameCardClicked] = useState(false);
    const [isGameFormClicked, setIsGameFormClicked] = useState(false);
    //-----------Callbacks and Functions-------//

    const setContextId = (id) => {ctx.modelId > 0 ? ctx.setId(0) : ctx.setId(id)} ;

    const onGameCardClick = (id) => {
        setIsGameCardClicked(true);
        setContextId(id);
    };
    
    const onGameFormClick = (id) => {
        console.log(id)
        setIsGameFormClicked(true);
        setContextId(id);
    };

    const disablePopup = () => {

        setIsGameFormClicked(false); 
        setIsGameCardClicked(false);
        setIsDeleteButtonClicked(false);
        setContextId(0);
    };

    const onButtonDeleteClick = (id) => {
        setIsDeleteButtonClicked(true);  
        setContextId(id);
    };

    const onConfirmDeleteClick = () => {
        let restClient = new RestApiClient(CreatePlatformGameRequestsSettings(id));
        if(ctx.modelId > 0){
            restClient.deleteData(ctx.modelId).then(() => {
                setReloadFlag(!reloadFlag)
                disablePopup();    
            })
        } else {
            console.log("There was some unexpected error outside. Id: " + ctx.modelId);
        }
    };

    const submitFormCallback = () => {
        setReloadFlag(!reloadFlag)
        disablePopup();
    };

    
    const loadPlatformGames = useCallback((signal) => {
        let restClient = new RestApiClient(CreatePlatformRequestsSettings());
        restClient.getDataById(id).then(x => x.json()).then(
            x => { 
                setPlatformInfo(x)
            }
        );

        restClient.settings = CreatePlatformGameRequestsSettings(id);
        restClient.getData(signal).then(x => x.json())
            .then((x) => { 
                setPlatformGames(x)
                setIsLoading(false)

            }).catch( (e) => {
                console.log(e.name)

            });
    }, [id]);
    
    return {
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
    }
}