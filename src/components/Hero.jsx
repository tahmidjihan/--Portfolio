import React from 'react';
import Social from './Social';

function Hero() {
  return (
    <div className="hero bg-[url('https://i.ibb.co.com/WvYZfSTY/bg.png')] min-h-screen">
      <div className='hero-content flex-col lg:flex-row md:gap-[100px]'>
        <img
          src='./Assets/tahmid.png'
          className='max-w-[300px] sm:max-w-sm  lg:max-w-lg rounded-full shadow-2xl'
        />
        <div className='max-w-lg'>
          <h2 className='roboto font-bold text-xl'>👏 Hi! There!</h2>
          <h1 className=' text-5xl sm:text-6xl md:text-8xl primary-text bebas'>
            Tahmid Jihan
          </h1>
          <h3 className='secondary-text text-3xl roboto'>
            <span className='font-bold'>Full-Stack</span> Web Developer
          </h3>
          <p className='roboto text-gray-800 text-xl py-2'>
            I build sleek, high-performance web solutions that turn ideas into
            reality. Let’s create something amazing together!
          </p>
          <Social className='primary-text' />
          <button className='btn primary-btn btn-lg'>Download Resume</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
