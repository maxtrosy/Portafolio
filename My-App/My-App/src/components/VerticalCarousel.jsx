import React, { useState } from "react";
import poster2 from "./img/poster2.png";
import poster3 from "./img/poster3.png";
import poster4 from "./img/poster4.jpg";
import poster5 from "./img/poster5.png";
import poster6 from "./img/poster6.png";
import poster7 from "./img/poster7.png";

const MosaicGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const posters = [
    { id: 1, src: poster2, alt: "Poster 2" },
    { id: 2, src: poster3, alt: "Poster 3" },
    { id: 3, src: poster4, alt: "Poster 4" },
    { id: 4, src: poster5, alt: "Poster 5" },
    { id: 5, src: poster6, alt: "Poster 6" },
    { id: 6, src: poster7, alt: "Poster 7" },
  ];

  const openModal = (src) => {
    setCurrentImage(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", padding: "20px" }}>
      {/* Mosaic Gallery */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {posters.map((poster, index) => (
          <div
            key={poster.id}
            onClick={() => openModal(poster.src)}
            style={{
              position: "relative",
              cursor: "pointer",
              borderRadius: "8px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              transition: "transform 0.3s ease-in-out",
              transform: "scale(0.8)", // Small size at the start
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Grow on hover
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(0.8)")} // Return to small size on hover out
          >
            <img
              src={poster.src}
              alt={poster.alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "opacity 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>

      {/* Modal to show image in larger size */}
      {modalIsOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal}
        >
          <img
            src={currentImage}
            alt="Selected"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MosaicGallery;
