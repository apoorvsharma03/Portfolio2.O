import React from 'react'
import IsTouchable from './TouchContext'

const ExperienceCard = ({ props }) => {
    const isTouchable = IsTouchable()
    const mobileWidth = `calc(80vw - 4rem)`
    const [logo, name, link, position, tenure, location, description, tags] = props

  return (
    <div className='flex flex-col mt-4'>
      <div className={`p-4 rounded-xl ${isTouchable? 'bg-opacity-20 bg-cyan-900 shadow-2xl' : 'bg-opacity-20 bg-cyan-900 hover:bg-opacity-40 hover:shadow-2xl transition-all'}`}>
        <div className='flex flex-col md:flex-row justify-between'>
          <div className='flex items-center gap-4'>
            <a href={link}>
              <img src={logo} alt={name} className='w-10 md:w-12'/>
            </a>
            <div>
              <a href={link}>
                <h2 className='text-cyan-400 text-lg font-semibold'>{name}</h2>
              </a>
              <h2 className='text-cyan-600 font-style: italic'>{position}</h2>
            </div>
          </div>
          <div className='flex flex-col justify-between mt-4 md:mt-0 md:inline'>
            <h2 className='text-cyan-600'>{tenure}</h2>
            <h2 className='text-cyan-600'>{location}</h2>
          </div>
        </div>
        <br />
        <hr className='border-cyan-200'/>
        <div className='flex flex-col mt-4 gap-4 md:flex-row md:gap-0'>
          <div className={`w-${mobileWidth} md:w-[42vw]  text-cyan-600`}>{description}</div>
          <div className='flex flex-wrap flex-row md:flex-col md:items-end gap-2 text-sm min-w-[18vw]'>
            {tags.map((tag, index) => (
                <h5 key={index} className='bg-cyan-600 rounded-lg p-1 px-2 whitespace-nowrap'>
                    {tag}
                </h5>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard