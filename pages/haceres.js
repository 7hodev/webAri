import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import Comentarios from "../components/modals/Comentarios";
/* STYLES */
import styles from "../styles/Haceres.module.css";

export default function Haceres({
  scrollUpFunction,
  styleScrollUp,
  menuOpen,
  setMenuOpen,
}) {
  const [comentario, setComentario] = useState(false);
  const [comentario2, setComentario2] = useState(false);
  const [comentario3, setComentario3] = useState(false);
  const [comentario4, setComentario4] = useState(false);
  const [comentario21, setComentario21] = useState(false);
  const [comentario31, setComentario31] = useState(false);
  const [comentario32, setComentario32] = useState(false);
  const [comentario41, setComentario41] = useState(false);
  const [comentario51, setComentario51] = useState(false);
  const [comentario52, setComentario52] = useState(false);
  const [comentario61, setComentario61] = useState(false);
  const [comentario62, setComentario62] = useState(false);
  const [comentario63, setComentario63] = useState(false);

  // Cart
  const cart = () => {
    setComentario(!comentario);
    /*var sound = new Audio("sounds/cart.wav");
    sound.play();
    sound.volume = 0.2;*/
  };

  const cart2 = () => {
    setComentario2(!comentario2);
  };
  const cart3 = () => {
    setComentario3(!comentario3);
  };
  const cart4 = () => {
    setComentario4(!comentario4);
  };
  const cart21 = () => {
    setComentario21(!comentario21);
  };
  const cart31 = () => {
    setComentario31(!comentario31);
  };
  const cart32 = () => {
    setComentario32(!comentario32);
  };
  const cart41 = () => {
    setComentario41(!comentario41);
  };
  const cart51 = () => {
    setComentario51(!comentario51);
  };
  const cart52 = () => {
    setComentario52(!comentario52);
  };
  const cart61 = () => {
    setComentario61(!comentario61);
  };
  const cart62 = () => {
    setComentario62(!comentario62);
  };
  const cart63 = () => {
    setComentario63(!comentario63);
  };

  return (
    <div className={styles.body}>
      <Navbar />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <section id="section1" className={styles.section1}>
        <div className={styles.videoBackground}>
          <video autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
            {/* Add additional source elements for other formats if necessary */}
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className={styles.publicaciones}>
        <div className={styles.publi}>
          <div className={styles.container1}>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/portada_tapa_geopsiquis_final_feb2024.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2024 - Geopsiquis de una nación <br />
                Ensayos sobre una forma terrrestre
              </h3>
            </div>
            <div className={styles.comentarios}>
              <Comentarios
                modalForm={comentario61}
                setModalForm={setComentario61}
                comentario="Destacada ensayista de experiencia y sólida formación investigativa, García Rodríguez explora la relación entre literatura e historia panameña desde lo geográfico, contribuyendo con ello a una comprensión de la identidad nacional que disipa los mitos asentados en el relato oficial; ejercicio de metódica lucidez argumentativa y poética"
                people="Eyra Harbar"
                more="Escritora y abogada (Panamá)."
              />
              <button className={styles.comentario} onClick={cart61}>
                Eyra Harbar
              </button>
              <Comentarios
                modalForm={comentario62}
                setModalForm={setComentario62}
                comentario="Aporte trascendental para la comprensión del hecho nacional panameño, estos escritos trascienden los límites disciplinares de la crítica literaria para situarnos en una reflexión profunda, más abarcadora, acerca de lo que es la nación y sobre cómo se ha construido su imaginario, incluso fuera de sus fronteras. La obra de García Rodríguez se convertirá en un referente obligado para quien estudie la historia de nuestro país."
                people="Olmedo Beluche"
                more="Ensayista y sociólogo"
              />
              <button className={styles.comentario2} onClick={cart62}>
                Olmedo Beluche
              </button>
              <Comentarios
                modalForm={comentario63}
                setModalForm={setComentario63}
                comentario="De la pluma de Ariadna García Rodríguez hacemos una travesía por la Mar del Sur y sus implicaciones pasadas y presentes, hasta este siglo XXI, en donde el imaginario colectivo, con sus leyendas urbanas, trastoca la cotidianidad de lo panameño, extendiéndose al resto de la región centroamericana. Balboa, el Canal Interoceánico, Panamá y la poesía conforman un corpus heterogéneo de reflexiones científicas, histórico-geográficas, políticas y literarias, que se hilan a la perfección en este ensayo, auténtica joya literaria y pieza importante para comprender la historia de todo el Istmo."
                people="Marta Leonor González"
                more="Periodista, editora y escritora nicaragüense"
              />
              <button className={styles.comentario3} onClick={cart63}>
                Marta Leonor González
              </button>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.comentarios}>
              <Comentarios
                modalForm={comentario41}
                setModalForm={setComentario41}
                comentario="“Es un yo lírico tenaz, recio, fuerte, armado con la ironía. Sus poemas son también canciones con letra y música para que tengan todos los lenguajes del Horus. Visual, auditivo, kinésico para aumentar su poder de movilización emocional.”"
                people="Rafael Ruiloba"
                more="Catedrático y escritor (Panamá)."
              />
              <button className={styles.comentario} onClick={cart41}>
                Rafael Ruiloba
              </button>
            </div>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/afrodita.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2022 - La nueva canción de Afrodita.
                <br />
                Estudio y antología de poesía femenina
                <br />
                posmoderna en Panamá
              </h3>
            </div>
          </div>

          <div className={styles.container1}>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/agr-patrimonio-intangible.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>2018 - Patrimonio intangible</h3>
            </div>
            <div className={styles.comentarios}>
              <Comentarios
                modalForm={comentario31}
                setModalForm={setComentario31}
                comentario="“La voz poética bethancourtiana cobra aquí otras formas y matices, experimentado con formatos más extensos y nuevas temáticas.”"
                people="Joan A. Martí"
                more="Filólogo (España)."
              />
              <button className={styles.comentario} onClick={cart31}>
                Joan A. Martí
              </button>
              <Comentarios
                modalForm={comentario32}
                setModalForm={setComentario32}
                comentario="“Poeta en la que vemos oficio, con estilo y lenguaje propio.”"
                people="Sebastián Realini"
                more="Poeta y editor (Argentina)"
              />
              <button className={styles.comentario2} onClick={cart32}>
                Sebastián Realini
              </button>
            </div>
          </div>

          <div className={styles.container2}>
            <div className={styles.comentarios}>
              <Comentarios
                modalForm={comentario21}
                setModalForm={setComentario21}
                comentario="“Trabajo experimental de poesía sonora que busca dejar atrás la simple musicalización de poemas en pos de un verdadero dialogo creativo entre dos disciplinas artísticas: la composición musical y la composición poética, tal como lo dice Bethancourt en el epígrafe de la caratula: porque la conversación y sus alteraciones son un atributo más de lo poético y lo musical. Realizado en conjunto con la Maestra Electra Castillo, compositora e instrumentista, el mismo consta de piezas cortas, para oboe, cuerdas y piano, concebidas a manera de ensayo sinfónico en respuesta al poemario, mientras la voz de la poeta da vida a los poemas. Se llevó a cabo una presentación del libro y un concierto preliminar en la antigua Exedra Books, en 2012.”"
                people="Eyra Harbar"
                more="Escritora y abogada (Panamá)."
              />
              <button className={styles.comentario} onClick={cart21}>
                Eyra Harbar
              </button>
            </div>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/carrusel/Foto2b.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2014 - Opus sostenido. Alegoría musical
                <br /> para Abrazos de una nariz sin olfato
              </h3>
            </div>
          </div>
          <div className={styles.container1}>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/abrazosparaunanarizsinolfato.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>2012 - Abrazos de una nariz sin olfato</h3>
            </div>
            <div className={styles.comentarios}>
              <Comentarios
                modalForm={comentario}
                setModalForm={setComentario}
                comentario="“Hay un gusto barroco por la cifra y lo cifrado, en una especie de anti títulos donde se matiza la presencia o ausencia del número de manera aleatoria, casi como función u obsesión pitagórica. En el primer poema sin cifra, de apenas 4 versos, reside la clave del libro, el juego tierno y feroz entre el instante y una eternidad que quizás no exista, de una vida amenazada por el vacío. No esperen al leerlo salir con todas las respuestas, porque nos obliga a reflexionar en una invitación al abrazo más intenso a pesar de que lo que exista al final sea la desilusión total. Este es un libro que nos hace plantearnos dudas y enigmas.”"
                people="Leonel Alvarado"
                more="Poeta y académico (Honduras/Nueva Zelanda)."
              />
              <button className={styles.comentario} onClick={cart}>
                Leonel Alvarado
              </button>
              <Comentarios
                modalForm={comentario2}
                setModalForm={setComentario2}
                comentario="“Título sugestivo y kinestésico, encerrado en paréntesis. Territorio de asombro que desvela lo inusual. Poeta de fino palpar, y me refiero a esa epidermis del lenguaje suave, melodioso a veces, sin embargo, el poema no se da de manera fácil, ningún auténtico poema lo es. Aguza los sentidos para tomar el escarpelo e insertarlo en la interioridad del poema. Usa versos de arte menor y poemas breves. No hay desmesura, más bien, concentración. Esto me agrada ante el palabrerío insustancial de muchos poetas.”"
                people="Víctor Bidó"
                more="Ensayista (Rep. Dominicana)."
              />
              <button className={styles.comentario2} onClick={cart2}>
                Víctor Bidó
              </button>
              <Comentarios
                modalForm={comentario3}
                setModalForm={setComentario3}
                comentario="“Trabajo de largo aliento, obra pulida, esculpe con ironía y humor pasajes infinitamente humanos, en lo que entendemos es un poemario para tallar el retorno. La dedicatoria “A la esperanza, aniquiladora de todo pesimismo” sella esa persistencia inquebrantable, gesto a partir del cual se inicia el repertorio de movimientos de la palabra como materia prima. De versos cincelados, sus herramientas de trabajo son abrazos: 16 secciones de abrazos con cifras aleatorias, 4 sin cifra y una sección de abrazos excedentes. El libro es también un viaje des-localizado de tierra alguna, viaje hacia una morada sin paradero fijo, cuyas diferentes citas e idiomas revelan una trayectoria de abrazos itinerantes, casi desarraigados. No obstante, a través de ellos la morada interior prevalece como casa-territorio, como escenario de lo propio; allí, la memoria deja su huella, su talla imborrable porque el itinerario vuelve siempre a la intimidad del abrazo.”"
                people="Eyra Harbar"
                more="Poeta y abogada (Panamá)."
              />
              <button className={styles.comentario3} onClick={cart3}>
                Eyra Harbar
              </button>
              <Comentarios
                modalForm={comentario4}
                setModalForm={setComentario4}
                comentario="“La voz de Abrazos de una nariz sin olfato persigue imágenes, las elige cuidadosamente y las ofrece, luego de una reflexión poética, depuradas, casi como instantáneas pictóricas (…) Y muchas de estas imágenes son descarnadas, cosa que no deja indiferente al lector.”"
                people="Sonia Fernández Hoyos"
                more="Académica y crítica literaria (Francia)."
              />
              <button className={styles.comentario4} onClick={cart4}>
                Sonia Fernández Hoyos
              </button>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.comentarios}>
              <Comentarios
                modalForm={comentario51}
                setModalForm={setComentario51}
                comentario="“Considero que este ensayo es un trabajo completo que analiza la relación de la crónica y la ficción en la novela de Méndez Pereira.”"
                people="Luis Pulido Ritter"
                more="Ensayista y académico (Panamá)"
              />
              <button className={styles.comentario} onClick={cart51}>
                Luis Pulido Ritter
              </button>
              <Comentarios
                modalForm={comentario52}
                setModalForm={setComentario52}
                comentario="“Balboa, así, se convierte en “el signo proliferado de lo auténticamente panameño” como bien destaca García Rodríguez en su seminal artículo, […] pues “la figura del conquistador asume su papel de símbolo de lo nacional en la medida en que el mismo representa el ‘inicio’ del país a nivel histórico-geográfico.”"
                people="Carlos Fitzgerald"
                more="Arqueólogo y antropólogo (Panamá)"
              />
              <button className={styles.comentario2} onClick={cart52}>
                Carlos Fitzgerald
              </button>
            </div>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/nunezdebalboa.png"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                1999, 2001 y 2013 - Vasco Núñez de Balboa
                <br /> y la geopsiquis de una nación
              </h3>
            </div>
          </div>
          <div className={styles.container1}>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/laPaginaEnBlanco.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2003 - La página en blanco de lo tropical: <br />
                la literatura latinoamericana
                <br />
                en Francia y Estados Unidos
              </h3>
            </div>
            <div className={styles.comentarios}>
              <p>
                La página en blanco de lo tropical: la literatura
                latinoamericana en Francia y Estados Unidos, ensayo
                didáctico-cultural en Enseignement et recherche sur l’art et la
                littérature d’Amérique Latine en France, Actes del Coloquio
                Internacional, Universidad de Metz, Francia, 2003, pp. 147-162.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.extras}>
          <div className={styles.container2}>
            <div className={styles.comentarios}>
              <p>
                Por un pétrea crónica de agua: estudio introductorio, estudio
                introductorio sobre el poemario Xibalbá: Texas de Leonel
                Alvarado, Colección Premio Centroamericano Rogelio Sinán,
                Universidad Tecnológica de Panamá, 2014, pp. 5-13.
              </p>
            </div>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/xibalba.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2014 - Por un pétrea crónica de agua: <br />
                estudio introductorio
              </h3>
            </div>
          </div>
          <div className={styles.container1}>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/memoria.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>2015 - Memoria Institucional</h3>
            </div>
            <div className={styles.comentarios}>
              <p>
                Trabajo colaborativo junto a Liriola Leoteau y Eyra Harbar.
                Participación en la creación y redacción. Responsable de la
                edición, corrección y diseño, Panamá, 2016.
              </p>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.comentarios}>
              <p>
                Paisaje y desarraigo en la escritura jaramilloleviana, estudio
                sobre la obra del escritor Enrique Jaramillo Levi en Habitar la
                escritura. -De `Duplicaciones´ (1973) a ´Inmersiones` (2019)-
                Indagaciones sobre la obra literaria de Enrique Jaramillo Levi,
                Foro/Taller Sagitario Ediciones, Panamá, 2019, pp. 17-51.
              </p>
            </div>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/laEscritura.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2004 y 2019 - Paisaje y desarraigo en la <br />
                escritura jaramilloleviana
              </h3>
            </div>
          </div>
          <div className={styles.container1}>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/laNocheDeLosCocuyos.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>
                2019 - Para una noche que comienza <br />
                La noche de los cocuyos
              </h3>
            </div>
            <div className={styles.comentarios}>
              <p>
                Para una noche que comienza, prólogo, edición y corrección del
                libro de cuentos La noche de los cocuyos de Danae Brugiati,
                Taller cultura publicaciones, Panamá, 2019, pp. 11-17.
              </p>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.comentarios}>
              <p>
                Canto de cenizas sobre el agua, artículo-reseña del poemario
                `Managua 38º´ de Marta Leonor González (Nicaragua) en Realidad:
                Revista de Ciencias Sociales y Humanidades (156): 2021, pp.
                247-253.
              </p>
            </div>
            <div className={styles.libro1}>
              <Image
                className={styles.libro1img}
                src="/Realidad.jpg"
                alt="Ariadna Garcia"
                width={300}
                height={370}
                priority
              />
              <h3>2021 - Canto de cenizas sobre el agua</h3>
            </div>
          </div>
        </div>
      </section>

      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
     <Footer
        page="/haceres"
        section1="Section 1"
        section2="Section 2"
        section3="Section 3"
      />
    </div>
  );
}
