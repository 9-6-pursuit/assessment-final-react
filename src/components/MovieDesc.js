/** @format */

import React from "react";

class MovieDesc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			film: {}
		};
	}
    componentDidMount() {
        const { id } = this.props;
		fetch(`https://resource-ghibli-api.onrender.com/films/${id}`, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ film: data });
			})
			.catch((error) => {
				console.error(error);
			});
	}
	render() {
        const { film } = this.state;
		return (
			<>
				<p style={{fontSize: "30px"}}><span>Title</span> {film.title}</p>
				<p><span>Release Date</span> {film.release_date}</p>
				<p><span>Description</span> {film.description}</p>
			</>
		);
	}
}

export default MovieDesc;
