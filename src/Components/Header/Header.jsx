import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Header.css'
import Burgermenu from '../Navbar/Burgermenu';
function Header() {
  return (
    <header className='Headercontainer'>
     <img className='LogoImage' src={require('../../Assets/Logo.png')} height='50px' width='150px' alt=" Little Lemon Logo "  />
      <Navbar></Navbar>
    </header>
  )
}

export default Header