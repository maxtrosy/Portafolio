import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta
import { FaBars } from 'react-icons/fa'; // Importar el ícono de hamburguesa
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      // Usar requestAnimationFrame para eficiencia
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <header className={`header ${scrolled} 'scrolled' : ''}`}>
      <div className="logo">MyLogo</div>
      <nav className={`nav ${scrolled} 'scrolled' : ''}`}>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/aboutme">About Me</a></li>
          <li><a href="/portofolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>

          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div
        className="hamburger-icon"
        ref={hamburgerRef}
        onClick={toggleMenu}
        aria-expanded={menuVisible}
        aria-controls="dropdown-menu"
        aria-label="Toggle menu"
      >
        <FaBars />
      </div>
      {menuVisible && (
        <div
          className="dropdown-menu"
          ref={menuRef}
          id="dropdown-menu"
          aria-live="polite"
        >
          
        </div>
      )}
    </header>
  );
};

export default Header;
