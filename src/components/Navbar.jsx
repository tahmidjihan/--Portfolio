import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest',
          });
        }
      });
    });
  }, []);

  function Menu() {
    return (
      <>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
      </>
    );
  }
  return (
    <div className='navbar bg-base-100 shadow-sm sm:px-10'>
      <div className='navbar-start'>
        <a className='text-3xl bebas'>Tahmid Jihan</a>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-left'>
          <div tabIndex={0} role='button' className='btn btn-ghost md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow roboto text-lg'>
            <Menu />
          </ul>
        </div>
        <div className='hidden md:flex'>
          <ul className='menu menu-horizontal px-1 roboto text-md'>
            <Menu />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
