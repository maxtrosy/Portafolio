import React from "react";
import "./CertificationsSection.css";
import cert1 from "./img/cert1.jpeg";
import cert2 from "./img/cert2.jpeg";
import cert3 from "./img/cert3.jpeg";
import cert4 from "./img/cert4.jpeg";

const CertificationsSection = () => {
  return (
    <div className="certifications-section">
      <h2 className="section-title">Certifications</h2>
      <p className="section-description">
        Highlights of my professional certifications and achievements.
      </p>
      <div className="certifications-list">
        <a href="https://drive.google.com/file/d/1lVi_Xw4HHPz8SsK096tdBF0jaGs2BV2p/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ backgroundImage: `url(${cert1})` }}>
          <h3>Career Essentials in Cybersecurity</h3>
          <p>Issued by: Microsoft & LinkedIn</p>
          <p>Year: 2025</p>
        </a>
        <a href="https://drive.google.com/file/d/1lQgbbMole330kAHEsiLR_ug8_IQdjnUu/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ backgroundImage: `url(${cert2})` }}>
          <h3>1st Place, Secondary Science Olympiad</h3>
          <p>Event: KOMEKS, Lampung</p>
          <p>Year: 2022</p>
        </a>
        <a href="https://drive.google.com/file/d/1lMzAwpDN-Fn4FH5wzMuy3xJsQvNpHx0B/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ backgroundImage: `url(${cert3})` }}>
          <h3>1st Place, Scout Olympiad</h3>
          <p>Event: Kwarda Lampung</p>
          <p>Year: 2023</p>
        </a>
        <a href="https://drive.google.com/file/d/1lMfsHtSWrEi4MspVtw5rUVgzgRVncvem/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="certification-item" style={{ backgroundImage: `url(${cert4})` }}>
          <h3>1st Place, Gender Competition</h3>
          <p>Event: Muhammadiyah University</p>
          <p>Year: 2023</p>
        </a>
      </div>
    </div>
  );
};

export default CertificationsSection;
