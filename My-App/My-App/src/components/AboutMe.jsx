import React, { useState } from 'react';
import './AboutMe.css';
import catImage from './img/doli bulet.png'; // Importa la imagen correctamente

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
          Heyyo, I'm Dolisy. You can call me Dofy (or literally anything, idc) I’m an undergraduate Computer Science student at IPB University in Bogor, Indonesia. 
          Originally? I'm from Lampung, that cool province chilling on the southern tip of Sumatra Island. It's got rich culture, jaw-dropping beaches, and the iconic Way Kambas National Park (seriously, you gotta check it out). 
          Lampung and Bogor? Totally different vibes. Lampung's all sunny and beachy, while Bogor's like, "Bring an umbrella or you're drenched" — it's basically the Rain City.
          </p>
          <p>
          Why Computer Science, you ask? Cuz tech is LIFE, and it’s where all the magic happens! I mean, who wouldn’t want to dive into a world that’s always upgrading and never boring? 
          Tech isn’t just about scrolling TikTok or sending memes—it’s about changing the game, hacking, and even creating the next big app. Technology isn’t just the future, it’s the NOW.
          Through my studies, I’m manifesting big dreams: building apps, solving problems, and maybe, just maybe, making the world a little less buggy.
          I’m here for it. Geeky? Maybe. Excited? Absolutely.
          </p>
          <p>
          Why IPB University? Easy. It’s green AF—like, literally a whole jungle vibe. The moment I saw the campus, I was like, “Yap, this is where I wanna stress about deadlines.” 
          Surrounded by trees and chill nature vibes, it’s the perfect place to pretend I’m at peace while cramming for exams. Tbh, studying here feels like living in a National Geographic episode, 
          minus the wild animals (okay, maybe some lizards). It’s not just a campus; it’s a whole mood. Plus, breathing fresh air while crying over assignments? Chef’s kiss..
          </p>
          <p>
          "Stay hungry, stay foolish." – Steve Jobs (aka the OG tech legend).
          </p>
        </div>
      </div>

      {/* Sección de Educación */}
      <div className="education-section">
        <h3 className="section-title">Education</h3>
        <body>
          <div class="timeline">
            <div class="timeline-item">
              <div class="icon"> <img src ='./assets/kindergarten.svg'  /></div>
              <div class="box">
                <div class="year">2010</div>
                <div class="description">High School</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="icon">⏰</div>
              <div class="box">
                <div class="year">2012</div>
                <div class="description">Graduation</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="icon">📚</div>
              <div class="box">
                <div class="year">2014</div>
                <div class="description">College</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="icon">👨‍🎓</div>
              <div class="box">
                <div class="year">2016</div>
                <div class="description">Master Degree</div>
              </div>
            </div>
            <div class="timeline-item">
              <div class="icon">🏅</div>
              <div class="box">
                <div class="year">2020</div>
                <div class="description">PhD</div>
              </div>
            </div>
          </div>
        </body>
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
