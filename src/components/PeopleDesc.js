/** @format */

import React from "react";

class PeopleDesc extends React.Component {
	render() {
        const { person } = this.props;
		return (
			<>
				<p style={{fontSize: "30px"}}><span>Name: </span> {person.name}</p>
				<p><span>Age: </span> {person.age}</p>
				<p><span>Eye Color: </span> {person.eye_color}</p>
				<p><span>Hair Color: </span> {person.hair_color}</p>
			</>
		);
	}
}

export default PeopleDesc;
