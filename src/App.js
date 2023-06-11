/** @format */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/movies" element={<Movies></Movies>}></Route>
					<Route path="/people" element={<People></People>}></Route>
					<Route path="/locations" element={<Locations></Locations>}></Route>
				</Routes>
			</Router>
		);
	}
}

export default App;
