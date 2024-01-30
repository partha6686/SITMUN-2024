import React from 'react';
import '../../styles/message.css'; // Import your CSS file
import SgImage from "../../assets/sg.jpg"

const SecGenMsg = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <div className="heading">
          <h1 className="gradient-text">Message from Secretary General</h1>
        </div>
        <p>
          "In the realm of unwavering resolutions, SITMUN has consistently championed the spirit of dynamic debate, hosting some of the most thrilling and intellectually stimulating competitions throughout its existence. Whether facing the challenges of the year 2021 or navigating through the complex market conditions of 2022, our resolute determination has consistently drawn immense interest, bringing together diverse minds in a collective effort to create something extraordinary. As we eagerly anticipate the advent of the exhilarating year 2024, we proudly present the 6th edition of SITMUN.In a world that yearns for transformation, we believe it calls for individualistic mindsets to chart a new course. Join us this March 2024 to be part of a unique journey where we strive to build the future and engage in compelling debates to foster a fresh understanding. The spirit of SITMUN beckons you to participate in this transformative experience, where ideas intersect, perspectives harmonize, and a new chapter of diplomacy unfolds. Let us collectively shape the discourse and pave the way for a future that mirrors the collective brilliance of diverse intellects. See you at SITMUN 2024, where words collide, and the future is crafted."
        </p>
      </div>
      <div className="image-container">
        <img src={SgImage} alt="Event Image" />
        <div className="signature">
          <div className="dance">Namrata Mishra</div>
          <div className="sec"><b>Secretary General,SITMUN 2024</b></div>
        </div>
      </div>
    </div>
  );
};

export default SecGenMsg;