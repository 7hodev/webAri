import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* STYLES */
import styles from "../../styles/CarruselAndares/1.module.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className={styles.body}>
      <div className={styles.customPrev}>&lt;</div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: `.${styles.customNext}`,
          prevEl: `.${styles.customPrev}`,
        }}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div id="evento1" className={styles.evento1}>
            <div className={styles.imgEvento1}>
              <Image
                className={styles.img}
                src="/example.jpg"
                alt="Ariadna Garcia"
                width={320}
                height={300}
                priority
              />
            </div>
            <div className={styles.textEvento1}>
              <p>00/00/0000</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                dolore in non veritatis dolores autem pariatur, cupiditate odio
                sapiente deleniti maxime placeat cum nobis corporis facere ipsa
                voluptas iste eaque.
              </p>
              <audio controls className={styles.audioPlayer}>
                <source src="audio/julio16.mp3" type="audio/mpeg" />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div id="evento1" className={styles.evento1}>
            <div className={styles.imgEvento1}>
              <Image
                className={styles.img}
                src="/example.jpg"
                alt="Ariadna Garcia"
                width={320}
                height={300}
                priority
              />
            </div>
            <div className={styles.textEvento1}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div id="evento1" className={styles.evento1}>
            <div className={styles.imgEvento1}>
              <Image
                className={styles.img}
                src="/example.jpg"
                alt="Ariadna Garcia"
                width={320}
                height={300}
                priority
              />
            </div>
            <div className={styles.textEvento1}>
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
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div id="evento1" className={styles.evento1}>
            <div className={styles.imgEvento1}>
              <Image
                className={styles.img}
                src="/example.jpg"
                alt="Ariadna Garcia"
                width={320}
                height={300}
                priority
              />
            </div>
            <div className={styles.textEvento1}>
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
        </SwiperSlide>
      </Swiper>
      <div className={styles.customNext}>&gt;</div>
    </div>
  );
}
