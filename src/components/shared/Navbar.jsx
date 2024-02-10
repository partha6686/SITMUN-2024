import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";

import { MenuItem, Button } from "@mui/material";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog", "About", "Events"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 0,
        background: "transparent",
        width: "100%",
        "& .MuiPaper-root": {
          maxHeight: "100vh",
        },
      }}
    >
      <AppBar
        position="fixed"
        sx={{ background: "transparent", boxShadow: "none", color: "black" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: { xs: "flex-start" },
                color: "white",
                fontWeight: "bold",
              }}
            >
              SITMUN
            </Typography>
          </Button>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenUserMenu}
            sx={{ marginLeft: "auto", color: "white" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Box
          sx={{
            background: "transparent",
          }}
        >
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            sx={{
              py: 0,
              flexGrow: 0.3,
              "& .MuiList-root": {
                minWidth: { xs: "50vw", sm: "40vw", md: "25vw" },
              },
              "& .MuiPaper-root": {
                border: "2px solid ff3cac !important",
                borderRadius: ".75rem !important",
                backgroundColor: "#ff3cac",
                backgroundImage:
                  "linear-gradient(225deg, #3fff3c 0%, #00ba47 50%, #2d4f00 100%)",
              },
            }}
          >
            <Stack
              direction={"column"}
              spacing={2}
              sx={{
                p: "1rem",

                "& li": {
                  p: ".5rem",
                },
                "& li:hover": {
                  p: ".5rem",
                  "& > h6": {
                    color: "#ff3cac",
                  },
                  borderRadius: ".5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {pages.map((setting, i) => (
                <MenuItem key={i} onClick={handleCloseUserMenu}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: 500,
                      width: "100%",
                    }}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}