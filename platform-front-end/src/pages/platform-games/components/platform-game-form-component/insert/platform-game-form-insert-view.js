import { React, useEffect} from 'react'
import { Button } from '../../../../shared-components/button';
import { CustomSelect } from '../../../../shared-components/select';
import { PopupBox } from '../../../../shared-components/style-components/popup-box'
import classes  from '../../../platform-game.module.css'
import { usePlatformGameInsertViewModel } from './platform-game-form-insert-viewmodel';


export function PlatformGameFormInsertView({platformId, submitFormCallback}) {

    const {
        listGames,
        gameRef,
        precoRef,
        numVendasRef,
        onSubmitUpdateGame,
        loadGameForm 
    } = usePlatformGameInsertViewModel(platformId);

    useEffect(() => {
        let controller = new AbortController()
        loadGameForm(controller.signal)

        return () => {controller.abort()}
    }, [loadGameForm]);

    return (
        <PopupBox>
            <form className={classes.ClassForm}
                onSubmit={(e) => onSubmitUpdateGame(e, submitFormCallback)}>
                <div>   
                    <label htmlFor='Jogo'>Título: </label>
                    <CustomSelect 
                        id={'Jogo'} 
                        defaultValue={0}
                        selectRef={gameRef}
                        list={listGames}        
                    />
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
                           defaultValue={0}
                           ref={precoRef}/>
                </div>
                <div>
                    <label htmlFor='NumVendas'>Nº de Cópias: </label>
                    <input id='NumVendas' 
                           type='number'
                           step={1} 
                           defaultValue={0}
                           ref={numVendasRef}/>
                </div>
                <Button text={"Adicionar"}></Button>
            </form>
        </PopupBox>
    );
}