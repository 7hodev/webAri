import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import Carrusel from "../components/Carrusel";
/* STYLES */
import styles from "../styles/Andares.module.css";
import carouselStyles from "../styles/EventosCarousel.module.css";

export default function Andares({
  scrollUpFunction,
  styleScrollUp,
  menuOpen,
  setMenuOpen,
}) {
  // Referencias para cada carrusel
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  const slider4Ref = useRef(null);
  const slider5Ref = useRef(null);

  // Configuración del slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true
  };

  // Datos para cada carrusel
  const eventos1 = [
    {
      id: 1,
      imagen: "/example.jpg",
      fecha: "01/05/2023",
      titulo: "Evento 1.1",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque."
    },
    {
      id: 2,
      imagen: "/example.jpg",
      fecha: "15/06/2023",
      titulo: "Evento 1.2",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque."
    }
  ];

  const eventos2 = [
    {
      id: 1,
      imagen: "/example.jpg",
      fecha: "10/04/2023",
      titulo: "Evento 2.1",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque."
    },
    {
      id: 2,
      imagen: "/example.jpg",
      fecha: "20/05/2023",
      titulo: "Evento 2.2",
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque."
    }
  ];

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="section1" className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/books.jpg"
          alt=""
          width={1400}
          height={550}
        />
        <div className={styles.text1_a1_s1}>
          <h2>Andares</h2>
        </div>
      </section>
      <section className={styles.trayectoria}>
        <h2>Nuestros Eventos</h2>
        
        <div className={styles.row1}>
          {/* Carrusel para evento1 de row1 */}
          <div id="evento1" className={styles.evento1}>
            <Slider ref={slider1Ref} {...settings}>
              {eventos1.map((evento) => (
                <div key={evento.id}>
                  <Image
                    className={styles.imgEvento1}
                    src={evento.imagen}
                    alt={evento.titulo}
                    width={320}
                    height={300}
                    priority
                  />
                  <div className={styles.fechaContainer}>
                    <p>{evento.fecha}</p>
                    <div className={styles.botonesContainer}>
                      <button onClick={() => slider1Ref.current.slickPrev()} className={carouselStyles.carouselButton}>&#8249;</button>
                      <button onClick={() => slider1Ref.current.slickNext()} className={carouselStyles.carouselButton}>&#8250;</button>
                    </div>
                  </div>
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descripcion}</p>
                  <button className={styles.button}>Link</button>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Carrusel para evento2 de row1 */}
          <div className={styles.evento2}>
            <Slider ref={slider2Ref} {...settings}>
              {eventos2.map((evento) => (
                <div key={evento.id}>
                  <Image
                    className={styles.imgEvento2}
                    src={evento.imagen}
                    alt={evento.titulo}
                    width={320}
                    height={400}
                    priority
                  />
                  <div className={styles.textEvento2}>
                    <div className={styles.fechaContainer}>
                      <p>{evento.fecha}</p>
                      <div className={styles.botonesContainer}>
                        <button onClick={() => slider2Ref.current.slickPrev()} className={carouselStyles.carouselButton}>&#8249;</button>
                        <button onClick={() => slider2Ref.current.slickNext()} className={carouselStyles.carouselButton}>&#8250;</button>
                      </div>
                    </div>
                    <h3>{evento.titulo}</h3>
                    <p>{evento.descripcion}</p>
                    <button className={styles.button}>Link</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        
        <div className={styles.row2}>
          {/* Carrusel para evento1 de row2 */}
          <div className={styles.evento1}>
            <Slider ref={slider3Ref} {...settings}>
              {eventos1.map((evento) => (
                <div key={evento.id}>
                  <Image
                    className={styles.imgEvento1}
                    src={evento.imagen}
                    alt={evento.titulo}
                    width={320}
                    height={300}
                    priority
                  />
                  <div className={styles.fechaContainer}>
                    <p>{evento.fecha}</p>
                    <div className={styles.botonesContainer}>
                      <button onClick={() => slider3Ref.current.slickPrev()} className={carouselStyles.carouselButton}>&#8249;</button>
                      <button onClick={() => slider3Ref.current.slickNext()} className={carouselStyles.carouselButton}>&#8250;</button>
                    </div>
                  </div>
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descripcion}</p>
                  <button className={styles.button}>Link</button>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Carrusel para evento2 de row2 */}
          <div className={styles.evento2}>
            <Slider ref={slider4Ref} {...settings}>
              {eventos1.map((evento) => (
                <div key={evento.id}>
                  <Image
                    className={styles.imgEvento1}
                    src={evento.imagen}
                    alt={evento.titulo}
                    width={320}
                    height={300}
                    priority
                  />
                  <div className={styles.fechaContainer}>
                    <p>{evento.fecha}</p>
                    <div className={styles.botonesContainer}>
                      <button onClick={() => slider4Ref.current.slickPrev()} className={carouselStyles.carouselButton}>&#8249;</button>
                      <button onClick={() => slider4Ref.current.slickNext()} className={carouselStyles.carouselButton}>&#8250;</button>
                    </div>
                  </div>
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descripcion}</p>
                  <button className={styles.button}>Link</button>
                </div>
              ))}
            </Slider>
          </div>
          
          {/* Carrusel para evento3 de row2 */}
          <div className={styles.evento3}>
            <Slider ref={slider5Ref} {...settings}>
              {eventos1.map((evento) => (
                <div key={evento.id}>
                  <Image
                    className={styles.imgEvento1}
                    src={evento.imagen}
                    alt={evento.titulo}
                    width={320}
                    height={300}
                    priority
                  />
                  <div className={styles.fechaContainer}>
                    <p>{evento.fecha}</p>
                    <div className={styles.botonesContainer}>
                      <button onClick={() => slider5Ref.current.slickPrev()} className={carouselStyles.carouselButton}>&#8249;</button>
                      <button onClick={() => slider5Ref.current.slickNext()} className={carouselStyles.carouselButton}>&#8250;</button>
                    </div>
                  </div>
                  <h3>{evento.titulo}</h3>
                  <p>{evento.descripcion}</p>
                  <button className={styles.button}>Link</button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        
        <div className={styles.row3}>
          <div className={styles.evento1}>
            <Carrusel />
            <p>
              <i>
                Porque la conversación y sus alteraciones son un atributo más de
                lo poético y lo musical.
                <br />
              </i>{" "}
              <strong>BBP Bethancourt, 2014</strong>
            </p>
          </div>
          
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento1}
              src="/Foto2b.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <h3>Música y poesía</h3>
            <p>
              Ensayo de poesía sonora:{" "}
              <i>
                <strong>
                  Opus Sostenido. Alegoría musical para Abrazos de una nariz sin
                  olfato.
                </strong>
              </i>{" "}
              Tino Castro Estudio, 2014. <br />
              Dialogo entre música y poesía:
              <strong>
                <i> CantArte POrÉtica,</i>{" "}
              </strong>{" "}
              Sanbors, Multiplaza, Panamá 2014.
            </p>
            <Link
              href="https://www.youtube.com/watch?v=JNnpk9lMkNM"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              CantARTE POrETICA / Ronda 2-8
            </Link>
          </div>
        </div>
      </section>
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Footer
        page="/andares"
        section1="Section 1"
        section2="Section 2"
        section3="Section 3"
      />
    </div>
  );
}
