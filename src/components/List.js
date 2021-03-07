import React from "react";

export const List = ({tasks, onDelete, checkboxChange}) => {
    return(
        <div className="list-wrapper">
            <ul>
                {tasks.map((task, index) =>
                    <li key={`list-${index}`} style={{ backgroundColor: task.isDone ? '#8EFFEF57' : null }}>
                        <input 
                            type="checkbox" 
                            id={`input-${index}`} 
                            onChange={(e) => checkboxChange(index,e)}
                            checked={task.isDone}>
                        </input>
                        <div className="card-content">
                            <p className="task-text">{task.taskContent}</p>
                            <p className="timestamp">{task.timeStamp}</p>
                        </div>
                        <button className="deleteBtn" onClick={() => onDelete(index)}>
                            Delete
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
}