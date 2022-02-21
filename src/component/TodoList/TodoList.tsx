import React from 'react';
import {Button} from './Button/Button';
import {Header} from './Header/Header';
import {Task} from './Tasks/Task';
import {TypeFilteer} from '../../App';
import {SuperTitle} from "./SuperTitle/SuperTitle"
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import s from "./TodoList.module.css"

export type TypeTaskAr = {
    id: string
    isDone: boolean
    title: string
}

type TypeTodoList = {
    ID: string
    title: string
    task: Array<TypeTaskAr>
    removeTask: (todoListID: string, id: string) => void
    filedFuc: (todoListID: string, filteer: TypeFilteer) => void
    addTasks: (todoListID: string, stitle: string) => void
    checkBoxHandler: (todoListID: string, value: boolean, id: string) => void
    filteer: TypeFilteer
    removeTodoList: (todoListID: string) => void
    updeteTodoList: (todoListID: string, newTitle: string) => void
    updeteTitleTask: (todoListID: string, taskID: string, newTitle: string) => void

}

export const Todolist = (props: TypeTodoList) => {


    const onHendlerAllButton = () => props.filedFuc(props.ID, "all")
    const onHendlerActiveButton = () => props.filedFuc(props.ID, "active")
    const onHendlerCompletedButton = () => props.filedFuc(props.ID, "completed")

    const onClickRemoveTodoList = () => {
        props.removeTodoList(props.ID)
    }


    const addTitleTask = (newTitle: string) => {
        props.addTasks(props.ID, newTitle)
    }

    const updeteTitleTodoList = (newTitle: string) => {
        props.updeteTodoList(props.ID, newTitle)
    }
    return (
        <div className='todo'>
            <div className={s.title}><Header title={props.title} callBack={updeteTitleTodoList}/>
                <IconButton className={s.del} onClick={onClickRemoveTodoList} aria-label="delete">
                    <Delete style={{color: "black"}}/>
                </IconButton>
            </div>
            <SuperTitle callBack={addTitleTask}/>
            <ul>
                {props.task.map(t => <Task
                    removeTask={props.removeTask}
                    checkBoxHandler={props.checkBoxHandler}
                    key={t.id}
                    ID={props.ID}
                    id={t.id}
                    isDone={t.isDone}
                    title={t.title}
                    updeteTitleTask={props.updeteTitleTask}/>)}
            </ul>
            <div className='bt'>
                <Button
                    filteer={props.filteer}
                    name='all'
                    callBack={onHendlerAllButton}
                />
                <Button
                    filteer={props.filteer}
                    name='completed'
                    callBack={onHendlerCompletedButton}
                />
                <Button
                    filteer={props.filteer}
                    name='active'
                    callBack={onHendlerActiveButton}
                />
            </div>
        </div>
    )
}