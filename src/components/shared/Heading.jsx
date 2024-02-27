import React from "react";
import styles from "../../styles/Header.module.css";

const Heading = ({ heading }) => {
  
  const words = heading.split(" ");

  
  const headingWithSpaces = [];

  
  words.forEach((word, index) => {
    headingWithSpaces.push(word); 
    if (index !== words.length - 1) {
      
      headingWithSpaces.push(<>&nbsp;&nbsp;&nbsp;</>);
    }
  });

  return (
    <div className={styles.head}>
      <h1>{headingWithSpaces}</h1>
    </div>
  );
};

export default Heading;

  // return (
  //   <div className={styles.head}>
  //     <h1>{heading}</h1>
  //   </div>
  // );
// };

// export default Heading;
