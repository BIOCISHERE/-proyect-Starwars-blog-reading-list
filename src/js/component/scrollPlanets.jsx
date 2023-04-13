import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext.jsx";

const ScrollPlanets = () => {
    const { starWarsPlanets } = useContext(DataContext);


    return (
        <div className="scroll">
            {starWarsPlanets.map((item, index) => (
                <div className="mx-2" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <span className="card-text">Population: {item.population}</span><br />
                            <span className="card-text">Terrain: {item.terrain}</span><br />
                            <Link to={item.link} type="button" className="btn btn-outline-primary float-start mt-3">Learn more</Link>
                            <button type="button" className="btn btn-outline-warning float-end mt-3">&hearts;</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScrollPlanets