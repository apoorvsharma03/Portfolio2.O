import React, { useEffect, useState } from 'react';
import "./Home.css"
import HelloImage from "../../images/hello.gif"

const Home = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [homeHeight, setHomeHeight] = useState('100vh');

    const EnglishLetters = ['H', 'E', 'L', 'L', 'O', '!'];
    const [helloTransitionDone, setHelloTransitionDone] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
          setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();
        window.addEventListener("resize", checkTouchDevice);

        setTimeout(() => {
          setHelloTransitionDone(true);
        }, 2000);

        return () => {
          window.removeEventListener("resize", checkTouchDevice);
        };
    }, []);

    const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const navbarHeight = document.getElementById('NAVBAR').offsetHeight;
    setHomeHeight(`calc(100vh - ${navbarHeight}px - 10px)`);
  }, []);

  return (
    <div id='HOME' style={{height: homeHeight}} className={`flex items-center justify-center ${isTouchDevice && "flex-col gap-5"}`}>
      <div 
        className={`max-h-[450px] max-w-[450px] ${isTouchDevice && "w-52"}`}
        style = {{
          animation: "helloAnimation 1s ease-in forwards"
        }}
      >
        <img
          src={HelloImage}
          alt="Hello"
        />
      </div>
      <div className='flex flex-col justify-center items-center gap-5 max-w-[50vw]'>
        <div id="HELLO" className={`lg:text-7xl md:text-6xl text-5xl text-cyan-700 ${isTouchDevice && "text-cyan-400"} ${!isTouchDevice && "hover:text-cyan-400"} flex transition-transform duration-300 ease-in-out`}>
          {EnglishLetters.map((item, index) => (
            <div
            className="w-fit opacity-0"
            style={{
              animation: "helloAnimation 0.5s ease-in forwards",
              animationDelay: `${index * 0.2}s`,
            }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className='w-[70vw] flex justify-center'>
          <div className={`${helloTransitionDone ? "opacity-100" : "opacity-0"} ${isTouchDevice ? "w-[80vw]" : "hover:text-cyan-400 w-[30vw]"} transition-opacity duration-1000 ease-in-out text-cyan-700 text-center lg:text-2xl md:text-xl text-lg leading-6`}>
            I am Apoorv, a software engineer trying to enhance digital user experiences, one line of code at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
