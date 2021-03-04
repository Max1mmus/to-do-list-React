import React, {useState} from 'react';
import { useEffect } from 'react';
import {Form} from './Form';
import {List} from './List';
//localStorage.clear();

export function App () {
    const [newTask, setNewTask] = useState('');
    const [allTasks, setAllTasks] = useState([]);

    function onChange(e) {
        setNewTask(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const task = {
            taskContent: newTask,
            isDone: false
        };
        if (newTask === '') return;

        setNewTask('');
        setAllTasks([...allTasks, task]);
    }

    const removeTask = (index) => {
        const newTasks = allTasks.filter((_, taskIndex) => taskIndex !== index);
        setAllTasks(newTasks);
    }

    const checkboxChange = (index,e) => {
        const copiedTasks = [...allTasks];
        if (e.target.id === `input-${index}`) {
            copiedTasks[index].isDone = !copiedTasks[index].isDone;
        }
        setAllTasks(copiedTasks);
    } 

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem("list"));
        if (savedTasks) {
            setAllTasks(savedTasks);
        }
        console.log(localStorage.getItem("list"));
    }, []);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(allTasks));
    }, [allTasks]);

    return (
        <div className='app'>
            <h1>To-do List</h1>
            <Form
                onSubmit={onSubmit}
                onChange={onChange}
                inputValue={newTask}
            />
            <List
                checkboxChange={(index,e) => checkboxChange(index,e)}
                tasks={allTasks}
                onDelete={(index) => {removeTask(index)}}
            />
        </div>
    )
}