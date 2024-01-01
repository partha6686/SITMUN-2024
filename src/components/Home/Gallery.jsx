import React, { useState, useEffect } from 'react';
import styles from '../../pages/Gallery.module.css';
import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { galleryData } from '../../data/gallery';
const Gallery = () => {
  // const [galleryData, setGalleryData] = useState({ gallery1: [], gallery2: [] });

  const settings = {
    dots: false,
    infinite: true,
    speed: 12000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    
    rtl:true,
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
console.log(galleryData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res1 = await fetch("http://localhost:4000/gallery1");
  //       const res2 = await fetch("http://localhost:4000/gallery2");
  //       const data1 = await res1.json();
  //       const data2 = await res2.json();
  //       setGalleryData({ gallery1: data1, gallery2: data2 });
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  
  return (
    <div>
      
        <div >
        <Slider {...settings} className={styles.slider}>
          {galleryData?.map((item,id) => {
            return {id%2==0 ? <div key={id} className={styles.sliderItem}>
              <img src={item.url} alt={`Image ${id}`} className={styles.sliderimg}/>
            </div> : null}
        })}
          </Slider>
          <Slider {...settings1} className={styles.slider1}>
          {galleryData?.map((item,id) => {
            {id%2!=0 &&<div key={id} className={styles.sliderItem}>
              <img src={item.url} alt={`Image ${id}`} className={styles.sliderimg}/>
            </div>}
        })}
          </Slider>
        </div>
      
    </div>
  );
};

export default Gallery;
