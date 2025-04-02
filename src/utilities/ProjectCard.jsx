import React from 'react'
import { useState } from 'react'
import { IonIcon } from "@ionic/react";
import { linkOutline } from "ionicons/icons";
import IsTouchable from './TouchContext';

const ProjectCard = ({ props }) => {
    const [websitePoster, websiteLink] = props
    const [isFocused, setisFocused] = useState(false)
    const isTouchable = IsTouchable()

    return (
    <div className='bg-cover bg-center h-64 w-64 rounded-2xl' style = {{ backgroundImage: `url(${websitePoster})`}}>
        {isTouchable? <div className='h-64 w-64'>
            <a href={websiteLink} className='text-cyan-600 flex justify-center items-center h-full'></a>
        </div>  
        : <div
            className='h-64 w-64 rounded-[0.85rem] hover:bg-opacity-95 hover:bg-slate-900 hover:shadow-2xl transition-all'
            onMouseEnter={() => {setisFocused(true)}}
            onMouseLeave={() => {setisFocused(false)}}
        >
            {isFocused && <a href={websiteLink} className='text-cyan-600 flex justify-center items-center h-full'><IonIcon icon={linkOutline} className="opacity-100 visible" size="large"/></a>}
        </div>}
    </div>
  )
}

export default ProjectCard