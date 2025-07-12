import React from 'react';
import './About.css';

const About = ({ name, intro, image, resume }) => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>{intro}</p>
          <p>Hi, I'm <strong>{name}</strong> a learner & explorer, React enthusiast, and someone who loves solving real-world problems through code.</p>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">Download Resume</a>
        </div>
        <div className="about-image">
          <img src={image} alt={`${name}`} />
        </div>
      </div>
    </section>
  );
};

export default About;
