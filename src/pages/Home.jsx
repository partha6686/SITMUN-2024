import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Home/Hero'
import Gallery from '../components/Home/Gallery'
import Footer from '../components/shared/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home