import React, { useState, useEffect, useContext } from "react";
import { FaHome, FaBrain, FaEnvelope } from "react-icons/fa"; // Importa los íconos
import { MdWork } from "react-icons/md";

import styles from "./NavBar.module.css";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import { WideScreenContext } from "../../context/WideScreenContext";

const NavBar = () => {
  const { isWideScreen } = useContext(WideScreenContext);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#home">
            {isWideScreen ? "Inicio" : <FaHome />}{" "}
            {/* Texto o ícono según el ancho */}
          </a>
        </li>
        <li className={styles.item}>
          <a href="#projects">
            {isWideScreen ? "Proyectos" : <MdWork />} {/* Texto o ícono */}
          </a>
        </li>
        {!isWideScreen && (
          <li className={styles.item}>
            <ToggleTheme /> {/* Texto o ícono */}
          </li>
        )}
        <li className={styles.item}>
          <a href="#skills">
            {isWideScreen ? "Habilidades" : <FaBrain />} {/* Texto o ícono */}
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contact">
            {isWideScreen ? "Contacto" : <FaEnvelope />} {/* Texto o ícono */}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
