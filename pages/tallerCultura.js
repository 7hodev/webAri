import { useState, useEffect } from "react";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import TimelineCarousel from "../components/TimelineCarousel";
import PersonasModal from "../components/modals/PersonasModal";
/* DATA */
/* STYLES */
import styles from "../styles/TallerCultura.module.css";

export default function TallerCultura({
  scrollUpFunction,
  styleScrollUp,
  menuOpen,
  setMenuOpen,
}) {
  const [modalPersonas, setModalPersonas] = useState(false);

  // Datos de ejemplo para las personas
  const personas = [
    {
      nombre: "María González",
      puesto: "Directora Ejecutiva",
      descripcion:
        "Licenciada en Literatura con más de 10 años de experiencia en gestión cultural. Ha liderado proyectos de promoción literaria y desarrollo comunitario a través de la cultura. Su visión ha sido fundamental para el crecimiento de Taller Cultura desde sus inicios.",
      imagen: "/ejemplo-persona.jpg", // Reemplazar con imagen real
    },
    {
      nombre: "Carlos Ramírez",
      puesto: "Coordinador de Proyectos",
      descripcion:
        "Especialista en gestión cultural con enfoque en derechos humanos. Ha coordinado iniciativas de alfabetización y promoción de la lectura en comunidades vulnerables. Lidera el programa de mentoría para jóvenes escritores.",
      imagen: "/ejemplo-persona2.jpg", // Reemplazar con imagen real
    },
    {
      nombre: "Ana Castillo",
      puesto: "Responsable de Comunicación",
      descripcion:
        "Comunicadora social con experiencia en medios digitales. Se encarga de dar visibilidad a las actividades de la fundación y mantener el contacto con la comunidad. También coordina los talleres de escritura creativa.",
      imagen: "/ejemplo-persona3.jpg", // Reemplazar con imagen real
    },
  ];

  const images = [
    { url: "/timelapse/2013a.jpg", year: 2013 },
    { url: "/timelapse/2013b.jpg", year: 2013 },
    { url: "/timelapse/2013c.jpg", year: 2013 },
    { url: "/timelapse/2013d.jpg", year: 2013 },
    { url: "/timelapse/2014.jpg", year: 2014 },
    { url: "/timelapse/2016.jpg", year: 2016 },
    { url: "/timelapse/2017a.jpg", year: 2017 },
    { url: "/timelapse/2017b.jpg", year: 2017 },
    { url: "/timelapse/2017c.jpg", year: 2017 },
    { url: "/timelapse/2017d.jpg", year: 2017 },
    { url: "/timelapse/2017e.jpg", year: 2017 },
    { url: "/timelapse/2018.jpg", year: 2018 },
    { url: "/timelapse/2019a.jpg", year: 2019 },
    { url: "/timelapse/2019b.jpg", year: 2019 },
    { url: "/timelapse/2020a.jpg", year: 2020 },
    { url: "/timelapse/2020b.JPG", year: 2020 },
    { url: "/timelapse/2021.jpg", year: 2021 },
    { url: "/timelapse/2021b.jpg", year: 2021 },
    { url: "/timelapse/NeaGroup1.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup2.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup3.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup4.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup5.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup6.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup7.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup8.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup9.jpg", year: 2022 },
    { url: "/timelapse/NeaGroup10.jpg", year: 2022 },
    { url: "/timelapse/2023a.jpg", year: 2023 },
    { url: "/timelapse/2023b.jpg", year: 2023 },
    { url: "/timelapse/2023c.jpg", year: 2023 },
    { url: "/timelapse/2023d.jpg", year: 2023 },
  ];

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="section1" className={styles.sectionMain}>
        <div className={styles.column1}>
          <div className={styles.photo}>
            <Image
              className={styles.imageS1}
              src="/tallerCResuelto.png"
              alt=""
              width={500}
              height={350}
              /* objectFit="cover" */
            />
          </div>
          <div className={styles.text}>
            <p>
              <strong>
                <i>Taller Cultura es una asociación fundada en 2013</i>
              </strong>{" "}
              para la promoción de la cultura, las ciencias sociales y
              humanísticas, con un interés especial en entrelazar las áreas de
              literatura, medioambiente y sociedad. Buscamos generar iniciativas
              que contribuyan de manera solidaria a la equidad de oportunidades
              para el desarrollo humano, a una relación armónica con nuestro
              hábitat natural y a fortalecer el acceso a la cultura, a través de
              las Artes, la Comunicación, los Derechos Humanos y la Ecología. El
              grupo está formado por profesionales en el derecho, la docencia,
              las humanidades y la escritura, junto con voluntariado de
              colaboradores con otras experticias.
              <br />
              <br />
            </p>
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.text2}>
            <p>
              Entre nuestras principales actividades se cuenta la promoción de
              la lectura y la literatura. Queremos que la literatura sea hermana
              del quehacer diario, ya como lectores o como escritores, y para
              tal propósito{" "}
              <strong>
                <i>
                  desde 2014 venimos realizando charlas, conversatorios y
                  recitales
                </i>
              </strong>{" "}
              que incentiven al público, en especial a los jóvenes, a acercarse
              a autores panameños e internacionales.
              <br />
              <br />
              Como creadores de contenido{" "}
              <strong>
                <i>
                  a partir de 2019 establecimos la división Taller Cultura
                  Publicaciones
                </i>
              </strong>
              , ofreciendo servicios y sello editorial no lucrativo para el
              acompañamiento de escritores. Igualmente, ofrecemos asesorías
              privadas, lingüístico-literarias, sobre género y cultura, entre
              otros, en un nutrido intercambio de ideas, respetuoso de la
              diferencia pero también del idioma, y con información documentada.
              <br />
              <br />
              En la línea de nuestro interés por la juventud,{" "}
              <strong>
                <i>en 2022 debutó El Programa NEA</i>
              </strong>
              , que en griego significa nuevo y joven. Este es un programa de
              capacitación y mentoría en emprendimiento y vida ciudadana, con
              enfoque intergeneracional, que apoya a jóvenes ávidos de arrancar
              en una sociedad difícil como la nuestra. Nos interesa trabajar con
              este grupo para dotarlos de herramientas prácticas para la vida y
              de valores humanísticos fundamentales para las nuevas
              generaciones.
              <br />
              <br />
              Nuestra próxima aventura: ¡nuestra página web, pronto....! De
              momento, nos pueden contactar a través de nuestras redes sociales
              y correo: @fundaciontallercultura
            </p>
          </div>
        </div>
        <div className={styles.personasSection}>
          <button
            onClick={() => setModalPersonas(true)}
            className={styles.personasButton}
          >
            Personas
          </button>
        </div>
      </section>
      <section id="section1" className={styles.sectionMini}>
        <Image
          className={styles.imageS1}
          src="/tallerCResuelto.png"
          alt=""
          width={500}
          height={350}
          /* objectFit="cover" */
        />
        <div className={styles.text}>
          <p>
            <strong>
              <i>Taller Cultura es una asociación fundada en 2013</i>
            </strong>{" "}
            para la promoción de la cultura, las ciencias sociales y
            humanísticas, con un interés especial en entrelazar las áreas de
            literatura, medioambiente y sociedad. Buscamos generar iniciativas
            que contribuyan de manera solidaria a la equidad de oportunidades
            para el desarrollo humano, a una relación armónica con nuestro
            hábitat natural y a fortalecer el acceso a la cultura, a través de
            las Artes, la Comunicación, los Derechos Humanos y la Ecología. El
            grupo está formado por profesionales en el derecho, la docencia, las
            humanidades y la escritura, junto con voluntariado de colaboradores
            con otras experticias.
            <br />
            <br />
            Entre nuestras principales actividades se cuenta la promoción de la
            lectura y la literatura. Queremos que la literatura sea hermana del
            quehacer diario, ya como lectores o como escritores, y para tal
            propósito{" "}
            <strong>
              <i>
                desde 2014 venimos realizando charlas, conversatorios y
                recitales
              </i>
            </strong>{" "}
            que incentiven al público, en especial a los jóvenes, a acercarse a
            autores panameños e internacionales.
            <br />
            <br />
            Como creadores de contenido{" "}
            <strong>
              <i>
                a partir de 2019 establecimos la división Taller Cultura
                Publicaciones
              </i>
            </strong>
            , ofreciendo servicios y sello editorial no lucrativo para el
            acompañamiento de escritores. Igualmente, ofrecemos asesorías
            privadas, lingüístico-literarias, sobre género y cultura, entre
            otros, en un nutrido intercambio de ideas, respetuoso de la
            diferencia pero también del idioma, y con información documentada.
            <br />
            <br />
            En la línea de nuestro interés por la juventud,{" "}
            <strong>
              <i>en 2022 debutó El Programa NEA</i>
            </strong>
            , que en griego significa nuevo y joven. Este es un programa de
            capacitación y mentoría en emprendimiento y vida ciudadana, con
            enfoque intergeneracional, que apoya a jóvenes ávidos de arrancar en
            una sociedad difícil como la nuestra. Nos interesa trabajar con este
            grupo para dotarlos de herramientas prácticas para la vida y de
            valores humanísticos fundamentales para las nuevas generaciones.
            <br />
            <br />
            Nuestra próxima aventura: ¡nuestra página web, pronto....! De
            momento, nos pueden contactar a través de nuestras redes sociales y
            correo: @fundaciontallercultura
          </p>
        </div>
      </section>
      <section id="section2" className={styles.section2}>
        <h2 className={styles.timelineTitle}>Nuestra Historia en Imágenes</h2>
        <p className={styles.timelineDescription}>
          Navega por los distintos años para ver nuestras actividades a lo largo
          del tiempo
        </p>
        <TimelineCarousel images={images} />
      </section>

      <PersonasModal
        modalPersonas={modalPersonas}
        setModalPersonas={setModalPersonas}
        personas={personas}
      />
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Footer page="/tallerCultura" section1="Section 1" section2="Section 2" />
    </div>
  );
}
