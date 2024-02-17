import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, TextField, Button } from "@mui/material";
import Logo from "../../assets/logo.png";

import { useState } from "react";

import "../../styles/about.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = () => {
    const recipient = "delegateaffairssitmun24@gmail.com";
    const subject = "I have a query";
    const name = `${name}`; // Replace with the actual name
    const message = `${message}`; // Replace with the actual message

    // Generate mailto link
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${encodeURIComponent(
      name
    )}%0D%0A%0D%0AMessage: ${encodeURIComponent(message)}`;

    // Open default email client with mailto link
    window.location.href = mailtoLink;
  };

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
        spacing={2}
      >
        <Stack spacing={4} width={"100%"} justifyContent={"center"} zIndex={10}>
          <Stack
            direction={{sm: "row", xs: 'column'}}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Logo} alt="" style={{ maxWidth: "8rem" }} />
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Typography variant="h3" fontFamily="comfortaa,cursive">SITMUN 2024</Typography>
              <Typography variant="subtitle1" color={"#a7fd6a"} textAlign={"center"} fontFamily="comfortaa,cursive">
               REVOLUTION THROUGH RESOLUTION
              </Typography>
            </Stack>
          </Stack>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={{sm: "row", xs: 'column'}}
            spacing={3}
          >
            <Stack spacing={1} justifyContent={"center"} alignItems={"center"} display={{xs: 'none', sm: 'flex'}}>
              <Typography variant="h5" fontWeight={"bold"} fontFamily="comfortaa,cursive">
                Links
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#a7fd6a",
                  },
                  "& a:hover": {
                    cursor: "pointer",
                    color: "#fafafa",
                  },
                }}
              >
                <Link to="/">Home</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/committe">Committee</Link>
                <Link>Register</Link>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={"bold"}fontFamily="comfortaa,cursive">
                Follow Us On
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Facebook color="#a7fd6a" />
                <Instagram color="#a7fd6a" />
                <Twitter color="#a7fd6a" />
              </Stack>
            </Stack>
          </Stack>

          <Stack
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5" fontWeight={"bold"} fontFamily="comfortaa,cursive">
              Contact us
            </Typography>
            <Stack direction={"column"} spacing={0} alignItems={"center"}>
              <Typography variant="body1" color={"#a7fd6a"}fontFamily="comfortaa,cursive">
                Deputy Secretary General
              </Typography>
              <Typography variant="body1" color={"#a7fd6a"}fontFamily="comfortaa,cursive">
                SIT MUN 2024
              </Typography>
              <Typography variant="body1" color={"#a7fd6a"}fontFamily="comfortaa,cursive">
                Silicon Institute of Technology
              </Typography>
              <Typography variant="body1" color={"#a7fd6a"}fontFamily="comfortaa,cursive">
                Email:- meta.academics@silicon.ac.in
              </Typography>
              <Typography variant="body1" color={"#a7fd6a"}fontFamily="comfortaa,cursive">
                Phone:- +91 8763315622
              </Typography>
            </Stack>
          </Stack>
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
          <Typography variant="h3" textAlign={"center"}fontFamily="comfortaa,cursive">
            Contact Us
          </Typography>
          <Stack spacing={1}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              fontFamily="comfortaa,cursive"
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
              onChange={(e) => setMessage(e.target.value)}
              fontFamily="comfortaa,cursive"
            />
          </Stack>
          <Button
            sx={{
              background: "rgb(0, 180, 0)",
              color: "white",
              fontFamily:"comfortaa,cursive",
              transition: "all 0.5s ease-out",

              "&:hover": {
                boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                background: "rgb(0, 180, 0)",
                borderRadius: "3rem",
              },
            }}
            onClick={sendEmail}
            
          >
            Send
          </Button>
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
      <center><hr className="hr"/></center>
      <div className="copy" ><p>&copy; Copyright 2024 SITMUN.</p></div>
    </Box>
  );
}
