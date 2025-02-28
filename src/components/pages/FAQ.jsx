import React from 'react'
import FaqHero from './Content/FaqHero'
import FaqContent from './Content/FaqContent'
import Footer from "../Footer";
import Navbar from '../Navbar'


function FAQ() {
  return (
    <div className=''>
                <Navbar/>

<FaqHero/>
<FaqContent/>
<Footer/>

    </div>
  )
}

export default FAQ