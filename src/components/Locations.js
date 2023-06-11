/** @format */

import React from "react";
import LayOut from "./LayOut";

class Locations extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: [],
		};
	}
	componentDidMount() {
		fetch("https://resource-ghibli-api.onrender.com/locations", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ locations: data });
			})
			.catch((error) => {
				console.error(error);
			});
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { locations } = this.state;
		console.log(locations);
	};

	render() {
		return (
			<>
				<LayOut>
					<section className="locations">
						<h2>List of Locations</h2>
						<button
							style={{
								backgroundColor: "white",
							}}
							onClick={this.handleSubmit}>
							SHOW LOCATIONS
						</button>
					</section>
				</LayOut>
			</>
		);
	}
}

export default Locations;
