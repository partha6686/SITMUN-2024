import React from "react";
const Navbar = React.lazy(() => import("../components/shared/Navbar"));
const Hero = React.lazy(() => import("../components/Home/Hero"));
const Footer = React.lazy(() => import("../components/shared/Footer"));
import CalcTimeDelta from "../components/Countdown";
import About from "../components/Home/About";
import TimelineView from "../components/Home/Timeline";
import Message from "../components/Home/Message";
import Faq from "../components/Home/Faq";
import Gallery from "../components/Home/Gallery";
import Feedback from "../components/Feedback";

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
