import React from 'react'
// import Hero from '../components/Home/Hero'
import CommitteesSlider from '../components/Committee/CommitteesSlider'
import Navbar from '../components/shared/Navbar'
import HeroTeam from '../components/Home/HeroTeam'
import Footer from '../components/shared/Footer'

const Committee = () => {
  return (
    <>
    <Navbar />
    <HeroTeam />
    <CommitteesSlider />
    <Footer />
    </>
  )
}

export default Committee