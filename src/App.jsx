import React from 'react';
import CustomCursor from './components/CustomCursor';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Biography />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
