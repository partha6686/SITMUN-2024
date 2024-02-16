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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Logo from "../../assets/logo.png";

import { Button } from "@mui/material";

//useNavigate
import { useNavigate } from "react-router-dom";
import { position } from "@chakra-ui/react";

const pages = [
  { name: "Home", location: "/" },
  { name: "Teams", location: "/teams" },
  { name: "Committee", location: "/committee" },
  { name: "Register", location: "/committee" },
];

// export default function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <Container
//       sx={{
//         flexGrow: 0,
//         background: "transparent",
//         "& .MuiPaper-root": {
//           maxHeight: "100vh",
//         },
//       }}
//       maxWidth="lg"
//     >
//       <AppBar
//         position="fixed"
//         sx={{ background: "transparent", boxShadow: "none", color: "black" }}
//       >
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Button
//             sx={{
//               paddingLeft: "3vw",
//             }}
//             onClick={() => navigate("/")}
//           >
//             <img src={Logo} alt="" width={"100vw"} />
//           </Button>
//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleOpenUserMenu}
//             sx={{ marginLeft: "auto", color: "white" }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//         <Box
//           sx={{
//             background: "transparent",
//           }}
//         >
//           <Menu
//             anchorEl={anchorElNav}
//             anchorOrigin={{
//               vertical: "bottom",
//               horizontal: "right",
//             }}
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorElUser)}
//             onClose={handleCloseUserMenu}
//             sx={{
//               py: 0,
//               flexGrow: 0.3,
//               "& .MuiList-root": {
//                 minWidth: { xs: "80vw", sm: "40vw", md: "25vw" },
//               },
//               "& .MuiPaper-root": {
//                 border: "2px solid ff3cac !important",
//                 borderRadius: ".75rem !important",
//                 background: "##00ba47",
//                 backgroundImage:
//                   "linear-gradient(225deg, #3fff3c 0%, #00ba47 50%, #2d4f00 100%)",
//               },
//             }}
//           >
//             <Stack
//               direction={"column"}
//               spacing={2}
//               sx={{
//                 p: "1rem",

//                 "& li": {
//                   p: ".5rem",
//                 },
//                 "& li:hover": {
//                   p: ".5rem",
//                   "& > h6": {
//                     color: "#014017",
//                     fontWeight: "bolder",
//                   },
//                   borderRadius: ".5rem",
//                   backgroundColor: "rgba(255, 255, 255, 0.1)",
//                 },
//               }}
//             >
//               {pages.map((setting, i) => (
//                 <MenuItem
//                   key={i}
//                   onClick={() => navigate(`${setting.location}`)}
//                 >
//                   <Typography
//                     variant="subtitle1"
//                     sx={{
//                       textAlign: "center",
//                       color: "#fff",
//                       fontWeight: 500,
//                       width: "100%",
//                     }}
//                   >
//                     {setting.name}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Stack>
//           </Menu>
//         </Box>
//       </AppBar>
//     </Container>
//   );
// }
export default function Navbar({ order, setOrder, selectList = false }) {
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

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleChange = (event) => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    // console.log(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      sx={{
        flexGrow: 0,
        "& .MuiPaper-root": {
          maxHeight: "100vh",
        },
      }}
      maxWidth="lg"
    >
      <AppBar
        position="fixed"
        sx={{
          background:
            scrollPosition < 100 ? "transparent" : "rgb(20, 225, 0, 0.5)",
          boxShadow: "none",
          color: "black",
          backdropFilter: scrollPosition > 100 ? "blur(30px)" : "none",
          transition: "all 0.15s linear",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            sx={{
              paddingLeft: "3vw",
            }}
          >
            <img src={Logo} alt="" width={"80vw"} />
          </Button>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <Box display={selectList ? "block" : "none"}>
              <Button
                onClick={handleClickOpen}
                sx={{
                  color: "#fff",
                  background: "rgb(20, 225, 0, 0.40)",
                  backdropFilter: "blur(30px)",
                  fontWeight: "bold",
                  padding: '1vh 2vw',

                  "&:hover": {
                    backdropFilter: "blur(0px)",
                    border: "1px solid #fff",
                    background: "rgb(20, 225, 0, 0.40)",
                  },
                }}
              >
                Select A Category
              </Button>
              <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent
                  sx={{
                    background: "#4d9f3d",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <Box
                    component="form"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel htmlFor="demo-dialog-native">
                        Department
                      </InputLabel>
                      <Select
                        native
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                        input={
                          <OutlinedInput
                            label="Position"
                            id="demo-dialog-native"
                          />
                        }
                      >
                        <option value={"Core Secretariat"}>
                          Core Secretariat
                        </option>
                        <option value={"Delegate Affairs"}>
                          Delegate Affairs
                        </option>
                        <option value={"Public Relations"}>
                          Public Relations
                        </option>
                        <option value={"Web Development"}>
                          Web Development
                        </option>
                        <option value={"Hospitality"}>Hospitality</option>
                        <option value={"Finance"}>Finance</option>
                        <option value={"Sponsorship"}>Sponsorship</option>
                        <option value={"Video Editing"}>Video Editing</option>
                        <option value={"Creativity & Designing"}>
                          Creativity & Designing
                        </option>
                        <option value={"Logistics"}>Logistics</option>
                        <option value={"EB Affairs"}>EB Affairs</option>
                      </Select>
                    </FormControl>
                  </Box>
                </DialogContent>
                <DialogActions
                  sx={{
                    background: "#4d9f3d",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    sx={{
                      color: "#fff",
                      // border: '1px solid #000',
                      background: "rgb(20, 225, 0, 0.70)",
                      backdropFilter: "blur(30px)",
                      fontWeight: "bold",

                      "&:hover": {
                        backdropFilter: "blur(0px)",
                        border: "1px solid #fff",
                      },
                    }}
                  >
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
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
          </Stack>
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
                background: "#00ba47",
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
