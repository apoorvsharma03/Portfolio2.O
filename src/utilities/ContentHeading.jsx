import React, { useEffect, useRef, useState } from 'react';

const ContentHeading = ({ children }) => {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <h1 
      ref={headingRef}
      className={`font-semibold text-lg ${isVisible? 'text-[#0a192f]' : 'text-transparent'} p-2 relative overflow-hidden`}
      style={{
        position: 'relative',
      }}
    >
      {children}
      <div 
        className={`absolute inset-0 bg-cyan-600 transition-transform duration-700 ease-out`}
        style={{
          transform: isVisible ? 'translateX(0)' : 'translateX(-101%)',
          zIndex: -1,
        }}
      />
    </h1>
  );
};

export default ContentHeading;