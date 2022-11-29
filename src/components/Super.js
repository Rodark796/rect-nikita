import React from "react"
import Card from "./Main"
import data from "../data"

function Super() {
    const first = data[0];
    const second = data[1];

    return (
        <div className="card-wrapper">
            <Card data={first} />
            <Card data={second} />
        </div>
    )
}

export default Super;