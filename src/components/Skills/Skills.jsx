import styles from "./Skills.module.css";
import IconHtml from "../Icons/Html";
import IconCss from "../Icons/Css";
import IconJs from "../Icons/JavaScript";
import IconPython from "../Icons/Python";
import IconNest from "../Icons/NestJS";
import IconReact from "../Icons/React";
import IconNode from "../Icons/Node";
import IconMySql from "../Icons/MySql";
import IconJava from "../Icons/Java";
import IconTypeScript from "../Icons/TypeScript";

const Skills = () => {
  return (
    <section className={styles.skillsContainer} id="skills">
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.skills}>
        <IconHtml />
        <IconCss />
        <IconJs />
        <IconTypeScript />
        <IconPython />
        <IconJava />
        <IconReact />
        <IconNest />
        <IconNode />
        <IconMySql />
      </div>
    </section>
  );
};

export default Skills;
