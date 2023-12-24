import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
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