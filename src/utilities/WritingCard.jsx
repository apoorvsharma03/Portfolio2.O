import React from 'react'
import { useState, useEffect } from 'react'
import { IonIcon } from "@ionic/react";
import { closeSharp } from "ionicons/icons";

const WritingCard = ({props}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isOpened, setIsOpened] = useState(false)
    const [textAlignment, settextAlignment] = useState('left')
    
    const [writingsHeight, setwritingsHeight] = useState(0);
    const [navbarHeight, setnavbarHeight] = useState(0)
    
    useEffect(() => {
      const updateTextAlignment = () => {
        props.tag === 'Poem' ? settextAlignment('center') : settextAlignment('left')
      }

      const updateHeight = () => {
        if (window.innerWidth >= 768) {
          setnavbarHeight('4rem');
          setwritingsHeight('calc(100vh - 4rem)');
        } else {
          setnavbarHeight('3.5rem');
          setwritingsHeight('calc(100vh - 3.5rem)');
        }
      };
      updateTextAlignment();
      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const handleOpen = () => {
      setIsVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsOpened(true);
        });
      });
    };

    const handleClose = (e) => {
      e.stopPropagation();
      setIsOpened(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    };

    return (
      <div className='bg-opacity-20 bg-cyan-900 hover:bg-opacity-40 hover:shadow-2xl transition-all duration-400 ease-in-out shadow-2xl w-fit p-2 rounded-2xl' onClick={handleOpen}>
          <div className='flex gap-2 cursor-pointer'>
            <h2 className='bg-cyan-600 text-[#0a192f] rounded-2xl px-2 font-sem h-fit'>{props.tag}</h2>
            <h2 className='text-cyan-600 font-semibold'>{props.title}</h2>
          </div>
          {isVisible && (
            <div className={`fixed z-10 inset-0 shadow-2xl backdrop-blur-md transition-all duration-150 ease-in ${isOpened ? 'opacity-100' : 'opacity-0'}`} style={{height: writingsHeight, top:navbarHeight}}>
                <div className='flex flex-col items-center justify-center h-full'>
                  <div className='w-[90vw] md:w-[65vw] rounded-2xl bg-slate-900 h-[85vh] text-cyan-600' style={{ overflowY: 'auto',scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
                    <div className='sticky top-0 bg-cyan-600 text-[#0a192f] justify-between text-xl py-2'>
                      <h1 className='text-center font-semibold'>{props.title}</h1>
                      <IonIcon icon={closeSharp} onClick={handleClose} className="absolute right-0 top-2 cursor-pointer min-w-12 mt-1 rounded-full transition-all duration-150 ease-in-out"/>
                    </div>
                    <br />
                    <p style={{ whiteSpace: 'pre-line', textAlign: {textAlignment}}} className={`text-${textAlignment} px-8 pb-8`}>
                      {props.text}
                    </p>
                  </div>
                </div>
            </div>
          )}   
      </div>
    )
}

export default WritingCard