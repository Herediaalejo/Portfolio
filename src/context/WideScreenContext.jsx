import { createContext, useEffect, useState } from "react";

export const WideScreenContext = createContext();

const WideScreen = ({ children }) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);

  useEffect(() => {
    // Función para manejar cambios de tamaño de la ventana
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1200);
    };

    // Escuchar cuando la ventana cambie de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WideScreenContext.Provider value={{ isWideScreen }}>
      {children}
    </WideScreenContext.Provider>
  );
};

export default WideScreen;
