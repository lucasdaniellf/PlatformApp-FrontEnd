import { createContext, useState } from "react";

export const ModelContext = createContext({
    modelId : 0,
    setId: ((id) => {})
});


export const ModelContextProvider = (props) => {
    
    const [modelId, setModelId] = useState(0);

    function setId(id){
        setModelId(id);
    }

    const context = {
        modelId: modelId,
        setId: setId
    }
    
    return (
        <ModelContext.Provider value={context}>
            {props.children}
        </ModelContext.Provider>
    );
}