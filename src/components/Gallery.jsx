import React,{ useState, useEffect,useRef } from "react";
import styles from "../pages/Gallery.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { galleryData } from "../data/gallery";


const Gallery = () => {
  // const [galleryData, setGalleryData] = useState({ gallery1: [], gallery2: [] });
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 12000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 12000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 12000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 12000,
    rtl: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(galleryData);

  return (
    <div>
      <div>
        <Slider {...settings} ref={sliderRef} className={styles.slider}>
          {galleryData?.map((item, id) => {
            if (id % 2 == 0) {
              return (
                <div key={id} className={styles.sliderItem}>
                  <img
                    src={item.url}
                    alt={`Image ${id}`}
                    className={styles.sliderimg}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </Slider>
        <Slider {...settings1} ref={sliderRef} className={styles.slider1}>
          {galleryData?.map((item, id) => {
            if (id % 2 != 0) {
              return (
                <div key={id} className={styles.sliderItem}>
                  <img
                    src={item.url}
                    alt={`Image ${id}`}
                    className={styles.sliderimg}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
