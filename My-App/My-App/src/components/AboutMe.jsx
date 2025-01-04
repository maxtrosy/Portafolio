import React, { useState } from 'react';
import './AboutMe.css';
import catImage from './img/doli bulet.png'; // Imagen del perfil
import Timeline from './Timeline';

// Importando los íconos desde React Icons
import { FaGraduationCap, FaBuilding, FaUniversity, FaChalkboardTeacher, FaFlagCheckered } from 'react-icons/fa'; // Íconos de educación

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('tech-stack'); // Estado para controlar qué sección mostrar
  const timelineData = [
    {
      year: '2010',
      description: 'High School',
      icon: <FaGraduationCap size={40} color="#fff" />,
      achievements: ['Math Olympiad Winner', 'Debate Team Captain'],
    },
    {
      year: '2012',
      description: 'Graduation',
      icon: <FaBuilding size={40} color="#fff" />,
      achievements: ['Graduated with Honors', 'Valedictorian'],
    },
    {
      year: '2014',
      description: 'College',
      icon: <FaUniversity size={40} color="#fff" />,
      achievements: ['Dean’s List', 'Internship at TechCorp'],
    },
    {
      year: '2016',
      description: 'Master Degree',
      icon: <FaChalkboardTeacher size={40} color="#fff" />,
      achievements: ['Research Paper Published', 'Teaching Assistant'],
    },
    {
      year: '2020',
      description: 'PhD',
      icon: <FaFlagCheckered size={40} color="#fff" />,
      achievements: ['Doctoral Thesis Award', 'Keynote Speaker at Conference'],
    },
  ];

  return (
    <div className="about-me-container">
      {/* Imagen central superior */}
      <div className="profile-picture">
        <img src={catImage} alt="Profile" className="rounded-picture" />
      </div>

      {/* Nombre y ID debajo de la foto */}
      <div className="bio-details">
        <h2 className="bio-name">DOLISY FEBRIANI YURNI</h2>
        <p className="bio-id">M0403241081</p>
      </div>

      {/* Contenedor de texto sobre mí */}
      <div className="about-me-content">
        <div className="bio-text">
          <p>
            Heyyo, I'm Dolisy. You can call me Dofy (or literally anything, idc) I’m an undergraduate Computer Science student at IPB University in Bogor, Indonesia.
            Originally? I'm from Lampung, that cool province chilling on the southern tip of Sumatra Island. It's got rich culture, jaw-dropping beaches, and the iconic Way Kambas National Park (seriously, you gotta check it out).
            Lampung and Bogor? Totally different vibes. Lampung's all sunny and beachy, while Bogor's like, "Bring an umbrella or you're drenched" — it's basically the Rain City.
          </p>
          <p>
            Why Computer Science, you ask? Cuz tech is LIFE, and it’s where all the magic happens! I mean, who wouldn’t want to dive into a world that’s always upgrading and never boring?
            Tech isn’t just about scrolling TikTok or sending memes—it’s about changing the game, hacking, and even creating the next big app. Technology isn’t just the future, it’s the NOW.
            Through my studies, I’m manifesting big dreams: building apps, solving problems, and maybe, just maybe, making the world a little less buggy.
            I’m here for it. Geeky? Maybe. Excited? Absolutely.
          </p>
          <p>
            Why IPB University? Easy. It’s green AF—like, literally a whole jungle vibe. The moment I saw the campus, I was like, “Yap, this is where I wanna stress about deadlines.”
            Surrounded by trees and chill nature vibes, it’s the perfect place to pretend I’m at peace while cramming for exams. Tbh, studying here feels like living in a National Geographic episode,
            minus the wild animals (okay, maybe some lizards). It’s not just a campus; it’s a whole mood. Plus, breathing fresh air while crying over assignments? Chef’s kiss..
          </p>
          <p>
            "Stay hungry, stay foolish." – Steve Jobs (aka the OG tech legend).
          </p>
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-title">Education</h2>
        <p className="section-description">
          A journey of knowledge and achievement through the years.
        </p>
        <Timeline />
      </div>



    </div>
  );
};

export default AboutMe;
