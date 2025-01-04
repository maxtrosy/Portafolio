import React from "react";
import "./Timeline.css";

const Recuadro = () => {
  return (
    <div className="recuadro">
      {/* Logo superior */}
      <div className="logo-superior">
        <div className="logo-circle">
          <img
            src="path-to-your-logo.png"
            alt="Logo Superior"
            className="logo-image"
          />
        </div>
      </div>

      {/* Línea central con círculos */}
      <div className="linea-central">
        <div className="circle-left"></div>
        <div className="circle-center">
          <div className="circle-inner"></div>
        </div>
        <div className="circle-right"></div>
      </div>

      {/* Logo inferior y texto */}
      <div className="logo-inferior">
        <div className="logo-circle">
          <img
            src="path-to-your-second-logo.png"
            alt="Logo Inferior"
            className="logo-image"
          />
        </div>
      </div>
      <h3 className="titulo">Título del Evento</h3>
      <p className="texto-complementario">
        Este es un texto complementario que describe brevemente el evento.
      </p>
    </div>
  );
};

export default Recuadro;
