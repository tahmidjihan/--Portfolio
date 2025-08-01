import React from 'react';
import Social from './Social';

function About() {
  return (
    <div
      className="hero min-h-[80vh] py-16 bg-[url('/Assets/about.png')] bg-cover bg-center"
      id='about'>
      <div className='hero-content flex-col lg:flex-row md:gap-[100px] mx-auto'>
        <img
          src='./Assets/tahmid-2.png'
          className='max-w-[300px] sm:max-w-sm  lg:max-w-lg rounded-xl border-2 border-white shadow-2xl'
        />
        <div className='max-w-lg'>
          <h1 className=' text-5xl sm:text-6xl md:text-8xl text-white bebas'>
            About Me
          </h1>
          <div className='roboto text-gray-200 text-lg py-2 flex flex-col gap-3'>
            <p>
              I'm Tahmid, a Full-Stack Web Developer who loves building sleek
              and high-performance digital experiences. My coding journey
              started with curiosity and turned into a passion for crafting
              smooth, efficient web solutions.
            </p>
            <p>
              I specialize in the MERN stack and enjoy designing clean, scalable
              systems. Beyond coding, I dive into abstract art, songwriting, and
              exploring deep scientific and philosophical ideas—anything that
              sparks creativity and thought.
            </p>

            <p> Let’s connect and create something amazing!</p>
          </div>
          <Social className='text-white' />
        </div>
      </div>
    </div>
  );
}

export default About;
