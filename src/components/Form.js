import React from 'react';

export const Form = (props) => {
    return(
        <div className='inputField'>
            <form onSubmit={props.onSubmit}>
                <h1>To-do List</h1>
                <input 
                    type='text'
                    placeholder='Task...'
                    value={props.value}
                    onChange={props.onChange}>
                </input>
                <button type='submit' className='submitBtn'> Add task </button>
            </form>
        </div>
    )
}