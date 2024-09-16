import styles from "./ProjectCard.module.css";
import iconHtml from "../Icons/Html";
import iconCss from "../Icons/Css";
import iconJs from "../Icons/JavaScript";
import iconTypeScript from "../Icons/TypeScript";
import iconPython from "../Icons/Python";
import iconNest from "../Icons/NestJS";
import iconReact from "../Icons/React";
import iconNode from "../Icons/Node";
import iconMySql from "../Icons/MySql";
import iconLinkedin from "../Icons/Linkedin";
import iconGithub from "../Icons/Github";
import React, { useEffect, useRef, useState } from "react";
const ProjectCard = ({ title, description, languages, image }) => {
  const cardRef = useRef(null); // Referencia a la card

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible); // Añade la clase visible cuando está en vista
            observer.unobserve(entry.target); // Deja de observar una vez que es visible
          }
        });
      },
      {
        threshold: 0.3, // Ejecuta la animación cuando el 10% de la card esté visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current); // Observa el ref de la card
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current); // Limpia la observación al desmontar
    };
  }, []);

  const languageIcons = {
    HTML: iconHtml,
    CSS: iconCss,
    JavaScript: iconJs,
    TypeScript: iconTypeScript,
    Python: iconPython,
    React: iconReact,
    "Node.js": iconNode,
    NestJS: iconNest,
    MySQL: iconMySql,
    Linkedin: iconLinkedin,
    Github: iconGithub,
  };

  return (
    <article className={`${styles.projectCard}`} ref={cardRef}>
      <header className={styles.header}>
        <figure>
          <img src={image} alt="" />
        </figure>
      </header>
      <main className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.tags}>
          {languages.map((language, index) => {
            const Icon = languageIcons[language];
            return (
              <div key={index} className={styles.tag}>
                {Icon && <Icon className={styles.icon} />}
                <span>{language}</span>
              </div>
            );
          })}
        </div>
        <p className={styles.description}>{description}</p>
      </main>
    </article>
  );
};

export default ProjectCard;
