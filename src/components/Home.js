import { Link } from "react-router-dom";

export default function AppNav()  {
    return (
        <nav className="web-nav">
            <ul>
                <li>
                    <Link to="/"></Link>
                </li>
            </ul>
        </nav>
    );
};