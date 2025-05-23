import Link from "next/link";
import Image from "next/image.js";
import { useState } from "react";
/* COMPONENTS */
import Forms from "../components/Forms.js";
import FormSend from "../components/modals/FormSend.js";
/* DATA */

/* STYLES */
import styles from "../styles/Footer.module.css";

export default function Footer(props) {
  const [modalFormSend, setModalFormSend] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linkPages}>
          <h4>Páginas</h4>
          <div className={styles.itemPages}>
            <Link href="/">
              {/* aria-current="page"> */}
              <i className="bi bi-house-fill"></i>Inicio
            </Link>
          </div>
          <div className={styles.itemPages}>
            <Link href="/quien">
              <Image
                className={styles.group}
                src="/icons/quien11552c.png"
                alt="Ariadna Garcia"
                width={20}
                height={20}
              />
              ¿Quién?
            </Link>
          </div>
          <div className={styles.itemPages}>
            <Link href="/haceres">
              <Image
                className={styles.group}
                src="/icons/haceres9351713b.png"
                alt="Ariadna Garcia"
                width={20}
                height={20}
              />
              Haceres
            </Link>
          </div>
          <div className={styles.itemPages}>
            <Link href="/andares">
              <Image
                className={styles.group}
                src="/icons/andares11552b.png"
                alt="Ariadna Garcia"
                width={20}
                height={20}
              />
              Andares
            </Link>
          </div>
          <div className={styles.itemPages}>
            <Link href="/tallerCultura">
              <Image
                className={styles.group}
                src="/icon.png"
                alt="Ariadna Garcia"
                width={20}
                height={20}
              />
              Taller cultura
            </Link>
          </div>
          <div className={styles.itemPages}>
            <Link href="/contacto">
              <i className="bi bi-envelope-paper-fill"></i>Blog / Contacto
            </Link>
          </div>
        </div>
        <div className={styles.linkSection}>
          <h4>Secciones</h4>
          <div className={styles.itemSection}>
            <a href={props.page + "#section1"} aria-current="page">
              {props.section1}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#section2"} aria-current="page">
              {props.section2}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#section3"} aria-current="page">
              {props.section3}
            </a>
          </div>
          <div className={styles.itemSection}>
            <a href={props.page + "#section4"} aria-current="page">
              {props.section4}
            </a>
          </div>
        </div>
        <div className={styles.contact_form}>
          <Forms
            modalFormSend={modalFormSend}
            setModalFormSend={setModalFormSend}
          />
        </div>
        <FormSend
          modalFormSend={modalFormSend}
          setModalFormSend={setModalFormSend}
        />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainer2}>
          <div className={styles.footerContainer3}>
            <div className={styles.footerLay}>
              &copy; {currentYear}{" "}
              <Link href="https://rgarciadev.vercel.app/" className={styles.footerLink}>
                7hodev
              </Link>
              . Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
