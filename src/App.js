import React from 'react';
import Navbar from './components/Navbar';
import Add from './components/Add';
import Hero from './components/Hero';
import Products from './components/Products';
import Deals from './components/Deals';
import Footer from './components/Footer';
import Trending from './components/Trending';

export default function App() {
  return (<>
    <div className=''>
      {/* navbar*/}
      <Navbar/>
      {/* add*/}
      <Add/>
      {/* hero*/}
      <Hero/>
      {/* products*/}
      <Products/>
      {/* deals*/}
      <Deals />
      {/* Trending*/}
      <Trending/>
      {/* footer*/}
      <Footer/>

    </div>
    </>
  )
}


