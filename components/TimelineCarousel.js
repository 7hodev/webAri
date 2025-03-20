import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/TimelineCarousel.module.css'; // Estilos CSS personalizados

const TimelineCarousel = ({ images }) => {
  const sliderRef = useRef(null);
  const [yearIndices, setYearIndices] = useState({});
  const [activeYear, setActiveYear] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Agrupar imágenes por año y obtener el índice de la primera imagen de cada año
    const indices = {};
    images.forEach((image, index) => {
      if (!indices[image.year]) {
        indices[image.year] = index;
      }
    });
    setYearIndices(indices);
    
    // Establecer el año inicial como el primer año disponible
    if (Object.keys(indices).length > 0 && !activeYear) {
      setActiveYear(Object.keys(indices)[0]);
    }
  }, [images, activeYear]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    beforeChange: (current, next) => {
      setCurrentSlide(next);
      // Actualizar el año activo basado en la diapositiva actual
      const currentImageYear = images[next]?.year;
      if (currentImageYear && currentImageYear !== activeYear) {
        setActiveYear(currentImageYear.toString());
      }
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: false,
          slidesToShow: 1
        }
      }
    ]
  };

  // Función para cambiar el año y desplazarse al primer slide de ese año
  const changeYear = (year) => {
    const yearIndex = yearIndices[year];
    if (yearIndex !== undefined && sliderRef.current) {
      sliderRef.current.slickGoTo(yearIndex);
      setActiveYear(year);
    }
  };

  return (
    <div className={styles.timelineCarousel}>
      {/* Botones para cambiar el año */}
      <div className={styles.timelineButtons}>
        {Object.keys(yearIndices).map((year) => (
          <button
            key={year}
            className={classNames(
              styles.timelineButton,
              { [styles.active]: activeYear === year }
            )}
            onClick={() => changeYear(year)}
          >
            {year}
          </button>
        ))}
      </div>
      {/* Carrusel de imágenes */}
      <div className={styles.sliderContainer}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className={styles.slideItem}>
              <div className={styles.imageWrapper}>
                <img 
                  src={image.url} 
                  alt={`Imagen del año ${image.year}`} 
                  className={styles.slideImage}
                />
              </div>
              <div className={styles.yearIndicator}>
                {image.year}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TimelineCarousel;
