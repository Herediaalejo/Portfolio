import { useContext, useEffect, useState } from "react";
import styles from "./ToggleTheme.module.css";
import Sun from "../Icons/Sun";
import Moon from "../Icons/Moon";
import { WideScreenContext } from "../../context/WideScreenContext";

const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { isWideScreen } = useContext(WideScreenContext);

  useEffect(() => {
    // Cambia la clase en el body según el estado del modo oscuro
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div className={styles.themeSwitcher}>
      <label className={styles.switch}>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className={styles.slider}>
          <span className={styles.sunIcon}>
            <Sun />
          </span>
          <span className={styles.moonIcon}>
            <Moon />
          </span>
        </span>
      </label>
    </div>
  );
};

export default ToggleTheme;
