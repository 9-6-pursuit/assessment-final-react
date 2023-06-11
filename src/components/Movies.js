/** @format */

import React from "react";
import LayOut from "./LayOut";
import MovieDesc from "./MovieDesc";

class Movies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			films: [],
			desc: null,
		};
	}
	componentDidMount() {
		fetch("https://resource-ghibli-api.onrender.com/films", {
			method: "GET",
		})
			.then((response) => response.json())
			.then((data) => {
				this.setState({ films: data });
			})
			.catch((error) => {
				console.error(error);
			});
	}
	render() {
		const { films, desc } = this.state;

		const afterSelect = (event) => {
			const selectedFilmId = event.target.value;
			if (selectedFilmId !== "x") {
				this.setState({ desc: <MovieDesc id={selectedFilmId} /> });
			}else{
				this.setState({ desc: null });
            }
		};

		return (
			<>
				<LayOut>
					<section className="movies">
						<h2>Select a Movie</h2>
						<select onChange={afterSelect}>
							<option value="x" key=""></option>
							{films.map((film) => {
								return (
									<option value={film.id} key={film.id}>
										{film.title}
									</option>
								);
							})}
						</select>
						{desc? <aside>{desc}</aside> : <></>}
					</section>
				</LayOut>
			</>
		);
	}
}

export default Movies;
