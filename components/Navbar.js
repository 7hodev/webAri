import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Burger from "./Burger";
/* STYLES */
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const link = () => {
    var sound = new Audio("sounds/close.wav");
    sound.play();
  };

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoA}>
          <h1>Ariadna García Rodríguez (BBP Bethancourt)</h1>
        </div>
        <div className={styles.line}></div>
        <div className={styles.navbar}>
          <div className={styles.item}>
            <Link href="/">
              <i className="bi bi-house-fill"></i>Inicio
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/quien">
              <i className="bi bi-people-fill"></i>¿Quién?
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/haceres">
              <i class="bi bi-pencil-fill"></i>Haceres
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/andares">
              <i class="bi bi-pencil-fill"></i>Andares
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/tallerCultura">
              <Image
                className={styles.group}
                src="/icons/icon.png"
                alt="Ariadna Garcia"
                width={20}
                height={20}
              />
              Taller Cultura
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/contacto">
              <i className="bi bi-envelope-paper-fill"></i>Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
