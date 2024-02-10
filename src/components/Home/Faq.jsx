import React, { useState } from "react";
import "../../styles/faq.css";
import Accordion from "../shared/Accordion";
import fee from '../../assets/FEES.pdf';
import { allFaq } from "../../data/faq";

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function openBrochure() {
  window.open(fee);
}

const Faq = () => {

  return (
    <div className="faq">
      {/* Heading goes here */}
      <div className="faq-div">
        <div>
          {allFaq.map((faq) => (
            <Accordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;