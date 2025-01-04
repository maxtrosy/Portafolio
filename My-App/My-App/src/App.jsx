import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import bgImage from "./assets/bgq.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

function App() {
  useEffect(() => {
    const circle = document.createElement("div");
    circle.className = "cursor-circle";
    document.body.appendChild(circle);

    const updateCirclePosition = (e) => {
      const { clientX, clientY } = e;
      circle.style.left = `${clientX - circle.offsetWidth / 2}px`;
      circle.style.top = `${clientY - circle.offsetHeight / 2}px`;
    };

    window.addEventListener("mousemove", updateCirclePosition);

    return () => {
      window.removeEventListener("mousemove", updateCirclePosition);
      document.body.removeChild(circle);
    };
  }, []);

  const appStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  // Hook personalizado para obtener la ubicación actual
  const ShowHero = () => {
    const location = useLocation();
    return location.pathname === "/" ? <Hero /> : null;
  };

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <ShowHero />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
