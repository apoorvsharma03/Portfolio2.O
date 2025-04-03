import React from 'react'
import ContentHeading from '../utilities/ContentHeading'
import ProjectCard from '../utilities/ProjectCard'
import Snap_AI_Poster from "../utilities/Images/snap_ai.png"
import Cinemareel_Poster from "../utilities/Images/cinemareel.png"
import Potfolio_Poster from "../utilities/Images/portfolio.png"

const Projects = () => {
  const Project1 = ["SNAP AI", Snap_AI_Poster, "https://snapaiproject.netlify.app", "SnapAI lets users generate AI images from prompts and explore a gallery of community-created, AI-generated artworks in various styles."]
  const Project2 = ["PORTFOLIO", Potfolio_Poster, "", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At corrupti, dolorem officia eligendi temporibus harum non vel quam voluptatum numquam?"]
  const Project3 = ["CINEMAREEL", Cinemareel_Poster, "https://cinema-reel.netlify.app/", "CinemaReel is a fully responsive React-based frontend movie database featuring trending movies, a functional search bar, and IMDb redirect links."]
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