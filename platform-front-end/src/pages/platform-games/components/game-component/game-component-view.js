import { React, useEffect } from 'react'
import { PopupBox } from '../../../shared-components/style-components/popup-box'
import classes  from '../../platform-game.module.css'
import { useGameViewModel } from './game-component-viewmodel';


export function GameComponentView({id}) {

    const {
        game,
        isLoading,
        loadGame
    } = useGameViewModel(id)
    
    useEffect(() => {
        let controller = new AbortController();
        loadGame(controller.signal);
        return () => { controller?.abort() }
    }, [loadGame]);

    return (
        !isLoading &&
        <PopupBox>
            <div className={classes.ClassMain}>
                <h1 className={classes.ClassTitle}>{game.length > 0 ? game[0].nome : ""}</h1>
                <img src={require(`../../../../icons/no-image.png`)} 
                    style={{width: "80%", height:"80%"}}/>
                <div className={classes.ClassGrupoInformacoes}>
                    <p className={classes.ClassDescricao}>
                        {game.length > 0 ? game[0].descricao : ""}
                    </p>
                    <div className={classes.ClassInformacoes}>
                        <h4>Classificação: {game.length > 0 ? game[0].classificacaoESBR : ""}</h4>
                        <h4>Estúdio: {game.length > 0 ? game[0].estudio?.nome : ""}</h4>
                    </div>
                </div>
                <ul className={classes.ClassGeneros}>
                {
                    game.length > 0 && (
                        game[0].generos.map(x => <li key={x.nome}>{x.nome}</li>))
                }
                </ul>
            </div>
        </PopupBox>
    );
}