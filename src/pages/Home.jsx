import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/shared/Footer";
import CalcTimeDelta from "../components/Countdown";
import About from "../components/Home/About";
import TimelineView from "../components/Home/Timeline";
import Message from "../components/Home/Message";
import Faq from "../components/Home/Faq";

const Gallery = React.lazy(() => import("../components/Home/Gallery"));
const Feedback = React.lazy(()=> import("../components/Feedback"));

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
