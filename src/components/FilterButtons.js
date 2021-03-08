import React from "react";

export function FilterButtons ({changeFilter, filter}) {
    const filterOptions = ["All tasks", "Unfinished", "Completed"];
    return (
        filterOptions.map((filterOption, index) =>
            <button 
                key={`filter-btn${index}`} 
                onClick={() => changeFilter(filterOption)}
                style={
                    filter === filterOption ?
                    {backgroundColor: "rgba(0, 0, 0, 0.55)", color: "white"} : null
                }
            >
                {filterOption}
            </button>
        )
    )
}