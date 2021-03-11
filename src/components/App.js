import React, {useState, useEffect} from "react";
import {FilterButtons} from "./FilterButtons";
import {Form} from "./Form";
import {ListItem} from "./ListItem";
//localStorage.clear();

export function App () {
    const [allTasks, setAllTasks] = useState([]);
    const [filterValue, setFilter] = useState("All tasks");

    function addTask(newTask) {
        const task = {
            taskContent: newTask,
            isDone: false,
            timeStamp: calcTime(),
            id: Date.now().toString()
        };

        setAllTasks([...allTasks, task]);
    }

    const removeTask = (index) => {
        const newTasks = allTasks.filter((_, taskIndex) => taskIndex !== index);
        setAllTasks(newTasks);
    }

    const checkboxChange = (e) => {
        const copiedTasks = allTasks.map(task => {
            if (task.id === e.target.id) return {...task, isDone: !task.isDone} 
            return task;
        });
        setAllTasks(copiedTasks);
    }
    const taskFilters = {
        "All tasks" : () => true,
        "Unfinished" : task => !task.isDone,
        "Completed" : task => task.isDone
    }
    
    const taskList = allTasks.filter(taskFilters[filterValue]).map((task, index) => 
        <ListItem
            checkboxChange={(e) => checkboxChange(e)}
            onDelete={() => removeTask(index)}
            id={task.id}
            task={task}
            key={`list-${index}`}  
        />
    )

    function changeFilter(filterOption) {
        let currentFilter = [...filterValue];
        if (currentFilter !== filterOption) currentFilter = filterOption;
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
            <Form addTask={addTask} />
            <div className="filterBtns-wrapper">
                <FilterButtons
                    filter={filterValue}
                    changeFilter={changeFilter}
                />
            </div>
            <div className="list-wrapper">
                <ul>
                    {taskList}
                </ul>
            </div>
            <footer>
                Built with <span id="heart"> ❤ </span> 
                By: <a id="Max1mmus" href="https://github.com/Max1mmus">Max1mmus</a>
            </footer>
        </div>
    )
}