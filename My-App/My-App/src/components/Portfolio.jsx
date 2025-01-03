import React from 'react';
import './Portfolio.css';
import VerticalCarousel from './VerticalCarousel';

const Portfolio = () => {
  return (
    <div className="portfolio-container" style={{ textAlign: 'center', padding: '40px', color: '#fff' }}>
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"  // Replace with your YouTube video URL
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Section */}
        <div style={{
          maxWidth: '60%',
          textAlign: 'left',
          lineHeight: '1.8',
          fontSize: '1.3em',
          color: '#fff',
          paddingTop: '20px',
          margin: '0 auto',
          fontFamily: 'Arial, sans-serif',
        }}>
          <p>
            This is a direct paragraph explaining the content. The YouTube video is embedded on the left, and you can
            add more details about the project or topic in this space. Feel free to modify the layout and content as
            needed for your portfolio. The paragraph's width has been adjusted for better alignment. It's styled
            to make it easy to read and visually appealing.
          </p>
        </div>
      </div>

      {/* DESIGN POSTER Section */}
      <h1 style={{
        fontSize: '3em',
        fontWeight: 'bold',
        color: '#fff',
        marginTop: '60px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        paddingBottom: '20px',
        borderBottom: '2px solid #fff',
      }}>
        DESIGN POSTER
      </h1>
      <VerticalCarousel />

      {/* Projects Section */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        padding: '40px',
        borderTop: '2px solid #fff',
        maxWidth: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'none',  // Removed the purple gradient
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',  // Light shadow for subtle depth
      }} 
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <h2 style={{
          fontSize: '2.5em',
          fontWeight: 'bold',
          color: '#fff',
          marginBottom: '20px',
          letterSpacing: '1px',
        }}>
          Projects
        </h2>
        <p style={{
          fontSize: '2em',
          color: '#fff',
          fontWeight: '300',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '1px',
        }}>
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
