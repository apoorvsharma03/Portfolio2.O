import React from 'react'
import ContentHeading from '../utilities/ContentHeading'
import ProjectCard from '../utilities/ProjectCard'
import Snap_AI_Poster from "../utilities/Images/snap_ai.png"
import Cinemareel_Poster from "../utilities/Images/cinemareel.png"
import Potfolio_Poster from "../utilities/Images/portfolio.png"

const Projects = () => {
  const Project1 = [Snap_AI_Poster, "https://snapaiproject.netlify.app"]
  const Project2 = [Potfolio_Poster, ""]
  const Project3 = [Cinemareel_Poster, "https://cinema-reel.netlify.app/"]
  const Projects = [Project1, Project2, Project3]

  return (
    <div id='PROJECTS' className='flex justify-center pt-4'>
      <div className='w-[80vw] md:w-[60vw]'>
        <div className='bg-transparent'>
          <ContentHeading>PROJECTS</ContentHeading>
        </div>
        <div className='flex flex-wrap justify-around items-center gap-4 mt-4'>
          {Projects.map((Project) => (
            <ProjectCard props={Project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects