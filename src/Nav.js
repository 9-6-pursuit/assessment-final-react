import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='header'>
        <div></div>
        <div>
            <Link to={'/'}>
                <img
                className='img-icon'
                src='https://m.media-amazon.com/images/I/31KfSwYLpDL._CR129,0,350,350_UX256.jpg'
                alt='logo'
                >
                </img>
            </Link>
        </div>

        <div>
            <Link to={"/movies"} style={{textDecoration: 'none'}}>
                <h2>Movies</h2>
            </Link>
        </div>
        <div>
            <Link to={"/people"} style={{textDecoration: 'none'}}>
                <h2>People</h2>
            </Link>
        </div>
        <div>
            <Link to={"/locations"} style={{textDecoration: 'none'}}>
                <h2>Locations</h2>
            </Link>
        </div>
        <div></div>
    </nav>
  )
}

export default Nav