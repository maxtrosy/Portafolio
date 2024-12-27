import React, { useState, useEffect } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [images, setImages] = useState([]);
  
  // Cargar imágenes aleatorias de Lorem Picsum
  useEffect(() => {
    const loadImages = () => {
      const randomImages = Array.from({ length: 5 }, () => `https://picsum.photos/400/600?random=${Math.random()}`);
      setImages(randomImages);
    };

    loadImages();
  }, []);

  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">EDITING VIDEO</h1>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Cambia por tu enlace de YouTube
            title="YouTube Video"
            className="square-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="video-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ligula eget nulla malesuada pharetra. Suspendisse potenti.
        </p>
      </div>

      {/* Design Poster Section */}
      <div className="design-poster">
        <h2 className="section-title">DESIGN POSTER</h2>
        <div className="carousel">
          <button onClick={handlePrevImage} className="carousel-button prev">{"<"}</button>
          <div className="carousel-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Design Poster"
                className={`carousel-image ${index === activeImage ? 'front' : index === activeImage - 1 || index === activeImage + 1 ? 'middle' : 'back'}`}
              />
            ))}
          </div>
          <button onClick={handleNextImage} className="carousel-button next">{">"}</button>
        </div>
      </div>

      {/* Project Section */}
      <div className="project-section">
        <h2 className="section-title">PROYECTS</h2>
        {/* Aquí puedes agregar más detalles de tu proyecto */}
      </div>
    </div>
  );
};

export default Portfolio;
