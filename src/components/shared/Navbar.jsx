import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";

import Logo from "../../assets/logo.png";

import { MenuItem, Button } from "@mui/material";

//useNavigate
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Teams", location: "/teams" },
  { name: "Committee", location: "/committee" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

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
    <Container
      sx={{
        flexGrow: 0,
        background: "transparent",
        "& .MuiPaper-root": {
          maxHeight: "100vh",
        },
      }}
      maxWidth="lg"
    >
      <AppBar
        position="fixed"
        sx={{ background: "transparent", boxShadow: "none", color: "black" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            sx={{
              paddingLeft: "3vw",
            }}
          >
            <img src={Logo} alt="" width={"100vw"} />
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
              vertical: "bottom",
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
                minWidth: { xs: "80vw", sm: "40vw", md: "25vw" },
              },
              "& .MuiPaper-root": {
                border: "2px solid ff3cac !important",
                borderRadius: ".75rem !important",
                background: "##00ba47",
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
                    color: "#014017",
                    fontWeight: "bolder",
                  },
                  borderRadius: ".5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {pages.map((setting, i) => (
                <MenuItem
                  key={i}
                  onClick={() => navigate(`${setting.location}`)}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      textAlign: "center",
                      color: "#fff",
                      fontWeight: 500,
                      width: "100%",
                    }}
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Box>
      </AppBar>
    </Container>
  );
}
