import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Home/Hero'
import Gallery from '../components/Home/Gallery'
import Footer from '../components/shared/Footer'
import CalcTimeDelta from '../components/Countdown'
import Feedback from '../components/Feedback'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <CalcTimeDelta />
      <Gallery />
      <Feedback/>
      <Footer />
    </div>
  )
}

export default Home