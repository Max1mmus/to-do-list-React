import React from 'react';

export const List = (props) => {
    return(
        <div className='listClass'>
            <ul>
                {
                    props.input.map((inputs, index) =>
                    <li 
                        key={index}
                        index={index}>
                            <input type='checkbox'></input>
                            <span>
                                {inputs}
                            </span>
                            <button 
                                className='deleteBtn'
                                onClick={() => props.delete(index)}>
                                Delete
                            </button>
                    </li>)
                }
            </ul>
        </div>
    )
}