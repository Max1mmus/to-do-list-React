import React from "react";

export const List = ({tasks, onDelete, checkboxChange}) => {
    return(
        <div className="list-wrapper">
            <ul>
                {tasks.map((task, index) =>
                    <li key={`list-${index}`}>
                        <input 
                            type="checkbox" 
                            id={`input-${index}`} 
                            onChange={(e) => checkboxChange(index,e)}
                            checked={task.isDone}>
                        </input>
                        <label className="list-label" htmlFor={`item-${index}`}>
                            {task.taskContent}
                        </label>
                        <button className="deleteBtn" onClick={() => onDelete(index)}>
                            Delete
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
}