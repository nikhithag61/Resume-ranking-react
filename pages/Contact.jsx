import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Please fill out this form or use our contact information.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon-container">
                <Phone className="icon" />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon-Fri 9am-6pm</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <Mail className="icon" />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>support@example.com</p>
                <p>info@example.com</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="icon-container">
                <MapPin className="icon" />
              </div>
              <div>
                <h3>Visit Us</h3>
                <p>123 Business Street</p>
                <p>New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="loading-text">
                  <span className="loading-spinner"></span>
                  Sending...
                </span>
              ) : (
                <span className="button-content">
                  <Send className="send-icon" />
                  Send Message
                </span>
              )}
            </button>

            {submitStatus && (
              <div className={`submit-status ${submitStatus}`}>
                {submitStatus === 'success' 
                  ? 'Message sent successfully!' 
                  : 'Failed to send message. Please try again.'}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;