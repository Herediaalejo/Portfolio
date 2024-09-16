import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import orders from "../../assets/OrderTracker/Orders.webp";
import climateDesktop from "../../assets/ClimateApp/Desktop.webp";
import trivia from "../../assets/Trivia/Preguntas.webp";
import movies from "../../assets/MoviesApp/movies.webp";

const Projects = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      <h2 className={styles.title}>Proyectos</h2>
      <div className={styles.projectsWrapper}>
        <ProjectCard
          title={"Order Tracker - Lomitos X2"}
          description={
            "Este es un sistema integral de gestión que abarca pedidos, productos, stock, empleados, clientes, entre otros. Fue desarrollado para un local gastronómico en Córdoba Capital y, tras un exitoso proceso de desarrollo, pronto estará disponible para la empresa, permitiéndole gestionar y controlar su información de forma más eficiente."
          }
          languages={[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "NestJS",
            "TypeScript",
            "MySQL",
          ]}
          image={orders}
        />
        <ProjectCard
          title={"Climate App"}
          description={
            "Esta aplicación web responsive permite consultar la temperatura, humedad, velocidad del viento y el estado del clima en cualquier ciudad del mundo. Diseñada con HTML, CSS y JavaScript puro para una experiencia fluida y rápida, utiliza la API de OpenWeatherMap para obtener datos meteorológicos precisos y actualizados en tiempo real. La interfaz está optimizada para ser intuitiva y funcional en dispositivos de escritorio, tablets y smartphones."
          }
          languages={["HTML", "CSS", "JavaScript"]}
          image={climateDesktop}
        />
        <ProjectCard
          title={"Trivia Institucional"}
          description={
            "Este juego de trivia, desarrollado en 2023 para un workshop en mi instituto, permite a los usuarios jugar, registrar sus resultados y ver una tabla con los puntajes y tiempos de otros jugadores. Incluye un formulario para nuevos jugadores y utiliza Python y Tkinter para la interfaz gráfica, junto con una base de datos SQL para gestionar la información del juego."
          }
          languages={["Python", "MySQL"]}
          image={trivia}
        />
        <ProjectCard
          title={"Buscador de Peliculas"}
          description={
            "Aplicación versátil diseñada para buscar películas de interés y proporcionar información detallada sobre cada una. Permite a los usuarios consultar sinopsis, duración, valoración y otros datos relevantes, facilitando la exploración y el descubrimiento de películas. Ideal para quienes desean obtener información completa antes de decidir qué ver."
          }
          languages={["HTML", "CSS", "JS", "React", "Node.js", "MySql"]}
          image={movies}
        />
      </div>
    </section>
  );
};

export default Projects;
