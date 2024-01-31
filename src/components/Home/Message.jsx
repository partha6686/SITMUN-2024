import React from "react";
import "../../styles/message.css"; // Import your CSS file
import SgImage from "../../assets/sg.jpg";

const SecGenMsg = () => {
  return (
    <div className="main-container">
      <div className="text-container">
        <div className="heading">
          <h1 className="gradient-text">Message from Secretary General</h1>
        </div>
        <p>
          "My name is Namrata Mishra, and it is with distinct honour that I
          welcome you all to the 6th iteration of the SIT Model United Nations
          conference! I have been a part of SITMUN as a Delegate, Coordinator,
          and OC Member, and it is now my privilege to lead the Secretariat as
          Secretary General for the conference. With my incredible team, I am
          confident that this year’s conference will surpass all expectations
          for SITMUN and redefine what our conference has historically
          delivered. SITMUN's mission is simple; we strive to provide young
          leaders a stimulating platform to debate, discuss, and resolve
          critical global issues by promoting equity, creativity, and diplomacy.
          At SITMUN, Model United Nations is more than a simulation of the UN,
          but rather, it is a space for delegates to delve into the world of
          international issues and develop stronger public speaking,
          communication, critical thinking, and diplomacy skills. Whether you
          are the most passionate and knowledgeable political thinker or,
          perhaps, are someone foreign to the world of diplomacy, SITMUN is for
          you. To my delegates— SITMUN is your space to collaborate, engage and
          debate the world of today, to lead the world of tomorrow. The legacy
          of SITMUN is established by a long line of predecessors who have
          established our conference as one of the best in the circuit. This
          year is no exception, as the 6th iteration of SITMUN could not be
          possible without the contributions of my hard-working, passionate, and
          dedicated Secretariat and OC members. They are, genuinely, one of the
          most brilliant individuals I know, and I have no doubt that their
          talents and efforts will reflect in your SITMUN experience. I am
          thrilled to see what SITMUN 2024 will bring, and I am incredibly
          excited to welcome you all to the conference this March."
        </p>
      </div>
      <div className="image-container">
        <img src={SgImage} alt="Event Image" />
        <div className="signature">
          <div className="dance">Namrata Mishra</div>
          <div className="sec">
            <b>Secretary General,SITMUN 2024</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecGenMsg;
