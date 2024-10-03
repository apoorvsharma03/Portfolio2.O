import React, { useEffect, useState } from 'react';
import "./Home.css"

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

  useEffect(() => {
    const navbarHeight = document.getElementById('NAVBAR').offsetHeight;
    setHomeHeight(`calc(100vh - ${navbarHeight}px - 10px)`);
  }, []);

  return (
    <div style={{height: homeHeight}} className='flex flex-col items-center justify-center gap-10'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div id="HELLO" className={`lg:text-8xl md:text-7xl text-6xl text-cyan-700 ${isTouchDevice && "text-cyan-400"} ${!isTouchDevice && "hover:text-cyan-400"} flex transition-transform duration-300 ease-in-out`}>
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
          <div className={`${helloTransitionDone ? "opacity-100" : "opacity-0"} ${isTouchDevice ? "w-[60vw]" : "hover:text-cyan-400 w-[30vw]"} transition-opacity duration-1000 ease-in-out text-cyan-700 text-center lg:text-2xl md:text-xl text-lg leading-6`}>
            I am Apoorv Sharma, a software engineer trying to enhance digital user experiences, one line of code at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
