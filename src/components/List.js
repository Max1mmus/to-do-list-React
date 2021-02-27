import React from "react";

export const List = ({input, onDelete}) => {
    return(
        <div className="list-wrapper">
            <ul>
                {
                    input.map((inputs, index) =>
                        <li key={index} index={index}>
                            <input type="checkbox"></input>
                            <span className="list-content">{inputs}</span>
                            <button className="deleteBtn" onClick={() => onDelete(index)}>
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}