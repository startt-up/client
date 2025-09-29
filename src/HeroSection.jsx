import React from 'react';
import './HeroSection.css';
import studentImg from '../src/assets/s1.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Connecting <span>Students</span> and <span>Mentors</span> for real
          time collaborative Learning
        </h1>
        <p>
          "Join a vibrant network where students, mentors, and admins connect in
          real-time groups and private chats. Collaborate, exchange knowledge,
          and build meaningful connections that inspire growth."
        </p>
        <button className="hero-cta-btn">Get Started</button>
      </div>
      <div className="hero-image-container">
        <img src={studentImg} alt="Students" className="hero-image" />
      </div>
    </div>
  );
};

export default HeroSection;