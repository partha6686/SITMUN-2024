import React from "react";
const Gallery = React.lazy(() => import("../components/Home/Gallery"));
const Navbar = React.lazy(() => import("../components/shared/Navbar"));
const Hero = React.lazy(() => import ("../components/Home/Hero"));
const Footer = React.lazy(()=> import("../components/shared/Footer"));
const CalcTimeDelta = React.lazy(()=> import("../components/Countdown"));
const Feedback = React.lazy(()=> import("../components/Feedback"));
const About = React.lazy(()=> import("../components/Home/About"));
const TimelineView = React.lazy(()=> import("../components/Home/Timeline"));
const Message = React.lazy(()=> import("../components/Home/Message"));

import "../styles/circles.css"
import Faq from "../components/Home/Faq";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CalcTimeDelta />
      <About />
      <Gallery />
      <TimelineView />
      <Feedback />
      <Message />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
