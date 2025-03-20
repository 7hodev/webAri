import React, { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/Modals/PersonasModal.module.css';

const PersonasModal = ({ modalPersonas, setModalPersonas, personas }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
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

  return (
    <div 
      className={`${styles.modalOverlay} ${modalPersonas ? styles.active : ''}`}
      onClick={handleClose}
    >
      <div className={styles.modalContainer} onClick={handleModalClick}>
        <div className={styles.modalHeader}>
          <h2>Nuestro Equipo</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalContent}>
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