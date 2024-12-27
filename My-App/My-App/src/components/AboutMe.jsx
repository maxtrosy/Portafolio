import React, { useState } from 'react';
import './AboutMe.css';
import catImage from '../assets/cat.png'; // Importa la imagen correctamente

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('tech-stack'); // Estado para controlar qué sección mostrar

  return (
    <div className="about-me-container">
      {/* Imagen central superior */}
      <div className="profile-picture">
        <img src={catImage} alt="Profile" className="rounded-picture" />
      </div>

      {/* Nombre y ID debajo de la foto */}
      <div className="bio-details">
        <h2 className="bio-name">DOLISY FEBRIANI YURNI</h2>
        <p className="bio-id">M0403241081</p>
      </div>

      {/* Contenedor de texto sobre mí */}
      <div className="about-me-content">
        <div className="bio-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ligula eget nulla malesuada pharetra. Suspendisse potenti. Proin vitae suscipit magna, sit amet tempus erat. Nullam hendrerit nunc a venenatis mollis. Nulla facilisi. Cras vulputate velit et efficitur condimentum. Phasellus in felis id neque interdum aliquet sed vel turpis. Integer in turpis eget nulla ullamcorper pharetra.
          </p>
          <p>
            Duis commodo volutpat nibh, a consequat magna facilisis quis. Mauris rhoncus sem vel orci tempor, nec faucibus dolor iaculis. Sed tincidunt dui ut tellus malesuada, nec aliquet justo consectetur. Nam vitae dictum libero. Cras vitae nisi quis elit convallis congue. Pellentesque ac leo suscipit, posuere elit at, elementum magna. In gravida bibendum enim, at porttitor erat feugiat et.
          </p>
        </div>
      </div>

      {/* Sección de Educación */}
      <div className="education-section">
        <h3 className="section-title">Education</h3>
        <ul>
          <li>Computer Science - University of XYZ (Graduated 2024)</li>
          <li>Web Development Bootcamp - ABC Academy (2023)</li>
        </ul>
      </div>

      {/* Sección de Habilidades */}
      <div className="skills-section">
        <h3 className="section-title">Skills</h3>

        {/* Botones para cambiar entre Tech Stack y Tools */}
        <div className="skills-buttons">
          <button 
            className={`skills-button ${activeSection === 'tech-stack' ? 'active' : ''}`} 
            onClick={() => setActiveSection('tech-stack')}
          >
            Tech Stack
          </button>
          <button 
            className={`skills-button ${activeSection === 'tools' ? 'active' : ''}`} 
            onClick={() => setActiveSection('tools')}
          >
            Tools
          </button>
        </div>

        {/* Barra de separación */}
        <div className="skills-bar"></div>

        {/* Contenido que cambia según la sección seleccionada */}
        <div className="skills-content">
          {activeSection === 'tech-stack' && (
            <div>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
              <p>Node.js</p>
            </div>
          )}

          {activeSection === 'tools' && (
            <div>
              <p>Git & GitHub</p>
              <p>VS Code</p>
              <p>Figma</p>
              <p>Docker</p>
            </div>
          )}
        </div>

        {/* Cuadrados de tecnología */}
        <div className="skills-tags">
          <div className="skills-tag">HTML</div>
          <div className="skills-tag">CSS</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
