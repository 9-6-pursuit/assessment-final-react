import { Link } from "react-router-dom"

import React from 'react'

function Nav() {
  return (
    <nav className="nav">
        <Link to= "/"><img src="https://seeklogo.com/images/E/environmental-friendly-logo-90F2E54F33-seeklogo.com.png" alt="Home" style={{width:'50px', height: '50px'}} /></Link>
        <Link to= "/movies">Movies</Link>
        <Link to= "/people">People</Link>
        <Link to= "/locations">Locations</Link>
    </nav>
  )
}

export default Nav