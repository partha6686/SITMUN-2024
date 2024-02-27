import React,{ useEffect, useState, useRef } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import styles from "../styles/Team.module.css";
// import IconButton from "@mui/material/IconButton";
import { heroTeam } from "../data/heroTeam";

const Navbar = React.lazy(() => import("../components/shared/Navbar"));
const HeroTeam = React.lazy(() => import ("../components/Home/HeroTeam"));
const Footer = React.lazy(()=> import("../components/shared/Footer"));

import { teamdata } from "../data/team";
const Team = () => {
  const props = { Heading: "MEET OUR TEAM" };
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
      <Navbar order={order} setOrder={setorder} selectList={true} />
      <div className={styles.container}>
        <HeroTeam heading={order} order={order} setOrder={setorder} selectList={true} />
      
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
