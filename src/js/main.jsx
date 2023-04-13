import React from "react";
import { DataProvider } from "./context/dataContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./component/menu.jsx";
import Navbar from "./component/navbar.jsx";
import BigCardPeople, { BigCard } from "./component/bigCardPeople.jsx";
import BigCardPlanets from "./component/bigCardPlanets.jsx";
import BigCardVehicles from "./component/bigCardVehicles.jsx";



//create your first component
const Main = () => {
	return (
		<DataProvider>
			<BrowserRouter>
			<Navbar />
				<Routes>
					<Route path="/" element={<Menu />} />
					<Route path="/people/:id" element={<BigCardPeople />} />
					<Route path="/planets/:id" element={<BigCardPlanets />} />
					<Route path="/vehicles/:id" element={<BigCardVehicles />} />
				</Routes>
			</BrowserRouter>
		</DataProvider>
	)

};

export default Main;
