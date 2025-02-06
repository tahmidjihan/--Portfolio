import React from 'react';
import Social from './Social';

function About() {
  return (
    <div
      className={`hero bg-[url('./Assets/about.png')] min-h-[80vh] py-16`}
      id='about'>
      <div className='hero-content flex-col lg:flex-row md:gap-[100px]'>
        <img
          src='./Assets/tahmid-2.png'
          className='max-w-[300px] sm:max-w-sm  lg:max-w-lg rounded-xl border-2 border-white shadow-2xl'
        />
        <div className='max-w-lg'>
          <h1 className=' text-5xl sm:text-6xl md:text-8xl text-white bebas'>
            About Me
          </h1>
          <p className='roboto text-gray-300 text-lg py-2'>
            <span className='font-bold text-white'>Hello World!</span> I'm
            Tahmid Jihan, a passionate Full-Stack Web Developer who loves
            building sleek, high-performance web solutions. With expertise in
            the MERN stack, I focus on crafting seamless user experiences and
            scalable applications. Beyond coding, I enjoy solving real-world
            problems, optimizing performance, and pushing creative boundaries.
            Always learning, always creating—let’s build something amazing
            together!
          </p>
          <Social className='text-white' />
        </div>
      </div>
    </div>
  );
}

export default About;
