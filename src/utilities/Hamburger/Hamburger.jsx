import React from 'react'
import { useState } from 'react'
import "./Hamburger.css"
import ScrollToDiv from '../ScrollToDiv'

const Hamburger = () => {
    const [menuOpen, setmenuOpen] = useState(false)
    const menuItems = ['ABOUT ME', 'EXPERIENCES', 'PROJECTS', 'SKILLS', 'CONTACT ME'];
  
    return (
    <div className='flex flex-col items-end text-cyan-700'>
        <div className='flex items-center'>
            <ion-icon name="menu" clasname="opacity-100 visible" size="large" onClick={() => setmenuOpen(!menuOpen)}/>
        </div>
        {menuOpen && 
            <div className="absolute w-fit h-fit top-16 text-right">
                {menuItems.map((item, index) => (  
                    <div
                        key={item}  
                        className="menu-item text-[#0a192f] bg-cyan-700 opacity-0 translate-x-full p-2 mb-1 font-medium tracking-wider cursor-pointer"
                        onClick={() => {
                            setmenuOpen(!menuOpen)
                            ScrollToDiv(item)
                        }}
                        style={{  
                        animation: `${menuOpen ? 'slideIn' : 'slideOut'} 0.3s ease forwards`,  
                        animationDelay: `${index * 0.1}s`  
                        }}  
                    >  
                        {item}
                    </div>
                ))}
            </div>}
    </div>
  )
}

export default Hamburger