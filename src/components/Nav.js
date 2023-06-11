import { Link } from "react-router-dom";
import GhibliLogo from "/Users/finesse./Desktop/assessment-final-react/src/assests/ghibli-logo.png"


export default function Nav() {
    return (
        <> 
        <header>
            <div className="nav-box">
                <nav className="nav-bar">
                    <Link className="home-logo" to="/">
                        <img src={GhibliLogo} alt="ghibli-logo" className="ghilbi-logo"/>
                    </Link>
                    <Link className="movies-link" to="/movies"> Movies </Link>
                    <Link className="people-link" to="/people"> People</Link>
                    <Link className="locations-link" to="/locations">Locations</Link>

                </nav>
                </div> 
            </header></>
    )
}