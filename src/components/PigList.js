import React, { useState } from "react";
import Filters from "./Filters";
import Pig from "./Pig";

function PigList({ pigData }) {
    const [greasedFilter, setFilter] = useState("All")
    const [sortByCategory, setSort] = useState("Sort Pigs")
	// [sortedPigs, setSort] = useState("Sort Pigs")

    function handleGreased(e) {
		setFilter(e.target.value);
	}

    function handleCategory(e) {
        setSort(e.target.value);
    }

    const pigsDisplay = pigData.filter((pig) => {
        return greasedFilter === "All" || pig.greased}).sort((hogA,hogB) => {
            if (sortByCategory === "Sort Pigs") {
                return true;
            } else if (sortByCategory === "weight") {
                return hogA.weight - hogB.weight
            } else {
                return hogA.name.localeCompare(hogB.name);
            }
        })
	
	// function handleSort() {
	// }

    return (
        <div>
            <Filters showGreased={handleGreased} sortCategory={handleCategory} sortBy={sortByCategory} />
            <div>{pigsDisplay.map((pig) => (
                <Pig
                    name={pig.name}
                    image={pig.image}
                    specialty={pig.specialty}
                    weight={pig.weight}
                    greased={pig.greased}
                    highestMedal={pig["highest medal achieved"]}
                    key={pig.id}
                />
                ))}
            </div>
        </div>
    )
}

export default PigList;