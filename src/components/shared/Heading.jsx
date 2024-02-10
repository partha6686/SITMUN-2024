import React from 'react'
import styles from "../../styles/Header.module.css"
const Heading = (props) => {
  const {heading}=props;
  return (
    <div className={styles.head}><h1>{heading}</h1></div>
  )
}

export default Heading;