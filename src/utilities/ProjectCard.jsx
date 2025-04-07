import React, { useState, useEffect } from "react";
import IsTouchable from "./TouchContext";

const ProjectCard = ({ props, onClick, isFocused }) => {
  const [maxPermissibleWidth, setmaxPermissibleWidth] = useState(0)
  const isTouchable = IsTouchable();

  useEffect(() => {
    const updateMaxWidth = () => {
      const ProjectCard = document.getElementById('PROJECT CARD');
      if (ProjectCard) {
        const ProjectCardWidth = ProjectCard.offsetWidth;
        setmaxPermissibleWidth(`calc(60vw - ${ProjectCardWidth}px - ${20*16}px)`);
      }
    };
  
    updateMaxWidth();
    window.addEventListener("resize", updateMaxWidth);
  
    return () => window.removeEventListener("resize", updateMaxWidth);
  }, []);
  

  return (
    <div 
      id="PROJECT CARD" 
      onClick={onClick} 
      // style={{ maxWidth: maxPermissibleWidth }} 
      className={`flex flex-col justify-center items-center p-3 cursor-pointer rounded-2xl ${isTouchable ? 'bg-opacity-20 bg-cyan-900 shadow-2xl min-w-fit' : 'bg-opacity-20 bg-cyan-900 shadow-xl hover:bg-opacity-40 hover:shadow-2xl transition-all md:flex-row'} ${isFocused && 'bg-opacity-40 shadow-2xl md:px-4 min-w-[20vw]'}`}
    >
      <div className={`relative overflow-hidden transition-all duration-300 md:duration-200 ease-in-out md:ease-in text-cyan-600 ${!isTouchable && (isFocused ? 'max-w-[36vw] h-40 delay-100' : 'max-w-0 h-40')} ${isTouchable && (isFocused ? 'max-h-[500px] w-72 delay-100' : 'max-h-0 w-72') }`}>
        <h1 className="text-cyan-400 font-semibold">{props.title}</h1>
        <hr className="p-1 border-cyan-200"/>
        <p className="pb-2 md:pr-2 mb-8 tracking-tight leading-[1.3rem]">{props.text}</p>
        <div className={`absolute bottom-1 w-full ${isTouchable && 'mt-2'}`}>
          <a href={props.link} className="rounded-xl px-3 py-1 font-semibold text-sm text-[#0a192f] bg-cyan-600 hover:bg-[#0a192f] hover:text-cyan-600 transition-all duration-100 ease-in-out">VISIT SITE!</a>
        </div>
      </div>
      <div className={`flex flex-col gap-2 items-center justify-center w-72 transition-all duration-300 ease-in-out overflow-hidden ${isFocused && (isTouchable ? 'mt-4' : 'w-0 opacity-0')}`}>
        <img src={props.poster} alt={props.title} className='rounded-xl'/>
        <h1 className='text-cyan-600 font-semibold tracking-wide'>{props.title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;