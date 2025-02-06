import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
function App() {
  return (
    <div className='overflow-x-clip'>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
