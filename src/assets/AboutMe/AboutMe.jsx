import React, { useEffect, useRef, useState } from 'react';
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";

const AboutMe = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        const checkTouchDevice = () => {
          setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();
        window.addEventListener("resize", checkTouchDevice);

        return () => {
          window.removeEventListener("resize", checkTouchDevice);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id="ABOUT ME" className='w-[100vw] h-[100vh] flex justify-center'>
            <div className={`w-[80vw] flex justify-evenly items-center ${isTouchDevice && "flex-col"}`}>
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="APOORV_HEIGHT" className='lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]' >
                    <img src={image1} alt="apoorv_image" className={`${isHovered && !isTouchDevice && "hidden"}`}/>
                    <img src={image2} alt="apoorv_image" className={`${(isTouchDevice || (!isTouchDevice && !isHovered)) && "hidden"}`}/>
                </div>
                <div className='lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] flex flex-col lg:gap-5 items-center justify-center'>
                    <span className='lg:text-5xl md:text-4xl text-3xl text-cyan-700 hover:text-cyan-400'>ABOUT ME</span>
                    <span className='text-cyan-700 lg:text-xl hover:text-cyan-400 text-center'>Hi! I’m Apoorv Sharma, a final-year Computer Science and Engineering student at BIT, Mesra. I’m passionate about software development and enjoy tackling new challenges. If you have a collaborative project in mind, let’s connect!</span>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
