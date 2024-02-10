import React, { useState, useEffect, useRef } from "react";
import styles from "../pages/Feedback.module.css";
// import Svg, { Path } from "react-native-svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { feedbackdata } from "../data/feedback";
const Feedback = () => {
  const sliderRef = useRef(null);
  const settings = {
    // dots: true,
    infinite: true,
    pauseOnHover: true,
    speed: 4000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
    focusOnSelect: true,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(feedbackdata);

  return (
    <div className={styles.main}>
      <Slider {...settings} ref={sliderRef} className={styles.slider}>
        {feedbackdata?.map((item, id) => (
          <div key={id} className={styles.testimonial}>
            <div className={styles.testimonial_bubble}>
              <div className={styles.quotes}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
                  <path
                    fill="currentColor"
                    
                    d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179m10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621c.537-.278 1.24-.375 1.929-.311c1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5a3.871 3.871 0 0 1-2.748-1.179"
                    style={{
                      color: 'green'
                    }}
                  />
                </svg>
              </div>
              <div className={styles.testimonial_text}>
                <p>{item.text}</p>
              </div>
              <div className={styles.testimonial_author}>
                <img src={item.url} alt={`Image ${id}`} />
              </div>
              <div className={styles.desc}>
                <h3>{item.auth}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feedback;
