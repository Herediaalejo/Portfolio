import styles from "./Welcome.module.css";
import logo from "../../assets/logo.png";
import { FaArrowDown } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import { useEffect, useState } from "react";
const Welcome = () => {
  // Estado para controlar la visibilidad de la flecha
  const [isVisible, setIsVisible] = useState(true);

  // Maneja la visibilidad de la flecha según el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calcula la posición de scroll en la ventana
      const scrollPosition = window.scrollY;

      // Define la posición donde la flecha desaparecerá (ejemplo: 300px)
      const hidePosition = 300;

      // Actualiza la visibilidad de la flecha basado en la posición de scroll
      if (scrollPosition > hidePosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Agrega el event listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Remueve el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className={styles.welcomeContainer} id="home">
        <main className={styles.mainContainer}>
          <div className={styles.titleContainer}>
            <figure className={styles.avatarContainer}>
              <img src={logo} alt="logo" className={`${styles.avatar}`} />
            </figure>
            <h1 className={styles.title}>Alejo Manuel Heredia</h1>
            <h2 className={styles.subtitle}>Desarrollador de Software</h2>
            <p className={styles.description}>
              Apasionado por la tecnología y el desarrollo de software, me
              especializo en la creación de interfaces accesibles y responsivas
              que mejoren la experiencia del usuario.
            </p>
            <br />
            <p className={styles.description}>
              Mi dedicación y autoexigencia me han permitido desarrollar
              habilidades sólidas en React, lo que me permite construir
              aplicaciones web modernas y eficientes.
            </p>
            <br />
            <p className={styles.description}>
              Me considero una persona responsable y proactiva, siempre
              dispuesta a enfrentar nuevos desafíos y a aprender continuamente.
              Estoy entusiasmado por la oportunidad de aplicar mis conocimientos
              en un entorno de desarrollo dinámico y contribuir a proyectos
              innovadores.
            </p>
          </div>
        </main>
        <div className={styles.socialContainer}>
          <a href="https://github.com/herediaalejo" target="_blank">
            Github <Github />
          </a>
          <a href="https://www.linkedin.com/in/alejo-heredia/" target="_blank">
            Linkedin <Linkedin />
          </a>
          <a href="/herediaalejo-CV.pdf" download>
            Descargar CV <FiDownload />
          </a>
        </div>
      </section>
      <div className={styles.arrowContainer}>
        <FaArrowDown
          className={`${styles.arrow} ${!isVisible && styles.hidden}`}
        />
      </div>
    </>
  );
};

export default Welcome;
