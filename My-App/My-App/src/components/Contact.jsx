import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, como una API o correo
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="contact-container">
      {/* Título FIND ME ON */}
      <h2 className="contact-title">FIND ME ON</h2>

      {/* Íconos de redes sociales */}
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Texto invitando a contactar */}
      <p className="contact-text">
        If you want to get in touch with me, feel free to send a message. I’d love to hear from you!
      </p>

      {/* Formulario de contacto */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Contact Me</h3>

        <div className="form-group">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
