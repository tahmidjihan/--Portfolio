import React from 'react';

function Skill() {
  return (
    <div
      className="lg:hero bg-cover bg-[url('/Assets/skills-bg.png')] min-h-[80vh] py-16"
      id='skills'>
      <div className='hero-content flex-col lg:flex-row-reverse md:gap-[100px] mx-auto'>
        <img
          src='./Assets/skills.png'
          className='max-w-[300px] md:max-w-lg sm:max-w-sm  lg:max-w-xl rounded-3xl shadow-2xl'
        />
        <div className='max-w-lg lg:text-right'>
          <h1 className=' text-5xl sm:text-6xl md:text-8xl text-black bebas'>
            Let’s Discuss Skills & Tools
          </h1>
          <div className='roboto text-gray-700 text-lg py-2 flex flex-col gap-3'>
            Skilled in MERN stack development, UI/UX design, and
            problem-solving, with expertise in JavaScript, React, Node.js,
            MongoDB, and more. Experienced in building scalable web applications
            and creating intuitive user experiences.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
