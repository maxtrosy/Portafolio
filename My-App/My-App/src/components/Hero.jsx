import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Agregar íconos sociales
import dolisyImage from './img/dolisy.jpg'; // Ruta corregida para importar la imagen

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm Dolisy Yurni</h1>
          <p className="hero-description">
            A passionate Computer Science major at IPB Indonesia, focused on creating innovative and user-friendly solutions.
          </p>
          <p className="hero-description">
            I'm a developer with a strong interest in building impactful projects using the latest technologies. I love to collaborate and solve real-world problems through code.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="hero-button">Learn More</a>
            <a href="#projects" className="hero-button">My Projects</a>
          </div>

          
        </div>

        <div className="hero-image">
          <img src={dolisyImage} alt="Dolisy Yurni" className="profile-photo" />
        </div>
        <div className="social-links">
            <a href="https://github.com/dolisy" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/dolisy" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/dolisy" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
          </div>
      </div>
    </section>
  );
};

export default Hero;
