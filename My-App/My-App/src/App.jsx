import React, { useEffect } from "react";
import Header from './components/Header';  // Asegúrate de que la ruta sea correcta
import Hero from './components/Hero';  // Asegúrate de que la ruta sea correcta
import './App.css';  // Importa tu archivo CSS
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Crear el círculo de la linterna
    const circle = document.createElement("div");
    circle.className = "cursor-circle";
    document.body.appendChild(circle);

    // Actualizar la posición del círculo al mover el mouse
    const updateCirclePosition = (e) => {
      const { clientX, clientY } = e;

      // Ajuste para que el círculo se alinee con la punta del cursor
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

  return (
    <div>
      <Header />
      <Hero />
      <Footer/>
    </div>
  );
}

export default App;
