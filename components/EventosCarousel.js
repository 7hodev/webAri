import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/EventosCarousel.module.css';

const EventosCarousel = ({ children }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  
  // Navegar al slide anterior
  const goPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  
  // Navegar al siguiente slide
  const goNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={styles.eventosCarouselContainer}>
      <div className={styles.carouselContent}>
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
      </div>
      <div className={styles.navigationButtons}>
        <button 
          onClick={goPrev} 
          className={styles.carouselButton}
          aria-label="Evento anterior"
        >
          &#8249;
        </button>
        <button 
          onClick={goNext} 
          className={styles.carouselButton}
          aria-label="Evento siguiente"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default EventosCarousel; 