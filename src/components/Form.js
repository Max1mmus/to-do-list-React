import React from "react";

export const Form = ({onSubmit, onChange, inputValue}) => {
    return(
        <div className="form-wrapper">
            <form onSubmit={onSubmit}>
                <h1>To-do List</h1>
                <input 
                    type="text"
                    placeholder="Task..."
                    value={inputValue}
                    onChange={onChange}>
                </input>
                <button type="submit" className="submitBtn"> Add task </button>
            </form>
        </div>
    )
}