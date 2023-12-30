import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import Footer from '../components/shared/Footer'
// import Countdown from '../components/Countdown'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Countdown/> */}
      <Gallery />
      <Footer />
    </div>
  )
}

export default Home