import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [Loading, setLoading] = React.useState(true);
  useEffect(() => {
    setInterval(() => setLoading(!Loading), 2000);
  }, []);
  if (Loading) {
    return (
      <div className='flex space-x-2 justify-center items-center bg-gray-300 h-screen'>
        <span className='sr-only'>Loading...</span>
        <div className='h-8 w-8 primary-bg rounded-full animate-bounce [animation-delay:-0.3s]' />
        <div className='h-8 w-8 primary-bg rounded-full animate-bounce [animation-delay:-0.15s]' />
        <div className='h-8 w-8 primary-bg rounded-full animate-bounce' />
      </div>
    );
  }
  return (
    <div className='overflow-x-clip'>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
