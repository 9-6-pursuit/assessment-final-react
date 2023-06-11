/** @format */

import React from "react";
import LayOut from "./LayOut";
import PeopleDesc from "./PeopleDesc";

class People extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			searchValue: "",
			result: "x",
		};
	}
	componentDidMount() {
		fetch("https://resource-ghibli-api.onrender.com/people", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ people: data });
			})
			.catch((error) => {
				console.error(error);
			});
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { people, searchValue } = this.state;
		const filteredPeople = people.filter((person) =>
			person.name.toLowerCase().includes(searchValue.toLowerCase())
		);
		if (filteredPeople.length > 1 || filteredPeople.length === 0) {
			this.setState({ result: "" });
		} else {
			this.setState({ result: filteredPeople[0] });
		}
		console.log(filteredPeople);
	};

	handleChange = (event) => {
		this.setState({ searchValue: event.target.value });
	};

	render() {
		return (
			<>
				<LayOut>
					<section className="people">
						<h2>Search for a Person</h2>
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								value={this.state.searchValue}
								onChange={this.handleChange}
							/>
							<button
								type="submit"
								style={{
									backgroundColor: "lemonchiffon",
									height: "",
								}}>
								SUBMIT
							</button>
						</form>
						{this.state.result !== "x" ? (
							this.state.result === "" ? (
								"Not Found"
							) : (
								<aside>
									<PeopleDesc person={this.state.result}></PeopleDesc>
								</aside>
							)
						) : (
							<></>
						)}
					</section>
				</LayOut>
			</>
		);
	}
}

export default People;
