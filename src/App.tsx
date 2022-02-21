import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {SuperTitle} from './component/TodoList/SuperTitle/SuperTitle';
import {Todolist} from './component/TodoList/TodoList';


export type TypeFilteer = "all" | "active" | "completed"

type TodoLisType = {
    id: string
    title: string
    filter: TypeFilteer
}

type TaskType = {}

function App() {

    const todoListOne = v1()
    const todoLisTwo = v1()

    let [tasks, setTasks] = useState({
        [todoListOne]: [
            {id: v1(), isDone: true, title: "milk"},
            {id: v1(), isDone: true, title: "beer"},
            {id: v1(), isDone: false, title: "pool"},
            {id: v1(), isDone: true, title: "beer"},
            {id: v1(), isDone: false, title: "pool"}
        ],
        [todoLisTwo]: [
            {id: v1(), isDone: true, title: "milk"},
            {id: v1(), isDone: true, title: "beer"},
            {id: v1(), isDone: false, title: "pool"},
            {id: v1(), isDone: true, title: "beer"},
            {id: v1(), isDone: false, title: "pool"}
        ]
    })

    let [todoList, setTodoList] = useState<Array<TodoLisType>>([
        {id: todoListOne, title: "CSGo", filter: "active"},
        {id: todoLisTwo, title: "CS_1.6", filter: "all"}
    ])


    const filedFuc = (todoListID: string, filteer: TypeFilteer) => {
        setTodoList(todoList.map(t => t.id === todoListID ? {...t, filter: filteer} : t))
    }


    const removeTask = (todoListID: string, id: string) => {
        const newTask = tasks[todoListID].filter(t => id !== t.id)
        tasks[todoListID] = newTask
        setTasks({...tasks})
    }


    const addTasks = (todoListID: string, title: string) => {
        const newTask = {id: v1(), isDone: false, title: title}
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})

    }

    const checkBoxHandler = (todoListID: string, value: boolean, id: string) => {
        const tasksNew = tasks[todoListID].map(m => m.id === id ? {...m, isDone: value} : m)
        tasks[todoListID] = tasksNew
        setTasks({...tasks})
    }

    const removeTodoList = (todoListID: string) => {
        setTodoList(todoList.filter(f => f.id !== todoListID))
    }

    const addTodoList = (titleList: string) => {
        let todoLisThree = v1()
        const newTodoList: TodoLisType = {id: todoLisThree, title: titleList, filter: "all"}
        setTodoList([newTodoList, ...todoList])
        setTasks({[todoLisThree]: [], ...tasks})
    }

    const updeteTodoList = (todoListID: string, newTitle: string) => {
        setTodoList(todoList.map(m => m.id === todoListID ? {...m, title: newTitle} : m))
    }

    const updeteTitleTask = (todoListID: string, taskID: string, newTitle: string) => {
        setTasks({
            ...tasks, [todoListID]:
                tasks[todoListID].map(m => m.id === taskID ? {...m, title: newTitle} : m)
        })
    }


    return (
        <div className="App">
            <div className='buttonBig'>
                <SuperTitle callBack={addTodoList}/>
            </div>
            {todoList.map(t => {
                const train = () => {
                    switch (t.filter) {
                        case "completed":
                            return tasks[t.id].filter(t => t.isDone)
                        case "active":
                            return tasks[t.id].filter(t => !t.isDone)
                        default:
                            return tasks[t.id]
                    }
                }
                return (
                    <Todolist
                        key={t.id}
                        ID={t.id}
                        filteer={t.filter}
                        removeTodoList={removeTodoList}
                        title={t.title}
                        task={train()}
                        removeTask={removeTask}
                        filedFuc={filedFuc}
                        addTasks={addTasks}
                        checkBoxHandler={checkBoxHandler}
                        updeteTodoList={updeteTodoList}
                        updeteTitleTask={updeteTitleTask}
                    />)
            })}
        </div>
    );
}

export default App;
