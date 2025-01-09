import React from 'react';
import './Portfolio.css';
import VerticalCarousel from './VerticalCarousel';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* EDITING VIDEO Section */}

      <h1 style={{
        fontSize: '3em',
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '20px',
        padding: '10px',
        borderBottom: '2px solid #fff',
      }}>
        EDITING VIDEO
      </h1>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        gap: '30px',
        flexDirection: 'column',
        maxWidth: '90%',
        margin: '0 auto',
      }}>
        {/* YouTube Video */}
        <div style={{
          position: 'relative',
          flex: '0 1 auto',
          borderRadius: '12px',
          overflow: 'hidden',
          padding: '8px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <iframe
            width="560"
            height="315"
            src="https://vimeo.com/1044901492?share=copy"  // Replace with your YouTube video URL
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

      <section className="portfolio-section">
        <h1 className="portfolio-title">Editing Video</h1>
        <div className="portfolio-content">
          {/* Vimeo Video */}
          <div className="portfolio-video">
            <iframe
              src="https://player.vimeo.com/video/1044901492?autoplay=1"
              title="Vimeo Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          {/* Text Section */}
          <div className="portfolio-description">
            <p>
              Dive into video editing projects that highlight creativity and storytelling. This embedded video showcases the journey of transforming ideas into visuals that captivate and inspire.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
      

      {/* DESIGN POSTER Section */}
      <section className="portfolio-section">
        <h1 className="portfolio-title">Design Poster</h1>
        <VerticalCarousel />
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-description">Coming Soon</p>
      </section>
    </div>
  );
};

export default Portfolio;
