import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
    <ul className='navbar-items-wraper'>
        <li className='navbar-Item'>Home</li>
        <li className='navbar-Item'>About</li>
        <li className='navbar-Item'>Menu</li>
        <li className='navbar-Item'>Reservations</li>
        <li className='navbar-Item'>Order online </li>
        <li className='navbar-Item'>Signup/Login</li>
    </ul>
    </nav>
  )
}

export default Navbar