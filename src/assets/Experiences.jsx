import React from 'react'
import ContentHeading from '../utilities/ContentHeading'
import MSLogo from "../utilities/Images/microsoft_logo.png"
import ExperienceCard from '../utilities/ExperienceCard'

const Experiences = () => {
  const microsoftInternship = [ MSLogo, "MICROSOFT",  "https://microsoft.com", "Software Engineer Intern", "May 2024 - July 2024", "Hyderabad, IN", "Designed and developed a system to process and classify images using Azure services, including Computer Vision, Functions, Cosmos DB, Storage, and Azure OpenAI. Built a fault-tolerant, scalable pipeline with Azure queues and increased predicted DAUs by 100K+. Collaborated effectively with cross-functional teams showcasing problem-solving and communication skills.", ["Azure Functions", "C#", "Cosmos DB", "Azure Storage"]]

  return (
    <div id='EXPERIENCES' className='flex justify-center pt-4 mb-24'>
      <div className='w-[80vw] md:w-[60vw]'>
        <ContentHeading>EXPERIENCES</ContentHeading>
        <ExperienceCard props={microsoftInternship}></ExperienceCard>
      </div>
    </div>
  )
}

export default Experiences