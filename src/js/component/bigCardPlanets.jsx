import React, { useContext } from "react";
import { DataContext } from "../context/dataContext.jsx";
import { useParams } from "react-router";

const BigCardPlanets = () => {
    const { starWarsPlanets } = useContext(DataContext);
    const {id} = useParams()
    return (
        <>
            <div className="border-bottom border-danger mx-5">
                <div className="row">
                    <div className="col-6">
                        <img src="https://www.vinaporta.cl/wp-content/uploads/2021/03/800x600.png" className="img-fluid mb-4" />
                    </div>
                    <div className="col-6 text-center">
                        <h1>{starWarsPlanets[id].name}</h1>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus cursus leo in pharetra. Quisque et velit nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc pharetra iaculis consequat. Vivamus viverra est dapibus neque tincidunt, eu feugiat felis aliquet. Morbi nisi justo, ornare id volutpat vel, luctus nec dolor. Aenean id justo mi. Cras varius velit ac nibh rutrum, at ullamcorper massa sollicitudin. Nam sit amet libero odio. Suspendisse ultricies ac quam sed convallis. In tincidunt augue in velit placerat, ac rhoncus massa vestibulum. Proin blandit sagittis est, ut sodales sem ultricies quis. Sed molestie accumsan aliquet. Mauris massa nisl, malesuada id metus at, congue sagittis risus.</p>
                    </div>
                </div>
            </div>
            <div className="mx-5 mt-4 text-danger">
                <div className="row">
                    <div className="col-2 text-center">
                        <h4>Name</h4>
                        <p>{starWarsPlanets[id].name}</p>
                    </div>
                    <div className="col-2 text-center">
                        <h4>Climate</h4>
                        <p>{starWarsPlanets[id].climate}</p>
                    </div>
                    <div className="col-2 text-center">
                        <h4>Population</h4>
                        <p>{starWarsPlanets[id].population}</p>
                    </div>
                    <div className="col-2 text-center">
                        <h4>Orbital Period</h4>
                        <p>{starWarsPlanets[id].orbital_period}</p>
                    </div>
                    <div className="col-2 text-center">
                        <h4>Rotation Period</h4>
                        <p>{starWarsPlanets[id].rotation_period}</p>
                    </div>
                    <div className="col-2 text-center">
                        <h4>Diameter</h4>
                        <p>{starWarsPlanets[id].diameter}</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BigCardPlanets;
