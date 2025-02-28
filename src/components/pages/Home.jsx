import React from 'react'
import Hero from '../Hero'
import Booking from '../Booking'
import About from '../About'
import Features from '../Features'
import PricingTable from '../PricingTable'
import ServiceCards from './Content/ServiceCards'
import Footer from "../Footer";
import Navbar from '../Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Booking/>
        <Features/>
        <ServiceCards/>
        <PricingTable/>
        <About/>
        <Footer/>


    </div>
  )
}

export default Home