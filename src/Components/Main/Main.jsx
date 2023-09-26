import React from 'react';
import './Main.css';
import Testimonials from './Testimonials/Testimonials';
import Aboutus from './Aboutus/Aboutus';
function Main() {
  return (
    <main>
        <section aria-labelledby='HeroTitle' className='HeroSection'>
            <div className='heroTitleContainer'>
            <h1 id="HeroTitle"> Little Lemon</h1>
            <h2 className='heroSubTitle'>UAE</h2>
            <p className='heroDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='ReserveButton'>Reserve Table</button>
            </div>
            <div className='HeroImgContainer'>
            <img className='HeroImg' src={require('../../Assets/restaurant chef B.jpg')}  alt='banner of little lemon'/>
            </div>
        </section>

        <section aria-labelledby='SpecialsID' className='SpecialsSection'>
            <div className='SpecialsTitleContainer'>
            <h1 id="SpecialsID"> This weeks specials!</h1>
            <button type='button' className='showMenuButton'> Show full menu</button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../Assets/lemon dessert.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Lemon dessert</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton'>Order a delivery </button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../Assets/greek salad.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Greek Salad</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton'>Order a delivery </button>
            </div>

            <div className='MenuContanier'>
            <img className='foodImage' src={require('../../Assets/fddine180706_photos.jpg')}  alt='banner of little lemon'/>
            <div className='foodNamePricecontainer'>
            <h2 className='foodName'>Crab Corn</h2>
            <span className='foodPrice' >$12.99</span>
            </div>
            <p className='foodDescription'>We are a family owned Mediterranean restaurant,
            Focused on traditional recipes served with a modern twist</p>
            <button type='button' className='orderButton'>Order a delivery </button>
            </div>
        </section>

        <Testimonials/>
        <Aboutus/>
    </main>
  )
}

export default Main