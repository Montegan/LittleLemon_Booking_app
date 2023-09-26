import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <section aria-labelledby='ContactusHeader'  className='footerContainer'>
    <div>
    <img className='LogoImage' src={require('../../Assets/Logo.png')} height='50px' width='150px' alt=" Little Lemon Logo "  />
    </div>
    <div>
    <ul className='footerNavUl'>
        <li className='footerNavItem'><a> Home</a></li>
        <li className='footerNavItem'><a> About</a></li>
        <li className='footerNavItem'><a> Menu</a></li>
        <li className='footerNavItem'><a> Reservations</a></li>
        <li className='footerNavItem'><a> Order online</a> </li>
        <li className='footerNavItem'><a>Signup/Login</a></li>
    </ul>
    </div>
    <div>
    <h1 id='ContactusHeader'>
    Contact Us
    </h1>
    <ul className='footerNavUl'>
        <li className='footerNavItem'><a> Home</a></li>
        <li className='footerNavItem'><a> About</a></li>
        <li className='footerNavItem'><a> Menu</a></li>
        <li className='footerNavItem'><a> Reservations</a></li>
        <li className='footerNavItem'><a> Order online</a> </li>
        <li className='footerNavItem'><a>Signup/Login</a></li>
    </ul>
    </div>
    <div>
    <h1>
    Social media links
    </h1>
    <ul className='footerNavUl'>
        <li className='footerNavItem'><a> Home</a></li>
        <li className='footerNavItem'><a> About</a></li>
        <li className='footerNavItem'><a> Menu</a></li>
        <li className='footerNavItem'><a> Reservations</a></li>
        <li className='footerNavItem'><a> Order online</a> </li>
        <li className='footerNavItem'><a>Signup/Login</a></li>
    </ul>

    </div>
    </section>
  )
}

export default Footer