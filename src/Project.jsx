import React, { use, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import Footer from './components/Footer';
import { FaGithub } from 'react-icons/fa6';

function Project() {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/tahmidjihan/210185448e244e81e8c02304e5a096a3/raw/b2d1b1b90c2e48394d5f02255105dfc0a01dd7a5/projects.json'
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  }, [id]);
  useEffect(() => {
    const project = projects[id];
    setProject(project);
  }, [projects, id]);
  return (
    <>
      <div className='navbar bg-base-100 shadow-sm sm:px-10'>
        <div className='navbar-start'>
          <a className='text-3xl bebas'>Tahmid Jihan</a>
        </div>
        <div className='navbar-end'>
          <Link to='/'>
            <button className='btn primary-btn btn-lg'>Home</button>
          </Link>
        </div>
      </div>
      <div className="hero bg-[url('/Assets/experience-bg.png')]  min-h-screen">
        <div className='container flex gap-10 md:py-20 flex-col  md:max-w-9/12'>
          <img
            src={project?.project_image}
            className='max-w-full rounded-2xl shadow-2xl'
          />
          <div>
            <h1 className='text-5xl md:text-7xl bebas'>
              {project?.project_name}
            </h1>
            <p className='py-6 text-xl max-w-3xl font-md roboto'>
              {project?.detailed_project_page?.brief_description}
            </p>
            <div className='divider'></div>
            <div className='roboto'>
              Tech Stack used:
              <ul>
                <li>
                  Frontend:{' '}
                  <span className='font-bold gap-1'>
                    {project?.detailed_project_page?.main_technology_stack?.frontend.map(
                      (item, index) => (
                        <span key={index}>{item}, </span>
                      )
                    )}
                  </span>
                </li>
                <li>
                  Backend:{' '}
                  <span className='font-bold'>
                    {project?.detailed_project_page?.main_technology_stack
                      ?.backend || 'N/A'}
                  </span>
                </li>
                <li>
                  Database:{' '}
                  <span className='font-bold'>
                    {project?.detailed_project_page?.main_technology_stack
                      ?.database || 'N/A'}
                  </span>
                </li>
                <li>
                  Authentication:{' '}
                  <span className='font-bold'>
                    {project?.detailed_project_page?.main_technology_stack
                      ?.authentication || 'N/A'}
                  </span>
                </li>
              </ul>
            </div>
            <div className='divider'></div>
            <div className='py-10 flex flex-col gap-3'>
              <h2 className='text-3xl md:text-4xl bebas'>
                Challenges Faced During Development
              </h2>
              <ul className='list-disc roboto text-sm'>
                {project?.detailed_project_page?.challenges_faced.map(
                  (challenge, index) => (
                    <li key={index}>{challenge}</li>
                  )
                )}
              </ul>
            </div>
            <div className='divider'></div>
            <div className='py-10 flex flex-col gap-3'>
              <h2 className='text-3xl md:text-4xl bebas'>
                potential improvements and future plans
              </h2>
              <ul className='list-disc roboto text-sm'>
                {project?.detailed_project_page?.potential_improvements_and_future_plans.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
            <div className='divider'></div>
            <div className='flex gap-5'>
              <button className='btn btn-primary'>
                <a
                  href={project?.detailed_project_page?.live_project_link}
                  target='_blank'>
                  Live Link
                </a>
              </button>
              <button className='btn btn-primary'>
                <a
                  className=' flex gap-2 items-center align-middle '
                  href={project?.detailed_project_page?.github_repository_link}>
                  <FaGithub /> Repo Link
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Project;
