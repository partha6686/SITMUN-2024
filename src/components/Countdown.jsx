import React, { useState, useEffect } from 'react';
import styles from "../pages/Countdown.module.css"
const CalcTimeDelta = () => {
    const targetDate = '2024-01-30T11:50:59';

  const calculateTimeDelta = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const delta = target - now;

    const days = Math.floor(delta / (1000 * 60 * 60 * 24));
    const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((delta % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeDelta, setTimeDelta] = useState(calculateTimeDelta());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDelta(calculateTimeDelta());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.box}>
        <div className={styles.head}><h1>Live In</h1> </div>
        
      <div className={styles.cont}>
            <div className={styles.day}><h1 >{timeDelta.days}  </h1><p>days  </p></div>
            <div className={styles.hour}><h1 > {timeDelta.hours}  </h1><p>hours </p></div>
            <div className={styles.min}><h1 > {timeDelta.minutes}  </h1><p>minutes </p></div>
            <div className={styles.sec}><h1 > {timeDelta.seconds} </h1><p>seconds </p></div>
        </div>
    </div>
  );
};

export default CalcTimeDelta;
