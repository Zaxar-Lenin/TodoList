import React from 'react';
import {TypeFilteer} from '../../../App';

type TypeButton = {
    name: string
    callBack: () => void;
    filteer: TypeFilteer
}
export const Button: React.FC<TypeButton> = ({callBack, name, filteer}) => {
    return <button className={"but" + " " + (name === filteer ? 'filter' : '')} onClick={callBack}><span>{name}</span>
    </button>
}