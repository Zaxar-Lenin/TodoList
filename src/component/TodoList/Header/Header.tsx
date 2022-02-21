import React, {ChangeEvent, useState} from 'react';

type TypeHeader = {
    title: string
    callBack: (newTitle: string) => void

}
export const Header = (props: TypeHeader) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(props.title)

    const doubleClick = () => {
        setEdit(true)
    }
    const unDouubleClick = () => {
        setEdit(false)
        props.callBack(newTitle)
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        setNewTitle(text)

    }
    return <h2>{
        edit
            ?
            <input value={newTitle} onChange={changeTitle} autoFocus onBlur={unDouubleClick} type=""/>
            :
            <span onDoubleClick={doubleClick}>{props.title}</span>

    }</h2>
}