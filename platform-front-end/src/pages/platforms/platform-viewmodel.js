import {useCallback, useContext, useState } from 'react'
import { CreatePlatformRequestsSettings } from '../../services/platform-service/platform-requests-settings'
import { RestApiClient } from '../../services/service-classes/rest-api-client'
import { ModelContext } from '../../store/model-context'


export const usePlatformViewModel = () => {

    const ctx = useContext(ModelContext);
    const [reloadFlag, setReloadFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [platforms, setPlatforms] = useState([]);
    const [isItemClicked, setIsItemClicked] = useState(false);
    const [isFormClicked, setIsFormClicked] = useState(false);

    
    const loadPlatforms = useCallback((signal) => {
        const platformSettings = CreatePlatformRequestsSettings();
        const restClient = new RestApiClient(platformSettings);

        restClient.getData(signal)
                    .then(x => x.json())
                    .then(x => {
                                setPlatforms(x)
                                setIsLoading(false)
                            }).catch( (e) => {
                                console.log(e.name)
                            });
    }, []);

    const onFormClick = (id) => {
        setIsFormClicked(true);
        ctx.setId(id);
    };

    const onItemClick = (id) => {
        setIsItemClicked(true);
        ctx.setId(id); 
    };

    const disablePopup = () => {
        ctx.setId(0);
        setIsFormClicked(false);
        setIsItemClicked(false);
    }

    const onDeleteClick = () => {
        const platformSettings = CreatePlatformRequestsSettings();
        const restClient = new RestApiClient(platformSettings);

        if(ctx.modelId > 0)
        {
            let index = platforms.findIndex((x) => { return x.id === ctx.modelId});

            if(index !== -1){
                restClient.deleteData(ctx.modelId).then(() => {
                    setReloadFlag(!reloadFlag)
                    disablePopup();
                })
            } else {
                console.log("There was some unexpected error Id: " + ctx.modelId);
            }
        } 
        else 
        {
            console.log("There was some unexpected error outside. Id: " + ctx.modelId);
        }
    };

    
    const submitFormCallback = () => {
        setReloadFlag(!reloadFlag)
        disablePopup();
    }

    return {
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
    }
}
