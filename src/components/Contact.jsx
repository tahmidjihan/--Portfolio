import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='max-w-screen-lg mx-auto p-5'>
      <div className='grid grid-cols-1 md:grid-cols-12 border rounded-2xl'>
        <div className='bg-[#ab1748] md:col-span-4 p-10 rounded-2xl text-white'>
          <p className='mt-4 text-sm leading-7 font-regular uppercase'>
            Contact
          </p>
          <h3 className='text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight'>
            Get In <span className='secondary-text'>Touch</span>
          </h3>
          <p className='mt-4 leading-7 text-gray-200'>
            Got questions or want to collaborate? Feel free to reach out!
            Whether you're looking for advice, project support, or just a chat
            about tech and business, I'm always open to connecting with
            like-minded people. Drop me a message below, and I'll get back to
            you as soon as I can. Let’s make something amazing happen!
          </p>

          <div className='flex items-center mt-5'>
            <FaMapMarkerAlt className='h-6 mr-2 secondary-text' />
            <span className='text-sm'>Chittagong, Bangladesh</span>
          </div>
          <div className='flex items-center mt-5'>
            <FaPhoneAlt className='h-6 mr-2 secondary-text' />
            <span className='text-sm'>+880 162 690 8422</span>
          </div>
          <div className='flex items-center mt-5'>
            <FaClock className='h-6 mr-2 secondary-text' />
            <span className='text-sm'>24/7</span>
          </div>
        </div>
        <form method='post' className='md:col-span-8 p-10'>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-first-name'>
                First Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-first-name'
                type='text'
                placeholder='Jane'
                required
              />
            </div>
            <div className='w-full md:w-1/2 px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-last-name'>
                Last Name
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-last-name'
                type='text'
                placeholder='Doe'
                required
              />
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-6'>
            <div className='w-full px-3'>
              <label
                className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-email'>
                Email Address
              </label>
              <input
                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='grid-email'
                type='email'
                placeholder='********@*****.**'
                required
              />
            </div>
          </div>
          <button className='btn primary-btn btn-lg'>Submit</button>

          {/* You can continue the form elements here */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
