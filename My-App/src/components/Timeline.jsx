import React from 'react';
import './Timeline.css';

const timelineData = [
  {
    date: "2018",
    title: "Sugar Group Junior High School",
    description: "j",
    icon: "🏫"
  },
  {
    date: "2021",
    title: "Kibang 1 Senior High School",
    description: "Ele",
    icon: "⏰"
  },
  {
    date: "2024",
    title: "IPB University",
    description: "Best Action Project Salam Al-Hurriyyah 2024",
    icon: "📖"
  },
];

const Timeline = () => {
  return (
    <div>
      <h1 className="section-title">Timeline</h1>
      <div className="timeline-container">
        {timelineData.slice(0, 3).map((item, index) => (
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
    </div>
  );
};

export default Timeline;
