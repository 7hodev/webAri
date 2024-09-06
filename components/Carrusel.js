import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* STYLES */
import styles from "../styles/Carrusel.module.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.SwiperSlide}>
          <Image className={styles.img} src="/carrusel/Foto1b.jpg" alt="" width={500} height={500} />
          <p>
              <i>
                Porque la conversación y sus alteraciones son un atributo más de
                lo poético y lo musical.
                <br />
              </i>{" "}
              <strong>BBP Bethancourt, 2014</strong>
            </p>
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image className={styles.img} src="/carrusel/Foto2b.jpg"alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image className={styles.img} src="/carrusel/Foto3b.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image className={styles.img} src="/carrusel/Foto4.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image className={styles.img} src="/carrusel/Foto5b.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
        <SwiperSlide className={styles.SwiperSlide}>
          <Image className={styles.img} src="/carrusel/Foto6b.jpg" alt="" width={500} height={500} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
