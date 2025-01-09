import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cardData = [
    {
      title: "Exploring the Cosmos",
      text: "Discover the vast universe and its mysteries.",
      image: "https://picsum.photos/400/300?random=1",
      expandedText:
        "Space exploration reveals the wonders of the universe. It’s a journey of discovery, learning about galaxies, black holes, and more.",
    },
    {
      title: "The Beauty of Nature",
      text: "Dive into the breathtaking landscapes of Earth.",
      image: "https://picsum.photos/400/300?random=2",
      expandedText:
        "Nature offers us peace and inspiration. From forests to oceans, it reminds us of the beauty of our planet.",
    },
    {
      title: "Technological Advancements",
      text: "Explore how innovation shapes our future.",
      image: "https://picsum.photos/400/300?random=3",
      expandedText:
        "Technology has revolutionized our lives, from AI to robotics. The future is full of endless possibilities.",
    },
    {
      title: "Art and Creativity",
      text: "Immerse yourself in the world of imagination.",
      image: "https://picsum.photos/400/300?random=4",
      expandedText:
        "Art and creativity inspire us to think beyond boundaries, transforming ideas into reality.",
    },
    {
      title: "Cultural Journeys",
      text: "Experience the diversity of the human spirit.",
      image: "https://picsum.photos/400/300?random=5",
      expandedText:
        "Cultures connect us to each other, offering insights into traditions, values, and shared experiences.",
    },
    {
      title: "Mind and Wellness",
      text: "Nurture your mind, body, and soul.",
      image: "https://picsum.photos/400/300?random=6",
      expandedText:
        "Wellness is a journey to balance and self-discovery, fostering resilience and inner peace.",
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">My Thoughts</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card ${activeCard === index ? "active" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">

              <h2 className="card-title">Blog Title {card}</h2>
              <p className="card-text">
                Someone said that 
              </p>

              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>


              <h2 className="card-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>

            </div>
          </div>
        ))}
      </div>
      {activeCard !== null && (
        <div className="expanded-card">
          <div className="expanded-card-content">
=======
            <h2>{cardData[activeCard].title}</h2>
            <p>{cardData[activeCard].expandedText}</p>
            <button
              onClick={() => setActiveCard(null)}
              className="close-button"
            >
              Close
            </button>

          </div>
        </div>
      )}
      <p className="coming-soon">And soon, many more adventures...</p>
    </div>
  );
};

export default Blog;
