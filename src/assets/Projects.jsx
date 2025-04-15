import React, { useState, useEffect, useRef } from 'react';
import IsTouchable from '../utilities/TouchContext';
import ContentHeading from '../utilities/ContentHeading';
import ProjectCard from '../utilities/ProjectCard';
import Snap_AI_Poster from '../utilities/Images/snap_ai.png';
import Cinemareel_Poster from '../utilities/Images/cinemareel.png';
import Potfolio_Poster from '../utilities/Images/portfolio.png';
import Litsocbitm_Poster from '../utilities/Images/litsocbitm.png';

const Projects = () => {
  const isTouchable = IsTouchable();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  const projectsList = [
    { id: 1, title: "SNAP AI", poster: Snap_AI_Poster, link: "https://snapaiproject.netlify.app", text: "SnapAI is a responsive platform for AI image generation from prompts, enabling users to create and share their artwork. The platform features a community gallery for browsing and downloading shared images. A search bar facilitates easy image discovery within the community." },
    { id: 2, title: "PORTFOLIO", poster: Potfolio_Poster, link: "https://apoorvsharma.netlify.app", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum at vero possimus excepturi porro? Earum quae perspiciatis aspernatur alias mollitia! Quia dignissimos possimus odit voluptatibus magni consequatur, ullam sit vel mollitia temporibus voluptate iusto officia modi veniam commodi maxime?" },
    { id: 3, title: "CINEMAREEL", poster: Cinemareel_Poster, link: "https://cinema-reel.netlify.app/", text: "CinemaReel is a user-friendly, responsive platform for discovering trending films. Users can explore detailed information about each movie and seamlessly navigate to its IMDb page via provided links. The platform boasts a clean, intuitive interface complemented by a fully functional search bar for easy navigation." },
    { id: 4, title: "LITSOC, BITM Website", poster: Litsocbitm_Poster, link: "https://litsocbitm.netlify.app", text: "The official website for the Literary Society of BIT Mesra. Features multiple pages with smooth routing, a fully responsive layout, and an appealing image carousel. The dark-themed UI highlights events, publications, and members—enhancing user engagement and improving the society's online presence." }
  ];

  const handleClickFocus = (project) => {
    selectedProject?.id === project.id ? setSelectedProject(null) : setSelectedProject(project);
  };

  useEffect(() => {
    const handleIntersect = (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <div id='PROJECTS' className='pt-4 mb-24 flex flex-col items-center overflow-hidden'>
      <div className='bg-transparent w-[80vw] md:w-[60vw] mx-auto'>
        <ContentHeading>PROJECTS</ContentHeading>
      </div>
      <div ref={projectsRef} className='w-[80vw] md:w-[60vw] flex justify-center'>
        <div className='flex flex-wrap justify-center gap-4 w-full mt-4'>
          {projectsList.map((project, index) => {
            const initialX = index % 2 === 0 ? "-20vw" : "20vw";
            const groupIndex = Math.floor(index / 2);
            const animationMD = {
              transform: isVisible ? "translateX(0)" : `translateX(${initialX})`,
              opacity: isVisible ? 1 : 0,
              transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
              transitionDelay: `${groupIndex * 400}ms`
            };

            const animationSM = {
              transform: isVisible ? "translateY(0)" : "translateY(50vh)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
              transitionDelay: `${index * 150}ms`
            };

            return (
              <div key={project.id} className="transition-all duration-1000 ease-in-out" style={isTouchable ? animationSM : animationMD}>
                <ProjectCard
                  props={project}
                  onClick={() => isTouchable && handleClickFocus(project)}
                  onMouseEnter={() => {!isTouchable && setSelectedProject(project)}}
                  onMouseLeave={() => {!isTouchable && setSelectedProject(null)}}
                  isFocused={selectedProject?.id === project.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;