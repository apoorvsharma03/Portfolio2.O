import React from 'react'
import { useState } from 'react'
import IsTouchable from '../utilities/TouchContext'
import Navbar from '../utilities/Navbar'
import Hamburger from '../utilities/Hamburger/Hamburger'
import Logo_Unfocused from '../utilities/Images/logo.png'
import Logo_Focused from "../utilities/Images/logo_focused.png"
import ScrollToDiv from '../utilities/ScrollToDiv'

const NavigationMenu = () => {
    const isTouchable = IsTouchable()
    const [logo, setLogo] = useState(Logo_Unfocused)

  return (
    <div id='NAVIGATION MENU' className='sticky top-0 bg-[#0a192f58] backdrop-blur-md shadow-md w-full md:h-16 h-14 flex justify-between md:p-4 px-4 overfloww-hidden z-10'>
      <div onMouseEnter={() => !isTouchable && setLogo(Logo_Focused)} onMouseLeave={() => setLogo(Logo_Unfocused)} onClick={() => ScrollToDiv("HOME")} className='rounded-full ease-in-out flex justify-center items-center'>
        <img src={logo} alt="logo" className='w-10 cursor-pointer'/>
      </div>
      <div className='flex items-center'>
        {isTouchable ? <Hamburger /> : <Navbar/>}
      </div>
    </div>
  )
}

export default NavigationMenu