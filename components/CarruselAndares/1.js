import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

/* STYLES */
import styles from "../../styles/CarruselAndares/1.module.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}><div id="evento1" className={styles.evento1}>
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
          </div></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><div id="evento1" className={styles.evento1}>
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
          </div></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><div id="evento1" className={styles.evento1}>
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
          </div></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><div id="evento1" className={styles.evento1}>
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
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}
