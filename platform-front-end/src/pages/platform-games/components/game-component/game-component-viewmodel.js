import { useCallback, useState } from "react";
import { CreateGamesSettings } from "../../../../services/game-service/games-graphql-settings"
import { MyGraphqlClient } from "../../../../services/service-classes/graphql-client"



export const useGameViewModel = (id) =>
{
    const [isLoading, setIsLoading] = useState(true);
    
    const [game, setGame] = useState([]);
    
    const loadGame = useCallback((signal) => {
        let gameSettings = CreateGamesSettings(id)
        let graphQlClient = new MyGraphqlClient(gameSettings);
        
        graphQlClient.getDataById(id, signal)
                .then( x => {
                    let game = x["jogos"]
                    setGame(game)
                    setIsLoading(false);
                }   
        ).catch(e => {
            console.log(e)
        });
    }, [id]);

    return {
        game,
        isLoading,
        loadGame
    }
}

