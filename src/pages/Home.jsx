import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Home/Hero";
const Gallery = React.lazy(() => import("../components/Home/Gallery"));
const Footer = React.lazy(()=> import("../components/shared/Footer"));
const CalcTimeDelta = React.lazy(()=> import("../components/Countdown"));
const Feedback = React.lazy(()=> import("../components/Feedback"));
const About = React.lazy(()=> import("../components/Home/About"));
const TimelineView = React.lazy(()=> import("../components/Home/Timeline"));
const Message = React.lazy(()=> import("../components/Home/Message"));
const Faq = React.lazy(()=> import("../components/Home/Faq"));

import "../styles/circles.css"


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
