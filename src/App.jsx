import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Projects from './components/Projects';
function App() {
  return (
    <div className='overflow-x-clip'>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
