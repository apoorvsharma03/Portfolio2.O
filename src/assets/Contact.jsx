import React, { useState, useEffect, useRef } from 'react'
import ContentHeading from '../utilities/ContentHeading';
import IsTouchable from '../utilities/TouchContext';

const Contact = () => {
  const contactRef = useRef(null);
  const isTouchable = IsTouchable();
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Send Message');
  const [buttonColor, setbuttonColor] = useState('bg-cyan-600');
  const [formData, setFormData] = useState({
    name: '',
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const transitionClass = "transition-all duration-1000 ease-in-out";
  
  const firstLayerClass = `${transitionClass} ${isVisible ? 'translate-y-0' : 'translate-y-96'}`;
  const secondLayerClass = `${transitionClass} delay-100 ${isVisible ? 'translate-y-0' : 'translate-y-80'}`;
  const thirdLayerClass = `${transitionClass} delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-64'}`;
  const contentClass = `${transitionClass} delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`;

  return (
    <div id='CONTACT ME' ref={contactRef} className='md:w-full overflow-hidden mt-4'>
      <div className={`w-0 md:w-full bg-opacity-10 bg-cyan-900 shadow-2xl rounded-t-3xl mx-auto ${firstLayerClass}`}>
        <div className={`w-0 md:w-[80vw] bg-opacity-10 bg-cyan-900 shadow-2xl rounded-t-3xl mx-auto ${secondLayerClass}`}>
          <div className={`flex flex-col items-center ${thirdLayerClass}`}>
            <div className='w-[100vw] md:w-[60vw]'>
              <div className={`bg-opacity-10 bg-cyan-900 shadow-2xl p-4 rounded-t-3xl ${contentClass}`}>
                <div className='rounded-2xl overflow-hidden mb-4 text-center'>
                  <ContentHeading>CONTACT ME</ContentHeading>
                </div>
                <form className='space-y-4 md:flex md:flex-col md:items-center' onSubmit={handleSubmit}>
                  <div className='md:flex md:gap-4 md:w-[60vw] p-4'>
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
                    <div className='mt-4 md:flex md:flex-col md:flex-1 md:mt-0'>
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
                  <div className='w-fit'>
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
        </div>
      </div>
    </div>
  )
}

export default Contact