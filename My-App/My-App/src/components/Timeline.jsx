import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBook, FaChalkboardTeacher, FaMicrophone } from "react-icons/fa";

const Timeline = () => {
  const events = [
    {
      year: "2010",
      title: "High School",
      details: ["Math Olympiad Winner", "Debate Team Captain"],
      icon: <FaBook style={styles.icon} />,
    },
    {
      year: "2012",
      title: "Graduation",
      details: ["Graduated with Honors", "Valedictorian"],
      icon: <FaGraduationCap style={styles.icon} />,
    },
    {
      year: "2014",
      title: "College",
      details: ["Dean’s List", "Internship at TechCorp"],
      icon: <FaAward style={styles.icon} />,
    },
    {
      year: "2016",
      title: "Master Degree",
      details: ["Research Paper Published", "Teaching Assistant"],
      icon: <FaChalkboardTeacher style={styles.icon} />,
    },
    {
      year: "2020",
      title: "PhD",
      details: ["Doctoral Thesis Award", "Keynote Speaker at Conference"],
      icon: <FaMicrophone style={styles.icon} />,
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.timeline}>
        {events.map((event, index) => (
          <motion.div
            key={index}
            style={styles.event}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div style={styles.iconContainer}>{event.icon}</div>
            <div style={styles.year}>{event.year}</div>
            <div style={styles.title}>{event.title}</div>
            <ul style={styles.details}>
              {event.details.map((detail, idx) => (
                <li key={idx} style={styles.detail}>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px 0",
    overflowX: "auto",
  },
  timeline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "80%",
    position: "relative",
  },
  event: {
    textAlign: "center",
    padding: "10px",
    minWidth: "150px",
    position: "relative",
    backgroundColor: "#f8f9fa",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "0 10px",
    transition: "transform 0.2s",
  },
  iconContainer: {
    fontSize: "24px",
    color: "#6a1b9a",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "30px",
    color: "#6a1b9a",
  },
  year: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#6a1b9a",
  },
  title: {
    fontSize: "16px",
    margin: "5px 0",
    fontWeight: "600",
  },
  details: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  detail: {
    fontSize: "14px",
    color: "#333",
  },
};

export default Timeline;
