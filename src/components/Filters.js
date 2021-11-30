import React from "react";

function Filters({ showGreased, sortCategory, sortBy }) {
    return (
        <div>
            <select name="greased filter" onChange={showGreased}>
                <option value="all">All</option>
                <option value="greased">Greased</option>
            </select>
            <select name="name filter" onChange={sortCategory} value= {sortBy}>
                <option value="filter pigs">Sort Pigs</option>
                <option value="alphabetically">A - Z</option>
                <option value="weight">Weight</option>
            </select>
        </div>
    )
}

export default Filters;