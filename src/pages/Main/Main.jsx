import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";
import WideScreenProvider from "../../context/WideScreenContext";
import WideScreen from "../../context/WideScreenContext";

const Main = () => {
  return (
    <WideScreen>
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </WideScreen>
  );
};

export default Main;
