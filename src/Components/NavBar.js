import { Link } from "react-router-dom";
import flower from "../Image/flower.avif";
import "../CSS/NavBar.css"

export default function NavBar() {
    return (
        <nav className="Navbar">
            <div className="logo">
                <a href="/"><img src={flower} alt="Flower"/></a>
            </div>
            <aside className="pages">
                <ul>
                    <li>
                        <Link to="/Movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/location">Location</Link>
                    </li>
                </ul>
            </aside>
        </nav>

    )
}