import { useContext, useEffect, useState } from "react";
import Contact from "../../components/Contact/Contact";
import FadeInSection from "../../components/FadeInSection/FadeInSection";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";
import Welcome from "../../components/Welcome/Welcome";
import WideScreenProvider, {
  WideScreenContext,
} from "../../context/WideScreenContext";

const Home = () => {
  const { isWideScreen } = useContext(WideScreenContext);
  return (
    <>
      <NavBar />
      {isWideScreen && <ToggleTheme />}

      <Welcome />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
