import React from 'react';

const Hero = ({ name, title, description }) => {
  return (
    <section style={styles.container}>
      <div>
        <h1 style={styles.name}>{name}</h1>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <a href="#contact" style={styles.button}>Let’s Connect</a>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  name: {
    fontSize: '3rem',
    margin: '0.5rem 0',
    color: '#222',
  },
  title: {
    fontSize: '1.8rem',
    color: '#666',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1rem',
    maxWidth: '600px',
    margin: '0 auto 2rem',
    color: '#444',
  },
  button: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Hero;
