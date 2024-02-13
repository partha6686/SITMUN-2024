import { useEffect, useState, React, useRef } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import styles from "../styles/Team.module.css";
import { Icon } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
// import IconButton from "@mui/material/IconButton";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { heroTeam } from "../data/heroTeam";
import Footer from "../components/shared/Footer";

import { teamdata } from "../data/team";
import Heading from "../components/shared/Heading";
const Team = () => {
  
  const [order, setorder] = useState("Core Secretariat");
  const [imgUrlIdx, setImgUrlIdx] = useState(0);

  useEffect(() => {
    const changeImgUrl = () => {
      setImgUrlIdx((idx) => (idx == heroTeam.length - 1 ? 0 : idx + 1));
    };
    const intrval = setInterval(changeImgUrl, 2000);
    return () => {
      clearInterval(intrval);
    };
  }, []);
  return (
    <div>
      {/* <SideBar /> */}
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.head2}>
          <Box
      sx={{
        height: "70vh",
        width: "100%",
        // background: `url(${HeroImg}),linear-gradient(#4e9f3d, #4E9F3D)`,
        backgroundImage: `linear-gradient(120deg, rgba(25,26,25,0.9) 71%, rgba(30,81,40,0.8) 97%),url(${heroTeam[imgUrlIdx]})`,
        
        backgroundSize: "cover",
        objectFit:"cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        transition: "backgroundImage ease-in",
      }}
    />
            <div className={styles.menu}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  position="absolute"
                  top="0"
                  right="0"
                  margin="7"
                  variant="ghost"
                  color={"white"}
                >
                </MenuButton>
                <MenuList bgColor="black" color="white">
                  <MenuOptionGroup
                    bgColor="black"
                    color="white"
                    defaultValue="Core Secretariat"
                    title="Department"
                    type="radio"
                    onChange={(value) => {
                      console.log(value);
                      setorder(value);
                    }}
                  >
                    <MenuItemOption
                      value="Core Secretariat"
                      bgColor="black"
                      color="white"
                    >
                      Core Secretariat
                    </MenuItemOption>
                    <MenuItemOption
                      value="Delegate Affairs"
                      bgColor="black"
                      color="white"
                    >
                      Delegate Affairs
                    </MenuItemOption>
                    <MenuItemOption
                      value="Public Relations"
                      bgColor="black"
                      color="white"
                    >
                      Public Relations
                    </MenuItemOption>
                    <MenuItemOption
                      value="Web Development"
                      bgColor="black"
                      color="white"
                    >
                      Web Development
                    </MenuItemOption>
                    <MenuItemOption
                      value="Hospitality"
                      bgColor="black"
                      color="white"
                    >
                      Hospitality
                    </MenuItemOption>
                    <MenuItemOption
                      value="Finance"
                      bgColor="black"
                      color="white"
                    >
                      Finance
                    </MenuItemOption>
                    <MenuItemOption
                      value="Sponsorship"
                      bgColor="black"
                      color="white"
                    >
                      Sponsorship
                    </MenuItemOption>
                    <MenuItemOption
                      value="Video Editing"
                      bgColor="black"
                      color="white"
                    >
                      Video Editing
                    </MenuItemOption>
                    <MenuItemOption
                      value="Creativity & Designing"
                      bgColor="black"
                      color="white"
                    >
                      Creativity & Designing
                    </MenuItemOption>
                    <MenuItemOption
                      value="Logistics"
                      bgColor="black"
                      color="white"
                    >
                      Logistics
                    </MenuItemOption>
                    <MenuItemOption
                      value="EB Affairs"
                      bgColor="black"
                      color="white"
                    >
                      EB Affairs
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className={styles.meet}>
            <div className={styles.our}>
              <h1>
                <Heading heading={"MEET OUR TEAM"}/>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.heading}>
          <h1>{order}</h1>
        </div>
        <div className={styles.cardrow}>
          <div className={styles.body}>
            {teamdata?.map((item, id) => {
              if (item.dept === order) {
                return (
                  <div className={styles.row} key={id}>
                    <div className={styles.col}>
                      <div className={styles.card}>
                        <div className={styles.cardshape}>
                          <img src={item.url} alt="" />
                        </div>
                        <div className={styles.cardbody}>
                          <span className={styles.__rect}></span>
                          <p className={styles.Name}>{item.name}</p>
                          <p className={styles.desig}>{item.desig}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
