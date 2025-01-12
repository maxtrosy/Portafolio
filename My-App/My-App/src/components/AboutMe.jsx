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
            Hi, I’m Dolisy, but you can call me Dofy. I am currently an undergraduate Computer Science student at IPB University in Bogor, Indonesia.
            Originally, I come from Lampung, a vibrant province located at the southern tip of Sumatra Island. Lampung is renowned for its rich cultural heritage, breathtaking beaches, and the iconic Way Kambas National Park—a destination truly worth exploring.
            Living in both Lampung and Bogor has exposed me to two very distinct environments. Lampung offers a sunny, coastal atmosphere, while Bogor, famously known as the “Rain City,” greets you with frequent downpours and lush greenery—a stark yet refreshing contrast.
          </p>
          <p>
            Why Computer Science? Technology has always fascinated me. It’s a dynamic field that never stops evolving, offering endless opportunities for innovation.
            For me, it’s not just about the entertainment value—like scrolling through social media or sharing memes—but about leveraging technology to solve real-world problems, develop impactful applications, and drive meaningful change.
            Technology is no longer just the future; it’s the present. Through my studies, I aspire to contribute to this ever-evolving domain by creating solutions that improve lives, reduce inefficiencies, and, perhaps, make the world a little less “buggy.”
          </p>
          <p>
            Why IPB? IPB University stood out to me for its distinctive and lush environment. The campus is surrounded by greenery, offering a serene and natural atmosphere that fosters both academic focus and personal well-being.
            From the moment I first visited, I knew it was the ideal place to embark on my educational journey, even amidst the inevitable challenges of academic life. The campus feels like a blend of academia and nature, creating a tranquil yet inspiring setting that encourages productivity.
            Studying here is akin to living in a picturesque documentary setting—peaceful, refreshing, and invigorating. The fresh air and scenic surroundings provide a unique sense of balance, even during demanding times like exams or project deadlines.
            It’s more than just a campus; it’s an environment that supports growth, creativity, and resilience.
          </p>
          <p>
            "Stay hungry, stay foolish." – Steve Jobs
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
      {/* Sección de certificaciones */}
      <div className="certifications-section">
        <h2 className="section-title">Certifications</h2>
        <p className="section-description">
          Highlights of my professional certifications and achievements.
        </p>
        <div className="certifications-list">
          <div className="certification-item">
            <h3>Google Data Analytics</h3>
            <p>Issued by: Google</p>
            <p>Year: 2023</p>
          </div>
          <div className="certification-item">
            <h3>Microsoft Azure Fundamentals</h3>
            <p>Issued by: Microsoft</p>
            <p>Year: 2022</p>
          </div>
          <div className="certification-item">
            <h3>Certified Scrum Master</h3>
            <p>Issued by: Scrum Alliance</p>
            <p>Year: 2021</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutMe;
