import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, TextField, Button } from "@mui/material";
import Logo from "../../assets/logo.png";

import "../../styles/button.css"

import "../../styles/about.css";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "-webkit-linear-gradient(30deg, #0a3900 50%, #072a00 50%)",
        p: 6,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        color: "#fafafa",
        position: "relative",
      }}
    >
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent={"center"}
        sx={{
          zIndex: 10,
        }}
      >
        <Stack spacing={3} width={"100%"} justifyContent={"center"}>
          <Box>
            <img src={Logo} alt="" style={{ maxWidth: "8rem" }} />
            <Typography variant="h4">SITMUN 2K24</Typography>
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </Typography>
          </Box>
          <Box>
            <Typography>Quick Links</Typography>
            <Stack direction={{ sm: "row", xs: "column" }} spacing={2}>
              <Link>Home</Link>
              <Link>Home</Link>
              <Link>Home</Link>
              <Link>Home</Link>
            </Stack>
          </Box>

          <Box>
            <Typography>Follow Us On</Typography>
            <Stack direction={{ sm: "row", xs: "column" }} spacing={2}>
              <Facebook />
              <Instagram />
              <Twitter />
            </Stack>
          </Box>
        </Stack>
        <Stack
          spacing={3}
          width={"100%"}
          padding={"3vh 3vw"}
          sx={{
            background: "#dcdddc55",
            borderRadius: "2rem",
            backdropFilter: "blur(30px)",
            zIndex: "10",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography variant="h3" textAlign={"center"}>
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
            {/* <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              /> */}
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              multiline
              rows={5}
            />
          </Stack>
          <Button sx={{
            background: 'rgb(0, 180, 0)',
            color: 'white',
            transition: 'all 0.5s ease-out',

            "&:hover" : {
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
              background: 'rgb(0, 180, 0)',
              borderRadius: '3rem',
            }
          }}>Send</Button>
        </Stack>
      </Stack>
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
    </Box>
  );
}