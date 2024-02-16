import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroImg from "../../assets/hero/hero2.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";
import { heroComm } from "../../data/heroComm";
import Heading from "../shared/Heading";
import styles from "../../styles/Team.module.css";
import { heroTeam } from "../../data/heroTeam";

//css file
import "../../styles/sideBar.css";

const HeroTeam = () => {
  const [imgUrlIdx, setImgUrlIdx] = useState(0);

  useEffect(() => {
    const changeImgUrl = () => {
      setImgUrlIdx((idx) => (idx == heroComm.length - 1 ? 0 : idx + 1));
    };
    const intrval = setInterval(changeImgUrl, 2000);
    return () => {
      clearInterval(intrval);
    };
  }, []);

  return (
    <div className={styles.head}>
      <div className={styles.head2}>
        <Box
          sx={{
            height: "70vh",
            width: "100%",
            // background: `url(${HeroImg}),linear-gradient(#4e9f3d, #4E9F3D)`,
            backgroundImage: `linear-gradient(120deg, rgba(25,26,25,0.9) 71%, rgba(30,81,40,0.8) 97%),url(${heroTeam[imgUrlIdx]})`,

            backgroundSize: "cover",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            transition: "backgroundImage ease-in",
          }}
        > 
          <h1>
            <Heading heading={"Our Committees"} />
          </h1>
        </Box>
      </div>
    </div>
  );
};

export default HeroTeam;