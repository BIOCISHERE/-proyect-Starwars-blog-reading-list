import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [starWarsPeople, setStarWarsPeople] = useState([]);
    const [starWarsPlanets, setStarWarsPlanets] = useState([]);
    const [starWarsVehicles, setStarWarsVehicles] = useState([]);
    const [readyPeople, setReadyPeople ] = useState(false);
    const [readyPlanets, setReadyPlanets] = useState(false);
    const [readyVehicles, setReadyVehicles] = useState(false);


    const peopleFetch = async () => {
        var getArray1 = [];
        let toArray1 = [
            { "to": 1 }, { "to": 2 }, { "to": 3 }, { "to": 4 }, { "to": 5 }, { "to": 6 }, { "to": 7 }, { "to": 8 }, { "to": 9 }, { "to": 10 },
            { "to": 11 }, { "to": 12 }, { "to": 13 }, { "to": 14 }, { "to": 15 }, { "to": 16 }, { "to": 18 }, { "to": 19 }, { "to": 20 }, { "to": 21 },
            { "to": 22 }, { "to": 23 }, { "to": 24 }, { "to": 25 }, { "to": 26 }, { "to": 27 }, { "to": 28 }, { "to": 29 }, { "to": 30 }, {"to": 31}
        ];

        for (let i = 0; i < toArray1.length; i++) {
            const responsePeople = await fetch(`https://www.swapi.tech/api/people/${toArray1[i].to}`);
            const jsonPeople = await responsePeople.json();

            let newObj = {
                "height": jsonPeople.result.properties.height,
                "mass": jsonPeople.result.properties.mass,
                "hair_color": jsonPeople.result.properties.hair_color,
                "skin_color": jsonPeople.result.properties.skin_color,
                "eye_color": jsonPeople.result.properties.eye_color,
                "birth_year": jsonPeople.result.properties.birth_year,
                "gender": jsonPeople.result.properties.gender,
                "name": jsonPeople.result.properties.name,
                "homeworld": jsonPeople.result.properties.homeworld,
                "description": jsonPeople.result.description,
                "link": `/people/${i}`
            };
            console.log(newObj)
            getArray1.push(newObj);
        };
        setStarWarsPeople(getArray1);
        setReadyPeople(true);
    };

    const planetsFetch = async () => {
        var getArray2 = [];
        let toArray2 = [
            { "to": 1 }, { "to": 2 }, { "to": 3 }, { "to": 4 }, { "to": 5 }, { "to": 6 }, { "to": 7 }, { "to": 8 }, { "to": 9 }, { "to": 10 },
            { "to": 11 }, { "to": 12 }, { "to": 13 }, { "to": 14 }, { "to": 15 }, { "to": 16 }, { "to": 17 }, { "to": 18 }, { "to": 19 }, { "to": 20 },
            { "to": 21 }, { "to": 22 }, { "to": 23 }, { "to": 24 }, { "to": 25 }, { "to": 26 }, { "to": 27 }, { "to": 28 }, { "to": 29 }, { "to": 30 }
        ]
        for (let j = 0; j < toArray2.length; j++) {
            const responsePeople = await fetch(`https://www.swapi.tech/api/planets/${toArray2[j].to}`);
            const jsonPeople = await responsePeople.json();

            let newObj = {
                "diameter": jsonPeople.result.properties.diameter,
                "rotation_period": jsonPeople.result.properties.rotation_period,
                "orbital_period": jsonPeople.result.properties.orbital_period,
                "gravity": jsonPeople.result.properties.gravity,
                "population": jsonPeople.result.properties.population,
                "climate": jsonPeople.result.properties.climate,
                "terrain": jsonPeople.result.properties.terrain,
                "surface_water": jsonPeople.result.properties.surface_water,
                "name": jsonPeople.result.properties.name,
                "description": jsonPeople.description,
                "link": `/planets/${j}`

            };
            console.log(newObj)
            getArray2.push(newObj);
        };
        setStarWarsPlanets(getArray2);
        setReadyPlanets(true)
    };

    useEffect(() => {
        peopleFetch();
        planetsFetch();
        vehiclesFetch();
    }, [])
    console.log(starWarsPeople)
    console.log(starWarsPlanets)
    console.log(starWarsVehicles)

    const vehiclesFetch = async () => {
        var getArray3 = [];
        let toArray3 = [
            { "to": 4 }, { "to": 7 }, { "to": 6 }, { "to": 8 }, { "to": 14 }, { "to": 18 }, { "to": 16 }, { "to": 19 }, { "to": 20 }, { "to": 24 },
            { "to": 25 }, { "to": 30 }, { "to": 26 }, { "to": 33 }, { "to": 34 }, { "to": 35 }, { "to": 36 }, { "to": 37 }, { "to": 38 }, { "to": 42 },
            { "to": 44 }, { "to": 45 }, { "to": 46 }, { "to": 50 }, { "to": 51 }, { "to": 53 }, { "to": 54 }, { "to": 55 }, { "to": 56 }, { "to": 57 }
        ]
        for (let k = 0; k < toArray3.length; k++) {
            const responsePeople = await fetch(`https://www.swapi.tech/api/vehicles/${toArray3[k].to}`);
            const jsonPeople = await responsePeople.json();

            let newObj = {
                "model": jsonPeople.result.properties.model,
                "vehicle_class": jsonPeople.result.properties.vehicle_class,
                "manufacturer": jsonPeople.result.properties.manufacturer,
                "cost_in_credits": jsonPeople.result.properties.cost_in_credits,
                "length": jsonPeople.result.properties.length,
                "crew": jsonPeople.result.properties.crew,
                "passengers": jsonPeople.result.properties.passengers,
                "max_atmosphering_speed": jsonPeople.result.properties.max_atmosphering_speed,
                "cargo_capacity": jsonPeople.result.properties.cargo_capacity,
                "consumables": jsonPeople.result.properties.consumables,
                "name": jsonPeople.result.properties.name,
                "description": jsonPeople.description,
                "link": `/vehicles/${k}`
            };
            console.log(newObj)
            getArray3.push(newObj);
        }
        setStarWarsVehicles(getArray3);
        setReadyVehicles(true);
    }


    return (
        <DataContext.Provider value={{ starWarsPeople, starWarsPlanets, starWarsVehicles, setStarWarsPeople, setStarWarsPlanets, setStarWarsVehicles, readyPeople, readyPlanets, readyVehicles, peopleFetch, planetsFetch, vehiclesFetch }}>
            {children}
        </DataContext.Provider>
    )
}