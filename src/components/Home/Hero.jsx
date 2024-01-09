import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroImg from "../../assets/hero/hero2.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
      }}
    >
      <Stack
        direction={{md: "row", xs: 'column'}}
        justifyContent={"space-between"}
        width={"100%"}
        height={"100%"}
      >
        <Stack
          direction={"column-reverse"}
          height={"100%"}
          justifyContent={"space-around"}
          sx={{ display: {md: 'flex', sm: 'none', xs: 'none'}}}
        >
          <Typography
            sx={{
              transform: "rotate(270deg)",
              color: "#1E5128",
              textTransform: "uppercase",
              background: "#D8E9A8",
              padding: "2vw 2vh",
              cursor: "pointer",

              "&:hover": {
                color: "black",
              },
            }}
            variant="h5"
            fontFamily={"DM Serif Display"}
          >
            Home
          </Typography>

          <Typography
            sx={{
              transform: "rotate(270deg)",
              textTransform: "uppercase",
              padding: "2vw 2vh",
              cursor: "pointer",
              color: "#fafafa",

              "&:hover": {
                color: "black",
              },
            }}
            variant="h5"
            fontFamily={"DM Serif Display"}
          >
            Home
          </Typography>

          <Typography
            sx={{
              transform: "rotate(270deg)",
              textTransform: "uppercase",
              padding: "2vw 2vh",
              cursor: "pointer",
              color: "#fafafa",

              "&:hover": {
                color: "black",
              },
            }}
            variant="h5"
            fontFamily={"DM Serif Display"}
          >
            Home
          </Typography>

          <Typography
            sx={{
              transform: "rotate(270deg)",
              textTransform: "uppercase",
              padding: "2vw 2vh",
              cursor: "pointer",
              color: "#fafafa",

              "&:hover": {
                color: "black",
              },
            }}
            variant="h5"
            fontFamily={"DM Serif Display"}
          >
            Home
          </Typography>
        </Stack>
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
            <Typography variant="h1" fontFamily={"Marcellus"} fontWeight={600} textAlign={"center"} color={"#D8E9A8"} 
            data-aos="zoom-in">
              <span style={{
                color: 'red'
              }}>SIT</span>MUN 20<span style={{
                color: 'white'
              }}>24</span>
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
        <Stack spacing={5} justifyContent={"center"} direction={{xs: "row", md: 'column'}} paddingBottom={{xs: '4vh', md: 0}}>
          <Button><InstagramIcon sx={{ fontSize: {md: "3rem", xs: '2rem'}, color: 'white' }} /></Button>
          <Button><WhatsAppIcon sx={{ fontSize: {md: "3rem", xs: '2rem'}, color: 'white' }} /></Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Hero;
