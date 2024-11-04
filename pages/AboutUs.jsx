import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import './AboutUs.css';
import Navbar from '../components/HomePage/Navbar';

const AboutUs = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '100K+' },
    { icon: Target, label: 'Markets Served', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300%' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '/api/placeholder/150/150',
      bio: 'With 15+ years of industry experience, Sarah leads our company vision and strategy.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/150/150',
      bio: 'Michael brings 12 years of technical expertise in building scalable solutions.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      image: '/api/placeholder/150/150',
      bio: 'Emily ensures smooth operations and excellent service delivery to our clients.'
    }
  ];

  return (
    <div className="about-container ">
      
      <header className="about-header">
        <h1>About Us</h1>
        <p>Connecting talent with opportunity, transforming careers worldwide.</p>
      </header>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            We're on a mission to revolutionize the way people find and secure their dream jobs. 
            By leveraging cutting-edge technology and human expertise, we create meaningful 
            connections between talented individuals and forward-thinking companies.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" />
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>Continuously improving our platform with cutting-edge technology.</p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>Building trust through transparency and honest partnerships.</p>
          </div>
          <div className="value-card">
            <h3>Impact</h3>
            <p>Making a real difference in people's careers and businesses.</p>
          </div>
          <div className="value-card">
            <h3>Inclusion</h3>
            <p>Fostering a diverse and welcoming environment for all.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Leadership</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;