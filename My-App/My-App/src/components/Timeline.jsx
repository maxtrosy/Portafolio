import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    date: "1985",
    title: "Kindergarten",
    description: "Kindergarten (1985-1986)",
    icon: "🏫"
  },
  {
    date: "1986",
    title: "Elementary",
    description: "Elementary (1986-1991)",
    icon: "⏰"
  },
  {
    date: "1991",
    title: "Middle School",
    description: "Middle School (1991-1994)",
    icon: "⏰"
  },
  {
    date: "1994",
    title: "High School",
    description: "High School (1994-1997)",
    icon: "🎓"
  },
  {
    date: "1997",
    title: "University",
    description: "University (1997-2001)",
    icon: "📖"
  },
  {
    date: "2001",
    title: "Postgraduate",
    description: "Postgraduate (2001-2003)",
    icon: "🎓"
  }
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      {timelineData.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-icon">{item.icon}</div>
          <div className="timeline-date">{item.date}</div>
          <div className="timeline-content">
            <h2 className="timeline-title">{item.title}</h2>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
