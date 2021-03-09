import React from "react";

export const ListItem = ({onDelete, checkboxChange, index, task}) => {
    return(
        <li style={{ backgroundColor: task.isDone ? "#8EFFEF57" : null }}>
            <input 
                type="checkbox" 
                id={id} 
                onChange={checkboxChange}
                checked={task.isDone}>
            </input>
            <div className="card-content">
                <p className="task-text">{task.taskContent}</p>
                <p className="timestamp">{task.timeStamp}</p>
            </div>
            <button className="deleteBtn" onClick={onDelete}>
                Delete
            </button>
        </li>   
    )
}