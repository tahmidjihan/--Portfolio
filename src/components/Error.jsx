import React from 'react';
import { Link } from 'react-router';

function Error() {
  return (
    <>
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8 text-center'>
          <div className='mb-8'>
            <h2 className='mt-6 text-6xl font-extrabold text-gray-900'>404</h2>
            <p className='mt-2 text-3xl font-bold text-gray-900'>
              Talent Not Found
            </p>
            <p className='mt-2 text-sm text-gray-600'>
              But don’t worry, just like my skills, this page is constantly
              improving. Let’s get you back on track!
            </p>
          </div>
          <div className='mt-8'>
            <Link to='/' className='btn primary-btn'>
              <svg
                className='mr-2 -ml-1 h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12h18m-9-9l9 9-9 9'
                />
              </svg>
              Go back home
            </Link>
          </div>
        </div>
        <div className='mt-16 w-full max-w-2xl'>
          <div className='relative'>
            <div
              className='absolute inset-0 flex items-center'
              aria-hidden='true'>
              <div className='w-full border-t border-gray-300 ' />
            </div>
            <div className='relative flex justify-center'>
              <span className='px-2 bg-gray-100 text-sm text-gray-500 '>
                If you think this is a mistake, please contact me.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
