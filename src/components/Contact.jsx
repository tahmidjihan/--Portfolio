import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Social from './Social';

const Contact = () => {
  return (
    <div className="min-w-screen bg-[url('/Assets/experience-bg.png')] bg-cover  mx-auto p-5">
      <div className='grid sm:grid-cols-2 items-start gap-16 mx-auto max-w-4xl p-10 rounded-3xl bg-white roboto py-20'>
        <div>
          <h1 className='text-gray-800 text-5xl font-extrabold bebas'>
            Let's Talk
          </h1>
          <p className='text-sm text-gray-500 mt-4'>
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <div className='mt-12'>
            <h2 className='text-gray-800 text-base font-bold'>Email</h2>
            <ul className='mt-4 flex flex-col gap-4 text-2xl'>
              <li className='flex items-center'>
                <div className='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <FaEnvelope />
                </div>
                <a href='javascript:void(0)' className='text-sm ml-4'>
                  <small className='block'>Mail</small>
                  <strong>tahmid.jihan@yahoo.com</strong>
                </a>
              </li>
              <li className='flex items-center'>
                <div className='bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0'>
                  <FaPhoneAlt />
                </div>
                <a href='javascript:void(0)' className='text-sm ml-4'>
                  <small className='block'>Phone</small>
                  <strong>+88 016 2690 8422</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className='mt-12'>
            <h2 className='text-gray-800 text-base font-bold'>Socials</h2>
            <ul className='mt-4'>
              <Social />
            </ul>
          </div>
        </div>
        <form className='ml-auto space-y-4'>
          <input
            type='text'
            placeholder='Name'
            required
            className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-primary focus:bg-transparent'
          />
          <input
            type='email'
            placeholder='Email'
            required
            className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-primary focus:bg-transparent'
          />
          <input
            type='text'
            placeholder='Subject'
            required
            className='w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-primary focus:bg-transparent'
          />
          <textarea
            placeholder='Message'
            required
            rows={6}
            className='w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-primary focus:bg-transparent'
            defaultValue={''}
          />
          <button
            type='submit'
            className='text-white btn btn-primary tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
