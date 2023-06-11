import "./Nav.css"
import { Link } from "react-router-dom";
import Woolly from "./assets/woolly.png"
export default function Nav(){
    return (
        <nav className="nav-bar" >
       
        <Link className="nav-item" to ="/"> <img src={Woolly}/></Link>
        <Link className="nav-item" to ="/people">People</Link>
        <Link className="nav-item" to ="/films">Films</Link>
        <Link className="nav-item" to ="/locations">Locations</Link>
        </nav>
    )
}