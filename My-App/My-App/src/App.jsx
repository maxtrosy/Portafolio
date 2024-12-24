import React, { useEffect } from "react";
import Header from './components/Header';  // Asegúrate de que la ruta sea correcta
import Hero from './components/Hero';  // Asegúrate de que la ruta sea correcta
import './App.css';  // Importa tu archivo CSS
import Footer from "./components/Footer";
import bgImage from './assets/bgq.jpg'; // Asegúrate de que la ruta sea correcta

import LoadingScreen from "./components/LoadingScreen";


function App() {
  useEffect(() => {
    // Crear el círculo de la linterna
    const circle = document.createElement("div");
    circle.className = "cursor-circle";
    document.body.appendChild(circle);

    // Actualizar la posición del círculo al mover el mouse
    const updateCirclePosition = (e) => {
      const { clientX, clientY } = e;
      circle.style.left = `${clientX - circle.offsetWidth / 2}px`;
      circle.style.top = `${clientY - circle.offsetHeight / 2}px`;
    };

    // Agregar el evento de movimiento del mouse
    window.addEventListener("mousemove", updateCirclePosition);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("mousemove", updateCirclePosition);
      document.body.removeChild(circle);
    };
  }, []);

  // Definir el estilo con el fondo de la imagen
  const appStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    minHeight: '100vh', // Para asegurarse de que cubra toda la pantalla
    margin: 0,
    padding: 0
  };

  return (
    <div style={appStyle}>
     
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
