import { useEffect, useState, React, useRef } from "react";

import styles from "../styles/Team.module.css";

import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

import { teamdata } from "../data/team";
import Heading from "../components/shared/Heading";
const Team = () => {
  const [order, setorder] = useState("Core Secretariat");
  return (
    <div>
      <Navbar order={order} setOrder={setorder} selectList={true} />
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.head2}>
            <img
              src="https://cdn.create.vista.com/api/media/medium/677587082/stock-photo-bachelor-party-multiethnic-best-men-groom-laughing-while-standing-glasses?token="
              alt="team"
            />
            {/* <div className={styles.menu}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  position="absolute"
                  top="0"
                  right="0"
                  margin="2"
                  variant="ghost"
                >
                  <HamburgerIcon textColor="black" />
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
            </div> */}
          </div>
          <div className={styles.meet}>
            <div className={styles.our}>
                <Heading heading={"Our Team"} />
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
