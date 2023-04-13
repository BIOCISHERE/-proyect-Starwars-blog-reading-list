import React, { useContext } from "react";
import ScrollPeople from "./scrollPeople.jsx";
import ScrollPlanets from "./scrollPlanets.jsx";
import ScrollVehicles from "./scrollVehicles.jsx";
import { DataContext } from "../context/dataContext.jsx";

const Menu = () => {
    const { readyPeople, readyPlanets, readyVehicles } = useContext(DataContext)
    return (
        <div className="mx-4">
            <div>
                <h1>Characters</h1>
                <ScrollPeople />
            </div>
            <div>
                <h1>Planets</h1>
                <ScrollPlanets />
            </div>
            <div>
                <h1>Vehicles</h1>
                <ScrollVehicles />
            </div>
        </div>
    )
}

export default Menu;