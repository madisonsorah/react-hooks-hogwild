import React, { useState } from "react";

function Pig({ name, image, specialty, weight, greased, highestMedal }) {
    const [isClicked, setVisibility] = useState(false)
        
    if (!isClicked) {
        return (
            <div onClick={() => setVisibility(true)}>
                <img src={ image } alt="pig"></img>
                <div>Name: { name }</div>
            </div>
        )
    } else if (isClicked) {
        return (
        <div>
            <img src={ image } alt="pig"></img>
            <div>Name: { name }</div>
            <div>Specialty: { specialty }</div>
            <div>Weight: { weight }</div>
            <div>Greased: { greased ? "True" : "False" }</div>
            <div>Highest Medal Achieved: { highestMedal }</div>
        </div>
        )
    }
}

export default Pig;