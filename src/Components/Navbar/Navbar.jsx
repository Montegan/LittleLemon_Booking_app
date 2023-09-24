import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
    <ul className='navbar-items-wraper'>
        <li className='navbar-Item'><a> Home</a></li>
        <li className='navbar-Item'><a> About</a></li>
        <li className='navbar-Item'><a> Menu</a></li>
        <li className='navbar-Item'><a> Reservations</a></li>
        <li className='navbar-Item'><a> Order online</a> </li>
        <li className='navbar-Item'><a>Signup/Login</a></li>
    </ul>
    </nav>
  )
}

export default Navbar