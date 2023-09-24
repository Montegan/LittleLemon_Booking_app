import React from 'react'

function Burgermenu() {
  return (
    <nav>
    <ul className='Burger-items-wraper'>
        <li className='Burger-Item'><a> Home</a></li>
        <li className='Burger-Item'><a> About</a></li>
        <li className='Burger-Item'><a> Menu</a></li>
        <li className='Burger-Item'><a> Reservations</a></li>
        <li className='Burger-Item'><a> Order online</a> </li>
        <li className='Burger-Item'><a>Signup/Login</a></li>
    </ul>
    </nav>
  )
}

export default Burgermenu