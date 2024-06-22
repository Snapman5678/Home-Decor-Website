import React, { useState } from 'react';
import axios from 'axios';
import ContactImage from '../assets/homedecorcontact.jpg';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/contact', formData);

      if (response.data.status === 'success') {
        setMessage({ type: 'success', text: 'Message sent successfully' });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setMessage({ type: 'error', text: response.data.message });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error sending message' });
    }
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${ContactImage})` }}></div>
      <div className="rightSide">
        <h1> Contact Us </h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name"> Full Name </label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email"> Email </label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message"> Message </label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit"> Send Message</button>
          {message && (
            <div className={message.type === 'success' ? 'success-message' : 'error-message'}>
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
