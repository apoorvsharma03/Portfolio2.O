import React from 'react'
import MouseGlow from '../utilities/MouseGlow/MouseGlow'
import IsTouchable from '../utilities/TouchContext'

const Background = () => {
  const isTouchable = IsTouchable()
  return (
    <div className={`w-screen min-h-screen -z-10 fixed top-0 left-0 ${isTouchable ? 'bg-[radial-gradient(circle,_#0e2342,_#0a192f)]' : 'bg-[#0a192f]'}`}>
        <MouseGlow/>
    </div>
  )
}

export default Background