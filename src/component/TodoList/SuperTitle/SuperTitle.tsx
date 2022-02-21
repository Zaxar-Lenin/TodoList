import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@mui/material";

type SuperTitleType = {
    callBack: (newTitle: string) => void
}
export const SuperTitle = (props: SuperTitleType) => {

    const [newTitle, setNewTitle] = useState("")
    const [error, setError] = useState<null | string>(null)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onKeyPreesInput = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            if (newTitle.trim() !== '') {
                props.callBack(newTitle)
            } else {
                setError("Error")
            }
            setNewTitle("")
        }
    }

    const onClickButton = () => {
        if (newTitle.trim() !== '') {
            props.callBack(newTitle)
        } else {
            setError("Error")
        }
        setNewTitle("")

    }
    return (
        <div>
            {/*<input*/}
            {/*    className={error ? 'error' : ''}*/}
            {/*    type="text"*/}
            {/*    value={newTitle}*/}
            {/*    onChange={onChangeInput}*/}
            {/*    onKeyPress={onKeyPreesInput}/>*/}
            <TextField
                className={"input_g" + " " + (error ? 'error' : '')}
                id="standard-basic"
                value={newTitle}
                variant="outlined"
                onChange={onChangeInput}
                style={{height: "40px", margin: "0 0 30px 0"}}
                onKeyPress={onKeyPreesInput}/>

            {/*<button onClick={onClickButton}>+</button>*/}
            <Button style={{height: "40px"}} onClick={onClickButton} variant="contained" color="success">
                add
            </Button>
            {error && <div>Error!</div>}
        </div>
    )
}