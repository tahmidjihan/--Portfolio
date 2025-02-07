import React from 'react';

function Experience() {
  return (
    <div className='lg:hero bg-cover bg-white min-h-[80vh] py-16' id='about'>
      <div className='hero-content flex-col lg:flex-row md:gap-[100px] mx-auto'>
        <ul
          className={`list bg-[url('./Assets/experience-bg.png')]  rounded-box shadow-md text-start bg-cover`}>
          <li className='list-row'>
            <div>
              <div className='text-4xl bebas'>Edricenti </div>
              <div className='uppercase font-semibold text-gray-900 opacity-60 roboto'>
                Founder (Failed Startup) <i>[2023-2024]</i>
              </div>
            </div>
            <p className='list-col-wrap roboto'>
              Tried building an all-in-one business solution, but too many ideas
              spoiled the focus. While it didn’t work out, it was a crash course
              in online business operations, problem-solving, and the importance
              of niche selection. Learned more from failure than I ever could
              from success.
            </p>
          </li>
          <hr className='mx-2' />
          <li className='list-row'>
            <div>
              <div className='text-4xl bebas'>Top Catalyst Consulting</div>
              <div className=' uppercase font-semibold text-gray-900 opacity-60 roboto'>
                Freelancer Web Developer <i>[2025]</i>
              </div>
            </div>
            <p className='list-col-wrap roboto'>
              Built a sleek and functional website for a study abroad and
              immigration consultancy, handling design and development to
              enhance their online presence. My first paid project—where I
              turned code into real value!
            </p>
          </li>
        </ul>
        <div className='max-w-lg'>
          <h1 className=' text-4xl sm:text-5xl md:text-7xl text-black bebas'>
            Experiences & works
          </h1>
          <div className='roboto text-gray-700 text-md py-2 flex flex-col gap-3'>
            From freelancing to startup attempts, every project has shaped my
            growth. I built Top Catalyst Consulting’s website, enhancing their
            online presence. I also founded Edricenti, an all-in-one business
            solution—though it failed, it taught me business operations,
            problem-solving, and the value of niche focus. Each experience has
            refined my skills and deepened my understanding of real-world
            solutions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
