import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Footer from '../components/shared/Footer'
import Aboutus from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home