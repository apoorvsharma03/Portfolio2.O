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
    <div id='NAVIGATION MENU' className='sticky top-0 bg-[#0a192f58] backdrop-blur-md shadow-md w-full h-20 flex justify-between p-4'>
      <div onMouseEnter={() => !isTouchable && setLogo(Logo_Focused)} onMouseLeave={() => setLogo(Logo_Unfocused)} onClick={() => ScrollToDiv("HOME")} className='rounded-full ease-in-out'>
        <img src={logo} alt="logo" className='w-12 cursor-pointer'/>
      </div>
      <div className='flex items-center'>
        {isTouchable ? <Hamburger /> : <Navbar/>}
      </div>
    </div>
  )
}

export default NavigationMenu