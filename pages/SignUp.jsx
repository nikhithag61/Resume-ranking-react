import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    company: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f5f5f5'
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: '500px',
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const titleStyle = {
    fontSize: '32px',
    color: '#1a1a1a',
    marginBottom: '12px',
    fontWeight: '600',
  };

  const subtitleStyle = {
    fontSize: '16px',
    color: '#666666',
    marginBottom: '30px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const inputGroupStyle = {
    position: 'relative',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 40px',
    fontSize: '16px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#666666',
  };

  const buttonStyle = {
    backgroundColor: '#4a90e2',
    color: '#ffffff',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
  };

  const rowStyle = {
    display: 'flex',
    gap: '20px',
  };

  const footerStyle = {
    textAlign: 'center',
    marginTop: '30px',
    color: '#666666',
    fontSize: '14px',
  };

  const linkStyle = {
    color: '#4a90e2',
    textDecoration: 'none',
    fontWeight: '600',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>Create Account</h1>
          <p style={subtitleStyle}>Join our community and start your journey</p>
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={rowStyle}>
            <div style={inputGroupStyle}>
              <User size={20} style={iconStyle} />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
            <div style={inputGroupStyle}>
              <User size={20} style={iconStyle} />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>
          </div>

          <div style={inputGroupStyle}>
            <Mail size={20} style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <Lock size={20} style={iconStyle} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={inputGroupStyle}>
            <Lock size={20} style={iconStyle} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>

          <div style={rowStyle}>
            <div style={inputGroupStyle}>
              <Phone size={20} style={iconStyle} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div style={inputGroupStyle}>
              <Building size={20} style={iconStyle} />
              <input
                type="text"
                name="company"
                placeholder="Company (Optional)"
                value={formData.company}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={e => e.target.style.backgroundColor = '#357abd'}
            onMouseOut={e => e.target.style.backgroundColor = '#4a90e2'}
          >
            Create Account
          </button>
        </form>

        <div style={footerStyle}>
          Already have an account?{' '}
      
          <Link to="/login"  style={linkStyle}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;