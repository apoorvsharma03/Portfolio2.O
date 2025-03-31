import React from 'react'
import { useState, useEffect } from 'react';
import "./Home.css"
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub, logoInstagram } from "ionicons/icons";


const Home = () => {
  const [aboutHeight, setaboutHeight] = useState('fit-content');

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth >= 768) {
        setaboutHeight('calc(100vh - 5rem)');
      } else {
        setaboutHeight('fit-content');
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div id='HOME'>
      <div className={`p-5 md:flex md:flex-col md:w-full md:items-center md:justify-center`} style={{height: aboutHeight}}>
        <h2 className='text-cyan-700 font-sans text-lg md:text-3xl'>Hi, I'm</h2>
        <h1 className="text-3xl md:text-5xl animate-gradient font-bold">
          APOORV SHARMA
        </h1>
        <br className='hidden md:inline'/>
        <h3 className="text-cyan-700 font-style: italic text-lg md:text-xl">developer and sporadic writer</h3>
        <br/>
        <div>
          <a href="https://www.linkedin.com/in/apoorv-sharma-056b47229/"><IonIcon icon={logoLinkedin} className='text-cyan-700 mr-2 text-3xl'/></a>
          <a href="https://github.com/apoorvsharma03"><IonIcon icon={logoGithub} className='text-cyan-700 mr-2 text-3xl'/></a>
          <a href="https://www.instagram.com/26_apoorv/"><IonIcon icon={logoInstagram} className='text-cyan-700 mr-2 text-3xl'/></a>
        </div>
      </div>
    </div>
  )
}

export default Home