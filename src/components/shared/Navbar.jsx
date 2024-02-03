import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { MenuItem, Button } from "@mui/material";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
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
        <Box sx={{
          background: 'transparent'
        }}>
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
              flexGrow: 0.3,
              "& .MuiList-root": {
                color: "red",
                width: "30vw !important",
                minHeight: "70vh !important",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                background: `rgba(0, 112, 73, 0.374)`,
                backdropFilter: "blur(1000px)",
              },
            }}
          >
            {pages.map((setting) => (
              <MenuItem
                key={setting}
                onClick={handleCloseUserMenu}
                // sx={{ width: "30vw" }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </AppBar>
    </Box>
  );
}
