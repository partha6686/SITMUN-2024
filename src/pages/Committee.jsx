import React from 'react'
import Hero from '../components/Home/Hero'
import CommitteesSlider from '../components/Committee/CommitteesSlider'
import Navbar from '../components/shared/Navbar'

const Committee = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <CommitteesSlider />
    </>
  )
}

export default Committee