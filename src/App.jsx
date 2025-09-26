import { useState } from 'react'
import Carousel from './Components/Carousel'
import Navbar from './Components/Navbar'
import FeaturedProducts from './Components/FeaturedProducts'
import SocialTimeline from './Components/SocialTimeline'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

function App() {


  return (
    <div>
      <Navbar/>
     <Carousel/>
     <FeaturedProducts/>
     <SocialTimeline/>
     <AboutUs/>
     <ContactUs/>
     <Footer/>
    </div>
  )
}

export default App
