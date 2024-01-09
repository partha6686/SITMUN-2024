import React from 'react'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/Home/Hero'
import Gallery from '../components/Home/Gallery'
import Footer from '../components/shared/Footer'
import About from '../components/Home/About'

const Home = () => {
  return (
    <div>
    {/* //   <Navbar />
    //   <Hero />
    //   <About /> */}
      <Gallery />
      {/* <Footer /> */}
    </div>
  )
}

export default Home