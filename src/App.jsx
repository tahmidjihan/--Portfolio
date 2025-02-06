import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  return (
    <div className='overflow-x-clip'>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
