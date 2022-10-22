import React, { useEffect } from "react";
import { Button } from '../../../shared-components/button';
import { PopupBox } from "../../../shared-components/style-components/popup-box";
import { usePlatformDetailViewModel } from "./platform-form-viewmodel";
import classes from '../../platforms.module.css'

export const PlatformFormComponent = ({id, submitFormCallback}) => {

    const {
        Platform,
        setPlatform,
        PlatformType,
        loadPlatform,
        loadPlatformType,
        onButtonSubmit
    } = usePlatformDetailViewModel();

    useEffect(() => {
        let controller = new AbortController()
        if(id > 0){
            loadPlatform(id, controller.signal)
        }
        loadPlatformType(controller.signal)

        return () => {
            controller?.abort();
        }
        
    }, [loadPlatform, loadPlatformType, id]);

    return (
        <PopupBox>
            <form className={classes.ClassForm}
                onSubmit={(e) => onButtonSubmit(e, id, submitFormCallback)} style={{display:"block"}}>
                <div>
                    <label htmlFor='Nome'>Nome: </label>
                    <input id='Nome' 
                            type='text' 
                            value={Platform.name || ''}
                            onChange={(e) => {setPlatform(prev => ({...prev, name: e.target.value}))}} 
                            required/>
                </div>
                <div>
                    <label htmlFor='UrlImagem'>Url Imagem: </label>
                    <input id='UrlImagem' 
                            value={'no-image.png'}
                            type='text'
                            readOnly/>
                </div>
                <div>
                    <label htmlFor='Companhia'>Companhia: </label>
                    <input id='Companhia' 
                            type='text' 
                            value={Platform.company || ''}
                            onChange={(e) => {setPlatform(prev => ({...prev, company: e.target.value}))}}
                            required/>
                </div>
                <div>
                    <label htmlFor='Tipo'>Tipo: </label>
                        <select 
                            id='Tipo' 
                            value={Platform.platformType? Platform.platformType.id : 0}
                            onChange={(e) => {
                                setPlatform(prev => ({...prev, platformType: PlatformType.find(x => x.id == e.target.value)}))
                            }}>
                            <option key={0} value={0}>.:Selecione:.</option>
                            {
                                PlatformType.map(x => {
                                    return (<option key={x.id} value={x.id}>{x.description}</option>)
                                })
                            }
                        </select>
                </div>
                <Button text={id > 0 ? "Atualizar" : "Adicionar"}></Button>
            </form>
        </PopupBox>
    );
}