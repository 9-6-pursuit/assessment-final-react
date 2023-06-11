import React from "react";
import logo from "./image/logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/"><img src={logo} alt="Ghibli logo" /></Link>
                <Link to="/movies">Movies</Link>
                <Link to="/people">People</Link>
                <Link to="/locations">Locations</Link>
            </nav>
        </div>
    )
}