import React, {useState} from "react";

export const Form = ({addTask}) => {
    const [newTask, setNewTask] = useState("");
    
    function handleSubmit (e) {
        e.preventDefault();
        if (newTask === "") return;
        addTask(newTask);
        setNewTask("");
    }

    function handleChange(e) {
        setNewTask(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Task..."
                value={newTask}
                onChange={handleChange}>
            </input>
            <button type="submit" className="submitBtn"> Add task </button>
        </form>
    )
}