import React from 'react'
import ScrollToDiv from './ScrollToDiv';

const Navbar = () => {
    const menuItems = ['ABOUT ME', 'EXPERIENCES', 'PROJECTS', 'WRITINGS', 'CONTACT ME'];
  return (
    <div className='flex'>
        {menuItems.map((item) => (  
            <div
                key={item}  
                className="menu-item text-cyan-600 hover:text-cyan-400 p-2 mb-1 mr-4 font-medium tracking-wider cursor-pointer transition-all rounded-lg ease-in-out"
                onClick={() => {
                    ScrollToDiv(item)
                }}
            >  
                {item}
            </div>
        ))}
    </div>
  )
}

export default Navbar