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
                {!readyPeople ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                ) : (
                    <ScrollPeople />
                )}
            </div>
            <div>
                <h1>Planets</h1>
                {!readyPlanets ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                ) : (
                    <ScrollPlanets />
                )}
            </div>
            <div>
                <h1>Vehicles</h1>
                {!readyVehicles ? (
                    <button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Loading...
                    </button>
                ) : (
                    <ScrollVehicles />
                )}
            </div>
        </div>
    )
}

export default Menu;