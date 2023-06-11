/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

class LayOut extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<>
				<header>
					<nav>
						<Link to="/">
							<img src={logo} alt="logo" height="50px" />
						</Link>
						<Link to="/movies">Movies</Link>
						<Link to="/people">People</Link>
						<Link to="/locations">Locations</Link>
					</nav>
				</header>
				<main>{children}</main>
			</>
		);
	}
}

export default LayOut;
