import { React, useEffect} from 'react'
import { Button } from '../../../../shared-components/button';
import { PopupBox } from '../../../../shared-components/style-components/popup-box'
import classes  from '../../../platform-game.module.css'
import { usePlatformGameUpdateViewModel } from './platform-game-form-update-viewmodel';


export function PlatformGameFormUpdateView({id, platformId, submitFormCallback}) {

    const {
        platformGame,
        onPrecoChange,
        onNumVendasChange,
        onSubmitUpdateGame,
        loadGameForm
    } = usePlatformGameUpdateViewModel(id, platformId);

    useEffect(() => {

        let controller = new AbortController()

        loadGameForm(id, controller.signal)
        return () => { controller?.abort() }
    }, [id, loadGameForm]);

    return (
        <PopupBox>
            <form className={classes.ClassForm}
                onSubmit={(e) => onSubmitUpdateGame(e, submitFormCallback)}>

                <div>   
                    <label htmlFor='Nome'>Título: </label>
                    <input
                        id='Nome' 
                        type='text' 
                        value={platformGame.name || ''}
                        readOnly/>
                </div> 

                <div>
                    <label htmlFor='UrlImagem'>Url Imagem: </label>
                    <input id='UrlImagem' 
                            value={`no-image.png`}
                            type='text'
                            readOnly/>
                </div>
                <div>
                    <label htmlFor='Preco'>Preço: </label>
                    <input id='Preco' 
                           type='number' 
                           step={1}
                           value={platformGame.gamePrice || 0}
                           onChange={onPrecoChange}/>
                </div>
                <div>
                    <label htmlFor='NumVendas'>Nº de Cópias: </label>
                    <input id='NumVendas' 
                           type='number'
                           step={1}
                           value={platformGame.gameQtySold || 0}
                           onChange={onNumVendasChange}/>
                </div>
                <Button text={"Atualizar"}></Button>
            </form>
        </PopupBox>
    );
}