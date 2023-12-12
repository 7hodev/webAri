import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
/* DATA */
import { clients } from "../components/data/dataClients";
/* STYLES */
import styles from "../styles/Quien.module.css";

export default function Quien({
  scrollUpFunction,
  styleScrollUp,
  styleBurger,
}) {
  /* console.log(Image) */

  return (
    <div className={styles.body}>
      <Navbar />
      <section id="section1" className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/bbpbethancourt.png"
          alt=""
          width={1400}
          height={550}
          /* objectFit="cover" */
        />
        {/* <Image
                            className={styles.imageS1}
                            src="/icecream.jpg"
                            alt=""
                            width={414}
                            height={573}
                            objectFit="cover"
                            objectPosition="15%"
                        /> */}
        <div className={styles.text1_a1_s1}>
          <h1>BBP Bethancourt</h1>
          <div className={styles.poema}>
            <h2>Abrazo sin cifra</h2>
            <p>
              Y te quiere la abrumadora ira
              <br />
              que se niega hacer este viaje hacia la muerte,
              <br />
              sin haber logrado ese instante de ternura
              <br />
              que la redima en la eternidad
            </p>
          </div>
          <Link href="/#section2">Abrazos para una nariz sin olfato</Link>
        </div>
      </section>
      <section id="section2" className={styles.section2}>
        <h3>Línea de tiempo</h3>
        <div className={styles.timelapse}>
          <div className={styles.date}>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
            <p>2023</p>
          </div>
          <div className={styles.buttons}>
            <a href="/trayectoria/#evento1">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
            <div className={styles.line}></div>
            <a href="">.</a>
          </div>
        </div>
        <div className={styles.title}>
          <h3>Nota biográfica</h3>
          <h2>
            <strong>Ariadna García Rodríguez</strong>
            <br />
            (pseudónimo <strong>BBP Bethancourt</strong>)
          </h2>
        </div>
        <div className={styles.description}>
          <p>
            Cuenta con experiencia internacional y experticia cultural
            desarrollada en Estados Unidos, Francia, España, Grecia y Panamá
            como docente-formadora, investigadora, escritora, traductora y
            editora de materiales impresos. Es cofundadora y vicepresidenta de
            la Asociación sin fines de lucro{" "}
            <strong>
              <i>Taller Cultura</i>
            </strong>{" "}
            (2013 al presente), donde ejerce, además, como directora de{" "}
            <i>Taller Cultura Publicaciones</i>. Igualmente, forma parte de la
            organización no gubernamental{" "}
            <strong>
              <i>Con Igualdad</i>
            </strong>{" "}
            (desde 2021 al presente), donde funge como vocal. De 2015 a 2019
            ejerció como enlace técnico para organismos y conferencias
            internacionales con carácter de representación de país en la Oficina
            de Cooperación Internacional, del entonces Instituto Nacional de la
            Mujer de la República de Panamá (INAMU). Tiene en su haber
            publicaciones en escritura creativa, en Panamá y en el extranjero,
            bajo el seudónimo literario{" "}
            <strong>
              <i>B.B.P. Bethancourt</i>
            </strong>{" "}
            (en honor a su madre y sus abuelas), entre estas{" "}
            <strong>Abrazos de una nariz sin olfato</strong>, España 2012;
            <strong> Patrimonio Intangible</strong>, El Salvador 2018;{" "}
            <strong>
              Opus sostenido: alegoría musical de Abrazos de una nariz sin
              olfato
            </strong>
            , Panamá 2014 (poesía sonora). Como ensayista destaca un artículo
            conocido en el medio académico nacional titulado{" "}
            <i>“Vasco Núñez de Balboa o la geopsiquis de una nación” (2001)</i>{" "}
            el cual trata sobre la construcción de la identidad nacional
            panameña a través de la figura del conquistador. Sus áreas de
            interés son los estudios espaciales (de corte geo-históricos) y
            lingüísticos-literarios, cultura y sociedad, derechos humanos de las
            mujeres y cooperación internacional. Actualmente, brinda servicios
            de docencia, formación y mentoría en asuntos de orden
            socio-lingüístico, artístico-cultural, formación ciudadana y
            emprendimiento, en línea y presencial, para diferentes públicos; así
            como consultorías relacionadas a cooperación para el desarrollo y
            género.
          </p>
          {/*
<p>
                    <strong>La palabra provocada</strong>. Antología poética panameña. Editor José Antonio Contreras Ramórez. Instituto Cultural Iberoamericano: España, 2019.
                    </p>
                    */}
        </div>
      </section>
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Burger styleBurger={styleBurger} />
      <Footer page="/quien" section1="Section 1" section2="Section 2" />
    </div>
  );
}
