import React from 'react';
import './Footer.css'; // Asegúrate de tener un archivo CSS para el footer si lo deseas

// Íconos de redes sociales
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © 2024 Dolisy Yurni - All Rights Reserved
        </p>
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
        <div className="footer-info">
          <p className="footer-description">
            Passionate developer focused on building user-centric solutions. Let's connect and collaborate on exciting projects!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
