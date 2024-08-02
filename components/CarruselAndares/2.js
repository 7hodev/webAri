import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

/* STYLES */
import styles from "../../styles/CarruselAndares/2.module.css";

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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam debitis laudantium quis earum doloribus nobis maxime vel commodi animi! Nihil nulla accusantium eligendi asperiores quas exercitationem itaque? Iste, rerum eos?
                Inventore dolorem voluptate perferendis, maxime voluptatem repellat atque voluptas debitis quisquam harum vel ratione voluptates eos dolores ab excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente hic! Exercitationem, dolore harum.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam debitis laudantium quis earum doloribus nobis maxime vel commodi animi! Nihil nulla accusantium eligendi asperiores quas exercitationem itaque? Iste, rerum eos?
                Inventore dolorem voluptate perferendis, maxime voluptatem repellat atque voluptas debitis quisquam harum vel ratione voluptates eos dolores ab excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente hic! Exercitationem, dolore harum.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam debitis laudantium quis earum doloribus nobis maxime vel commodi animi! Nihil nulla accusantium eligendi asperiores quas exercitationem itaque? Iste, rerum eos?
                Inventore dolorem voluptate perferendis, maxime voluptatem repellat atque voluptas debitis quisquam harum vel ratione voluptates eos dolores ab excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente hic! Exercitationem, dolore harum.
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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam debitis laudantium quis earum doloribus nobis maxime vel commodi animi! Nihil nulla accusantium eligendi asperiores quas exercitationem itaque? Iste, rerum eos?
                Inventore dolorem voluptate perferendis, maxime voluptatem repellat atque voluptas debitis quisquam harum vel ratione voluptates eos dolores ab excepturi qui, magni consectetur eius ipsam! Explicabo, sapiente hic! Exercitationem, dolore harum.
              </p>
              <button className={styles.button}>Link</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
