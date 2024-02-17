import React from 'react'
// import Hero from '../components/Home/Hero'
const CommitteesSlider = React.lazy(() => import('../components/Committee/CommitteesSlider'))
const Navbar = React.lazy(() => import("../components/shared/Navbar"));
const HeroTeam = React.lazy(() => import ("../components/Home/HeroTeam"));
const Footer = React.lazy(()=> import("../components/shared/Footer"));

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