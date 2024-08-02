import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import Carrusel from "../components/Carrusel";
import CarruselAndares1 from "../components/CarruselAndares/1";
import CarruselAndares2 from "../components/CarruselAndares/2";
/* STYLES */
import styles from "../styles/Andares.module.css";

export default function Andares({
  scrollUpFunction,
  styleScrollUp,
  menuOpen,
  setMenuOpen,
}) {
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
        <div className={styles.row1}>
          <div className={styles.evento1}>
            <CarruselAndares1 />
          </div>
          <div className={styles.evento2}>
            <CarruselAndares2 />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.evento1}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
          </div>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
          </div>
          <div className={styles.evento3}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
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
              src="/carrusel/Foto2b.jpg"
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
