import React from 'react'
import HeroSection from './Content/TempoHero2'
import TravelLocations from './Content/TempoLocation'
import { TempoFeature } from './Content/TempoFeatures'
import VehicleDetails from '../VehicleDetails'
import Pricing from '../Pricing'
import Footer from '../Footer'
import Navbar from '../Navbar'



function Tempo() {
  return (
    <div className='h-screen'>
              <Navbar/>

      <HeroSection/>
      <VehicleDetails/>
      <Pricing/>
     <TempoFeature/>
     <Footer/>

    </div>
  )
}

export default Tempo