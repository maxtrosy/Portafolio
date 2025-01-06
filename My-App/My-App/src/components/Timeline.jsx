import React from "react";
import "./Timeline.css";

const Recuadro = ({ titulo, texto, logoSuperior, logoInferior }) => {
  return (
    <div className="recuadro">
      {/* Logo superior */}
      <div className="logo-superior">
        <div className="logo-circle">
          <img src={logoSuperior} alt="Logo Superior" className="logo-image" />
        </div>
      </div>

      {/* Línea central con círculos */}
      <div className="linea-central">
        <div className="circle-small"></div>
        <div className="line"></div>
        <div className="circle-large">
          <div className="circle-inner"></div>
        </div>
        <div className="line"></div>
        <div className="circle-small"></div>
      </div>

      {/* Logo inferior y texto */}
      <div className="logo-inferior">
        <div className="logo-circle">
          <img src={logoInferior} alt="Logo Inferior" className="logo-image" />
        </div>
      </div>
      <h3 className="titulo">{titulo}</h3>
      <p className="texto-complementario">{texto}</p>
    </div>
  );
};

const Timeline = () => {
  const data = [
    {
      titulo: "Fundación",
      texto: "Fundada en 1900 como institución educativa.",
      logoSuperior: "path-to-your-logo1.png",
      logoInferior: "path-to-your-logo2.png",
    },
    {
      titulo: "Avance Científico",
      texto: "Primer descubrimiento científico en 1920.",
      logoSuperior: "path-to-your-logo3.png",
      logoInferior: "path-to-your-logo4.png",
    },
    {
      titulo: "Nueva Sede",
      texto: "Inauguración de la nueva sede en 1950.",
      logoSuperior: "path-to-your-logo5.png",
      logoInferior: "path-to-your-logo6.png",
    },
    {
      titulo: "Reconocimiento",
      texto: "Reconocimiento internacional en 2000.",
      logoSuperior: "path-to-your-logo7.png",
      logoInferior: "path-to-your-logo8.png",
    },
  ];

  return (
    <div className="timeline">
      {data.map((item, index) => (
        <Recuadro
          key={index}
          titulo={item.titulo}
          texto={item.texto}
          logoSuperior={item.logoSuperior}
          logoInferior={item.logoInferior}
        />
      ))}
    </div>
  );
};

export default Timeline;
