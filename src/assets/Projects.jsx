import React from 'react'
import { useState } from 'react'
import ContentHeading from '../utilities/ContentHeading'
import ProjectCard from '../utilities/ProjectCard'
import Snap_AI_Poster from "../utilities/Images/snap_ai.png"
import Cinemareel_Poster from "../utilities/Images/cinemareel.png"
import Potfolio_Poster from "../utilities/Images/portfolio.png"

const Projects = () => {
  const [selectedProject, setselectedProject] = useState(null)

  const Project1 = {id:1, title:"SNAP AI", poster:Snap_AI_Poster, link:"https://snapaiproject.netlify.app", text:"SnapAI is a responsive platform for AI image generation from prompts, enabling users to create and share their artwork. The platform features a community gallery for browsing and downloading shared images. A search bar facilitates easy image discovery within the community."}
  const Project2 = {id:2, title:"PORTFOLIO", poster:Potfolio_Poster, link:"", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum at vero possimus excepturi porro? Earum quae perspiciatis aspernatur alias mollitia! Quia dignissimos possimus odit voluptatibus magni consequatur, ullam sit vel mollitia temporibus voluptate iusto officia modi veniam commodi maxime?"}
  const Project3 = {id:3, title:"CINEMAREEL", poster:Cinemareel_Poster, link:"https://cinema-reel.netlify.app/", text:"CinemaReel is a user-friendly, responsive platform for discovering trending films. Users can explore detailed information about each movie and seamlessly navigate to its IMDb page via provided links. The platform boasts a clean, intuitive interface complemented by a fully functional search bar for easy navigation."}
  const ProjectsList = [Project1, Project2, Project3]

  const handleCardClick = (Project) =>{
    selectedProject?.id === Project.id ? setselectedProject(null) : setselectedProject(Project)
  }

  return (
    <div id='PROJECTS' className='flex justify-center pt-4'>
      <div className='w-[80vw] md:w-[60vw]'>
        <div className='bg-transparent'>
          <ContentHeading>PROJECTS</ContentHeading>
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-4 w-full'>
          {ProjectsList.map((Project) => (
              <ProjectCard
                key={Project.id} 
                props={Project}
                onClick={()=>handleCardClick(Project)}
                isFocused={selectedProject?.id === Project.id}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects