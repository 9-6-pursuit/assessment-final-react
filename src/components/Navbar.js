import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <div className='header'>
        <nav className='navbar navbar-expand-lg'>
        
                <Link className='nav-item' to='/'>
                Home
                </Link>

                <Link className='nav-item' to='/movies'>
                Movies
                </Link>

                <Link className='nav-item' to='/people'>
                People
                </Link>

                <Link className='nav-item' to='/locations'>
                Locations
                </Link>

        </nav>
    </div>
  )
}

export default Navbar