import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

/* STYLES */
import styles from "../../styles/CarruselAndares/2.module.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
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
          <div className={styles.evento2}>
            <div className={styles.imgEvento2}>
              <Image
                src="/example.jpg"
                alt="Ariadna Garcia"
                width={320}
                height={400}
                priority
              />
            </div>

            <div className={styles.textEvento2}>
              <p>00/00/0000</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam debitis laudantium quis earum doloribus nobis maxime
                vel commodi animi! Nihil nulla accusantium eligendi asperiores
                quas exercitationem itaque? Iste, rerum eos? Inventore dolorem
                voluptate perferendis, maxime voluptatem repellat atque voluptas
                debitis quisquam harum vel ratione voluptates eos dolores ab
                excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente
                hic! Exercitationem, dolore harum.
              </p>
              <button className={styles.button}>Link</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento2}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={400}
              priority
            />
            <div className={styles.textEvento2}>
              <p>00/00/0000</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam debitis laudantium quis earum doloribus nobis maxime
                vel commodi animi! Nihil nulla accusantium eligendi asperiores
                quas exercitationem itaque? Iste, rerum eos? Inventore dolorem
                voluptate perferendis, maxime voluptatem repellat atque voluptas
                debitis quisquam harum vel ratione voluptates eos dolores ab
                excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente
                hic! Exercitationem, dolore harum.
              </p>
              <button className={styles.button}>Link</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento2}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={400}
              priority
            />
            <div className={styles.textEvento2}>
              <p>00/00/0000</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam debitis laudantium quis earum doloribus nobis maxime
                vel commodi animi! Nihil nulla accusantium eligendi asperiores
                quas exercitationem itaque? Iste, rerum eos? Inventore dolorem
                voluptate perferendis, maxime voluptatem repellat atque voluptas
                debitis quisquam harum vel ratione voluptates eos dolores ab
                excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente
                hic! Exercitationem, dolore harum.
              </p>
              <button className={styles.button}>Link</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento2}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={400}
              priority
            />
            <div className={styles.textEvento2}>
              <p>00/00/0000</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam debitis laudantium quis earum doloribus nobis maxime
                vel commodi animi! Nihil nulla accusantium eligendi asperiores
                quas exercitationem itaque? Iste, rerum eos? Inventore dolorem
                voluptate perferendis, maxime voluptatem repellat atque voluptas
                debitis quisquam harum vel ratione voluptates eos dolores ab
                excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente
                hic! Exercitationem, dolore harum.
              </p>
              <button className={styles.button}>Link</button>
            </div>
          </div>
        </SwiperSlide>
        <div className={styles.customPrev}>&lt;</div>
        <div className={styles.customNext}>&gt;</div>
      </Swiper>
    </>
  );
}
