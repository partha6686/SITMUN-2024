import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroImg from "../../assets/hero/hero2.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";

//css file
import "../../styles/sideBar.css"

const Hero = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        // background: `url(${HeroImg}),linear-gradient(#4e9f3d, #4E9F3D)`,
        backgroundImage: `linear-gradient(137deg, #191a1978 0%, #191a1978 100%), url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4vh 2vw 0 0",
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 30px 50px, rgba(0, 0, 0, 0.22) 0px 20px 15px",
      }}
    >
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={"space-between"}
        width={"100%"}
        height={"100%"}
      >
        <SideBar />
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              padding: "0 3vw",
              maxWidth: "70%",
            }}
            justifyContent={"center"}
          >
            <Typography
              variant="h1"
              fontFamily={"Marcellus"}
              fontWeight={600}
              textAlign={"center"}
              color={"#D8E9A8"}
              data-aos="zoom-in"
            >
              <span
                style={{
                  color: "red",
                }}
              >
                SIT
              </span>
              MUN 20
              <span
                style={{
                  color: "white",
                }}
              >
                24
              </span>
            </Typography>
            <Typography
              variant="h4"
              color={"#fafafa"}
              textAlign={"center"}
              fontFamily={"Dancing Script"}
              fontWeight={700}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              quasi in ratione vel amet doloremque exercitationem maxime id,
              magni sequi perspiciatis, repudiandae necessitatibus veritatis!
              Voluptatibus sequi iure sed commodi accusantium.
            </Typography>
          </Stack>
        </Box>
        <Stack
          spacing={5}
          justifyContent={"center"}
          direction={{ xs: "row", md: "column" }}
          paddingBottom={{ xs: "4vh", md: 0 }}
        >
          <Button>
            <InstagramIcon
              sx={{ fontSize: { md: "3rem", xs: "2rem" }, color: "white" }}
            />
          </Button>
          <Button>
            <WhatsAppIcon
              sx={{ fontSize: { md: "3rem", xs: "2rem" }, color: "white" }}
            />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;

export const SideBar = () => {
  return(
    <Stack
          direction={"column-reverse"}
          height={"100%"}
          justifyContent={"space-around"}
          sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
        >
          <NavLink to={"/"}>
            <Typography
              variant="h6"
              fontFamily={"DM Serif Display"}
              className="navLink"
            >
              Home
            </Typography>
          </NavLink>

          <NavLink to={"/teams"}>
            <Typography
              variant="h6"
              fontFamily={"DM Serif Display"}
              className="navLink"
            >
              Teams
            </Typography>
          </NavLink>

          <NavLink to={"/committee"}>
            <Typography
              variant="h6"
              fontFamily={"DM Serif Display"}
              className="navLink"
            >
              Committee
            </Typography>
          </NavLink>
        </Stack>
  )
}
