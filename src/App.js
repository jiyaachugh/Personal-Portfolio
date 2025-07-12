import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About/About';

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Jiya"
        title="Aspiring Software Engineer"
        description="I’m a engineering student learning React, building projects, and exploring the world of frontend development.. One commit at a time."
      />
      <About
        name="Jiya"
        intro="I'm a 3rd year engineering student at MAIT with a deep interest in frontend development. I love building beautiful and functional UIs using React."
        image="./assets/jiya pfp.jpegg"
        // resume="./assets/Resume_Jiya.pdf"
      />
    </>
  );
}

export default App;
