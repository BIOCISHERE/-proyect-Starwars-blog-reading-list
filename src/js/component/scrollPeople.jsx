import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext.jsx";

const ScrollPeople = () => {
    const { starWarsPeople, favorites, setFavorites } = useContext(DataContext);

    return (
        <div className="scroll">
            {starWarsPeople.map((item, index) => (
                <div className="mx-2" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png" className="card-img-top img-fluid" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <span className="card-text">Gender: {item.gender}</span><br />
                            <span className="card-text">Hair Color: {item.hair_color}</span><br />
                            <span className="card-text">Eyes-Color: {item.eye_color}</span><br />
                            <Link to={item.link} type="button" className="btn btn-outline-primary float-start mt-3">Learn more</Link>
                            <button type="button" className="btn btn-outline-warning float-end mt-3" onClick={() => {
                                let newObj = favorites.concat({"name": item.name, "to": item.link})
                                setFavorites(newObj)
                            }}>&hearts;</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ScrollPeople;