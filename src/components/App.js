import React, {useState, useEffect} from "react";
import {FilterButtons} from "./FilterButtons";
import {Form} from "./Form";
import {ListItem} from "./ListItem";
//localStorage.clear();

export function App () {
    const [newTask, setNewTask] = useState("");
    const [allTasks, setAllTasks] = useState([]);
    const [filterValue, setFilter] = useState("All tasks");

    function onChange(e) {
        setNewTask(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const task = {
            taskContent: newTask,
            isDone: false,
            timeStamp: calcTime()
        };
        if (newTask === "") return;

        setNewTask("");
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

    function filterTasks() {
        const filteredTasks = allTasks.filter((task,_) => {
            if (filterValue === "Unfinished") {
                return !task.isDone;
            } else if(filterValue === "Completed") {
                return task.isDone;
            } else return allTasks;
        })
        return filteredTasks;
    }

    const taskList = filterTasks().map((task, index) => 
        <ListItem
            checkboxChange={(e) => checkboxChange(index,e)}
            onDelete={() => removeTask(index)}
            index={index}
            task={task}
            key={`list-${index}`}  
        />
    )

    function changeFilter(filterOption) {
        let currentFilter = [...filterValue];
        if (currentFilter !== filterOption) {
            currentFilter = filterOption;
        }
        setFilter(currentFilter);
    }

    function calcTime () {
        const today = new Date(); 
        const options = {
            weekday: "long", year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        }; 
        return today.toLocaleDateString("en-us", options);
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
        <div className="app">
            <h1>To-do List</h1>
            <Form
                onSubmit={onSubmit}
                onChange={onChange}
                inputValue={newTask}
            />
            <div className="filterBtns-wrapper">
                <FilterButtons
                    filter={filterValue}
                    changeFilter={changeFilter}/>
            </div>
            <div className="list-wrapper">
                <ul>
                    {taskList}
                </ul>
            </div>
        </div>
    )
}