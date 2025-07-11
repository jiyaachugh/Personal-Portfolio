import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Jiya Chugh"
        title="Aspiring Software Engineer"
        description="I’m a passionate engineering student learning React, building projects, and exploring the world of frontend development one commit at a time."
      />
    </>
  );
}

export default App;
