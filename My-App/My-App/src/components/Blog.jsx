import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="blog-container">
      {/* Titulo principal */}
      <h1 className="blog-title">My Thought...</h1>

      {/* Contenedor de las cartas */}
      <div className="card-container">
        {[1, 2, 3].map((card, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? 'active' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <img
              src={`https://picsum.photos/400/300?random=${index}`} // Imagen de stock aleatoria
              alt="Stock"
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">Blog Title {card}</h2>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nisl ut urna tincidunt, a consequat arcu
                volutpat. Sed feugiat augue ut risus hendrerit, id tincidunt tortor facilisis.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contenido expandido de la carta activa */}
      {activeCard !== null && (
        <div className="expanded-card">
          <div className="expanded-card-content">
            <h2>Expanded Blog Post</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod nisl ut urna tincidunt, a consequat arcu
              volutpat. Sed feugiat augue ut risus hendrerit, id tincidunt tortor facilisis. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia Curae; Integer sit amet mauris non velit cursus lobortis non non odio.
            </p>
            <button onClick={() => setActiveCard(null)} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
