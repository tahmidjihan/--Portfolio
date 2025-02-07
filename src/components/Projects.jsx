import React, { useEffect, useState } from 'react';

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/tahmidjihan/210185448e244e81e8c02304e5a096a3/raw/b2d1b1b90c2e48394d5f02255105dfc0a01dd7a5/projects.json'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, []);
  return (
    <div
      className={` bg-[url('./Assets/projects-bg.png')] bg-cover min-h-screen py-16`}
      id='projects'>
      <div className='hero-content container overflow-hidden mx-auto flex-col md:gap-[100px]'>
        <div className='max-w-lg text-center'>
          <h1 className=' text-4xl sm:text-5xl md:text-7xl text-white bebas'>
            My Projects
          </h1>
          <div className='roboto text-gray-200 text-lg py-2 flex flex-col gap-3'>
            I create innovative web development and SaaS solutions focused on
            user experience and business growth. My projects aim to deliver
            seamless, scalable applications that help businesses succeed.
          </div>
        </div>
        <div className=' relative container flex items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-auto'>
            {/* {projects.length} */}
            {projects.map((project) => (
              <div
                key={project.project_name}
                className='card relative card-side bg-base-100 shadow-sm '>
                <figure>
                  <img
                    src={project.project_image}
                    className='w-sm rounded-2xl'
                    alt='Movie'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title'>{project.project_name}</h2>
                  <p>{project.brief_description}</p>
                  <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Watch</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
