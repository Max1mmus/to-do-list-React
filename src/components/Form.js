import React from "react";

export const Form = ({onSubmit, onChange, inputValue}) => {
    return(
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Task..."
                value={inputValue}
                onChange={onChange}>
            </input>
            <button type="submit" className="submitBtn"> Add task </button>
        </form>
    )
}