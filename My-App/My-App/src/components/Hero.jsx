import React from "react";
import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import dolisyImage from "./img/dolisy.jpg";



const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm
            <br />
            <span className="hero-name">DOLISY YURNI</span>
          </h1>
          <p className="hero-subtitle">
            Yap, a <span className="purple-text bold-text">Computer Science</span> Student
          </p>

          <p className="hero-description">
            A passionate Computer Science major at IPB Indonesia, focused on
            creating innovative and user-friendly solutions.
          </p>
          <p className="hero-description">
            I'm a developer with a strong interest in building impactful
            projects using the latest technologies. I love to collaborate and
            solve real-world problems through code.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="hero-button">
              Learn More
            </a>
            <a href="#projects" className="hero-button">
              My Projects
            </a>


          </div>

        </div>




        <div className="hero-image-container">
          <img src={dolisyImage} alt="Dolisy Yurni" className="profile-photo" />

          <div className="hero-spotify-buttons">
            <div className="hero-spotify-buttons">
              <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">Escuchar en Spotify</a>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/dolisy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/dolisy"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/dolisyuu"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
