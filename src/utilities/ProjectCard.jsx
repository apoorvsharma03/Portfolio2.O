import IsTouchable from "./TouchContext";

const ProjectCard = ({ props, onClick, onMouseEnter, onMouseLeave, isFocused }) => {
  const isTouchable = IsTouchable();
  
  return (
    <div 
      id="PROJECT CARD" 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex flex-col justify-center p-3 rounded-2xl
      ${isTouchable ? 'bg-opacity-20 bg-cyan-900 shadow-2xl min-w-fit' : 'w-fit bg-opacity-10 bg-cyan-900 shadow-xl hover:bg-opacity-30 transition-all duration-300 ease-in-out md:flex-row'} 
      ${isFocused && 'bg-opacity-40 shadow-2xl md:px-4 min-w-80 transition-all duration-300'}`}
    >
      <div className={`relative overflow-hidden transition-all duration-500 ease-in-out text-cyan-600 
        ${!isTouchable && (isFocused ? 'max-w-[500px] h-[11.5rem] opacity-100' : 'max-w-0 h-[11.5rem] opacity-0')} 
        ${isTouchable && (isFocused ? 'max-h-[500px] w-72 delay-100' : 'max-h-0 w-72')}`}>
        <h1 className="text-cyan-400 font-semibold">{props.title}</h1>
        <hr className="p-1 border-cyan-200"/>
        <p className={`pb-2 md:pr-2 mb-8 tracking-tight leading-[1.3rem]`}>{props.text}</p>
        <div className={`absolute bottom-2 w-full ${isTouchable && 'mt-2'}`}>
          <a href={props.link} className="rounded-xl px-3 py-1 font-semibold text-sm text-[#0a192f] bg-cyan-600 hover:bg-[#0a192f] hover:text-cyan-600 transition-all duration-300 ease-in-out">VISIT SITE!</a>
        </div>
      </div>
      <div className={`flex flex-col gap-2 items-center justify-center transition-all duration-500 ease-in-out overflow-hidden h-[11.5rem]
        ${!isTouchable && (isFocused ? 'w-0 opacity-0 scale-95' : 'w-72 opacity-100 scale-100')}`}>
        <img src={props.poster} alt={props.title} className={`transition-all duration-300 max-w-80 ${isFocused ? 'rounded-b-xl' : 'rounded-t-xl'} ${!isTouchable && 'hover:scale-105'}`}/>
        <h1 className={`text-cyan-600 font-semibold tracking-wide transition-all duration-300 ease-in-out overflow-hidden ${isTouchable && isFocused ? 'h-0' : 'h-5'}`}>{props.title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;