import { useCallback, useState } from "react";
import { CreatePlatformRequestsSettings, CreatePlatformTypeRequestsSettings } from "../../../../services/platform-service/platform-requests-settings";
import { RestApiClient } from "../../../../services/service-classes/rest-api-client";

export const usePlatformDetailViewModel = () => {

    const [Platform, setPlatform] = useState({});
    const [PlatformType, setPlatformType] = useState([]);

    const loadPlatform = useCallback((id, signal) => {  
        let restClient = new RestApiClient(CreatePlatformRequestsSettings());

        restClient.getDataById(id, signal)
                    .then(x => x.json())
                    .then(x => {
                        setPlatform(x)
                    }).catch( (e) => {
                        console.log(e.name)
                    });
    }, [])

    const loadPlatformType = useCallback((signal) => {
        let restClient = new RestApiClient(CreatePlatformTypeRequestsSettings());
        restClient.getData(signal)
                    .then(x => x.json())
                    .then(x => {
                        setPlatformType(x)
                    }).catch( (e) => {
                        console.log(e.name)
                    });      
    }, [])
    
    const onButtonSubmit = (event, id, submitFormCallback) => {
        event.preventDefault();
        let restClient = new RestApiClient(CreatePlatformRequestsSettings());
        const platform = {name: Platform.name, company: Platform.company}
        
        if(Platform.platformType?.id > 0){
            platform.platformTypeId = Platform.platformType.id
        }

        if(id > 0){
            console.log(platform)
            
            restClient.updateData(id, platform).then(() => {submitFormCallback();})
        } else {
            restClient.postData(platform).then(() => {submitFormCallback();});
        }
    }

    return {        
        Platform,
        setPlatform,
        PlatformType,
        loadPlatform,
        loadPlatformType,
        onButtonSubmit
        };
}