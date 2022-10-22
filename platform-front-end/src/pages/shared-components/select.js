import {React} from 'react'
export const CustomSelect = ({id, list, defaultValue, selectRef}) => {

    return (<select id={id} 
                defaultValue={defaultValue}
                ref={selectRef}>
                <option key={0} value={0}>.:Selecione:.</option>
                {list.map(opt =>
                    <option key={opt.id} value={opt.id}>
                        {opt.name}
                    </option>
                )}
            </select>);
}
