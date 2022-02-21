import React, {ChangeEvent} from 'react';
import {Header} from '../Header/Header';
import {TypeTaskAr} from '../TodoList';
import s from "./Task.module.css"
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";

type TypeTask = TypeTaskAr & {
    removeTask: (todoListID: string, id: string) => void
    checkBoxHandler: (todoListID: string, value: boolean, id: string) => void
    ID: string
    updeteTitleTask: (todoListID: string, taskID: string, newTitle: string) => void
}


export const Task: React.FC<TypeTask> = ({
                                             id,
                                             ID,
                                             isDone,
                                             title,
                                             removeTask,
                                             checkBoxHandler,
                                             updeteTitleTask
                                         }) => {
    const onClickRemoveButton = () => removeTask(ID, id)

    const checkBoxStatus = (e: ChangeEvent<HTMLInputElement>) => {
        checkBoxHandler(ID, e.currentTarget.checked, id)
    }

    const updeteTask = (newTitle: string) => {
        updeteTitleTask(ID, id, newTitle)
    }
    return (
        <li className={s.item} key={id}>
            <input type="checkbox" checked={isDone} onChange={checkBoxStatus}/>
            <Header title={title} callBack={updeteTask}/>
            {/*<button onClick={onClickRemoveButton}>X</button>*/}
            <IconButton onClick={onClickRemoveButton} aria-label="delete">
                <Delete/>
            </IconButton>
        </li>
    )
}