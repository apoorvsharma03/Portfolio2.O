import React, { useState } from 'react'
import ContentHeading from '../utilities/ContentHeading'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send Message');
  const [buttonColor, setbuttonColor] = useState('bg-cyan-600');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoURL = `mailto:apoorv.sharma26@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
  
    window.location.href = mailtoURL;
    
    setButtonText('Redirected!');
    setbuttonColor('bg-cyan-400');
    
    setTimeout(() => {
      setButtonText('Send Message');
      setbuttonColor('bg-cyan-600');
    }, 3000);
  };

  return (
    <div id='CONTACT ME' className='flex flex-col items-center pt-4'>
      <div className='w-[80vw] md:w-[60vw]'>
        <ContentHeading className='text-2xl font-semibold mb-4 text-center text-cyan-600'>CONTACT ME!</ContentHeading>
        <div className='email-section mb-4 bg-opacity-20 bg-cyan-900 shadow-2xl p-4 mt-4 rounded-2xl'>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div className='md:flex md:gap-4'>
              <div className='flex flex-col gap-4 md:w-1/2'>
                <div>
                  <label htmlFor='name' className='text-sm font-medium text-cyan-600'>Your Name</label>
                  <input 
                    type='text' 
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='text-white outline-none w-full px-3 py-2 rounded-md shadow-sm transition-all duration-300 ease-in-out bg-cyan-600/10 hover:bg-cyan-600/20 focus:bg-cyan-600/30 mt-1' 
                    placeholder='John Doe'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='email' className='text-sm font-medium text-cyan-600'>Your Email</label>
                  <input 
                    type='email' 
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='text-white outline-none w-full px-3 py-2 rounded-md shadow-sm transition-all duration-300 ease-in-out bg-cyan-600/10 hover:bg-cyan-600/20 focus:bg-cyan-600/30 mt-1' 
                    placeholder='email@example.com'
                    required
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='text-sm font-medium text-cyan-600'>Subject</label>
                  <input 
                    type='text' 
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='text-white outline-none w-full px-3 py-2 rounded-md shadow-sm transition-all duration-300 ease-in-out bg-cyan-600/10 hover:bg-cyan-600/20 focus:bg-cyan-600/30 mt-1' 
                    placeholder='Subject'
                    required
                  />
                </div>
              </div>
              <div className='md:flex md:flex-col md:flex-1'>
                <label htmlFor='message' className='text-sm font-medium text-cyan-600'>Message</label>
                <textarea 
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4' 
                  className='text-white resize-none outline-none w-full px-3 py-2 rounded-md shadow-sm transition-all duration-300 ease-in-out bg-cyan-600/10 hover:bg-cyan-600/20 focus:bg-cyan-600/30 md:h-full mt-1' 
                  placeholder='Your message here...'
                  required
                ></textarea>
              </div>
            </div>
            <div className='w-full'>
              <button 
                type='submit' 
                className={`py-2 px-4 border-transparent rounded-md text-sm font-medium ${buttonColor}`}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact