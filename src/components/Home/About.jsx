import React, { useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import SwiperCore, { EffectCards, Mousewheel } from "swiper";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../styles/about.css";

// SwiperCore.use([EffectCards, Mousewheel]);


const About = () => {
  return (
    <section>
      <div className="content">
        <div className="info">
          <p>
            <span className="movie-night">Model United Nations</span> is a simulation that imitates the procedures of the United Nations finding solutions for real-world problems, done through an academic simulation of the United Nations procedure. The MUN simulation consists of negotiation, discussion, and lively debates, which is the cornerstone of UN activity. Model UN aims to educate students about current events, international relations, diplomacy, and the United Nations agenda. Along with knowledge of the world we live in, participants develop skills including public speaking, presentation, persuasion, situation analysis, research, and critical thinking. SITMUN is an inter-collegiate conference conducted every year. Students from SiliconTech and other institutes across Odisha, participate as delegates in different committees. From each committee the best speakers are awarded.
          </p>
          {/* <button className="btn">Join</button> */}
        </div>
        <Swiper className="swiper">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
            </SwiperSlide>
          </div>
        </Swiper>
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default About;
