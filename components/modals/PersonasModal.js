import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/Modals/PersonasModal.module.css';

const PersonasModal = ({ modalPersonas, setModalPersonas, personas }) => {
  const sliderRef = useRef(null);

  // Evitar scroll cuando el modal está abierto
  useEffect(() => {
    if (modalPersonas) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalPersonas]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  };

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setModalPersonas(false);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div 
      className={`${styles.modalOverlay} ${modalPersonas ? styles.active : ''}`}
      onClick={handleClose}
    >
      <div className={styles.modalContainer} onClick={handleModalClick}>
        <div className={styles.modalHeader}>
          <h2>Equipo</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={goToPrev}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>
          <Slider ref={sliderRef} {...settings}>
            {personas.map((persona, index) => (
              <div key={index}>
                <div className={styles.personaSlide}>
                  <div className={styles.personaImageContainer}>
                    <Image
                      src={persona.imagen}
                      alt={persona.nombre}
                      width={300}
                      height={400}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'relative'
                      }}
                      className={styles.personaImage}
                    />
                  </div>
                  <div className={styles.personaInfo}>
                    <h3 className={styles.personaNombre}>{persona.nombre}</h3>
                    <p className={styles.personaPuesto}>{persona.puesto}</p>
                    <p className={styles.personaDescripcion}>{persona.descripcion}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PersonasModal; 