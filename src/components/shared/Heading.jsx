import React from 'react'
import styles from "../../styles/Header.module.css"
const Heading = (props) => {
  const {Heading}=props;
  return (
    <div className={styles.head}><h1>{Heading}</h1></div>
  )
}

export default Heading;