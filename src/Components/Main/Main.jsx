import React from 'react'
import './Main.css'
function Main() {
  return (
    <main>
        <section className='HeroSection'>
            <h1> Little Lemon</h1>
            <h3>UAE</h3>
            <p>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <img className='HeroImg' src={require('../../Assets/Logo.png')} height='300px' width='300px' alt='banner of little lemon'/>
        </section>
    </main>
  )
}

export default Main