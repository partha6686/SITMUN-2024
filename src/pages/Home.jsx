import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Home/Hero";
import Gallery from "../components/Home/Gallery";
import Footer from "../components/shared/Footer";
import CalcTimeDelta from "../components/Countdown";
import Feedback from "../components/Feedback";
import About from "../components/Home/About";
import TimelineView from "../components/Home/Timeline";
import HoverFooter from "../components/shared/HoverFooter";
import SecGenMsg from "../components/Home/Message";

const Home = () => {
  return (
    <div
      // style={{
      //   background:
      //     "linear-gradient(137deg, rgba(78,159,61,1) 0%, rgba(0,0,0,1) 100%)",
      //   color: "white",
      // }}
    >
      <Navbar />
      <Hero />
      <CalcTimeDelta />
      <About />
      <Gallery />
      <TimelineView />
      <Feedback />
      <SecGenMsg />
      <Footer />
      <HoverFooter />
    </div>
  );
};

export default Home;
