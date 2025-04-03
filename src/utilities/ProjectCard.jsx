import React, { useState } from "react";
import IsTouchable from "./TouchContext";
import { IonIcon } from "@ionic/react";
import { linkOutline } from "ionicons/icons";

const ProjectCard = ({ props }) => {
  const [websiteName, websitePoster, websiteLink, websiteText] = props;
  const [isFocused, setIsFocused] = useState(false);
  const isTouchable = IsTouchable();

  return (
    <div 
      className="relative w-64 p-2 rounded-2xl bg-opacity-20 bg-cyan-900 shadow-2xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => !isTouchable && setIsFocused(true)}
      onMouseLeave={() => !isTouchable && setIsFocused(false)}
      onClick={() => isTouchable && setIsFocused(!isFocused)}
    >
      <img 
        src={websitePoster} 
        alt="Project preview" 
        className={`w-64 h-64 object-cover mx-auto rounded-2xl`}
      />
      
      <div 
        className={`absolute bottom-4 left-4  w-56 h-60 rounded-2xl bg-[#0a314a] transition-all ease-in-out duration-300 transform ${
          isFocused ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="flex flex-col items-center justify-between p-4 h-full w-full rounded-[0.85rem] overflow-hidden">
            <h1 className="text-cyan-400 font-semibold text-lg">{websiteName}</h1>
            <p className="text-cyan-600 leading-snug w-full overflow-hidden text-base">{websiteText}</p>
            <a href={websiteLink} className="w-full flex justify-center bg-[#0a192f] rounded-2xl"><IonIcon icon={linkOutline} className="text-2xl flex text-cyan-400"></IonIcon></a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;