import React from "react";

 interface PlanetsNavigationBarProps {
  moon: moon;
}

type moon = {
    id: number;
    planet_id: number;
    moon_name: string;
    discovered: string;
    history: string;
    moon_radius: string;
  }

const MoonInfo: React.FC<PlanetsNavigationBarProps> = (
  props: PlanetsNavigationBarProps
) => {
  const moon = props.moon;
  
return (
    <>
  { moon  ? 
     (<div className="oneMoon">
        <details><summary>{moon!.moon_name}</summary>
        <ul>
        <li>{moon!.discovered}</li>
        <li>{moon!.history}</li>
        <li>{moon!.moon_name} has a radius of {moon!.moon_radius} km.</li>
      </ul></details></div>   ) 
    
  : 'Loading...'}
    </>)
}
  export default MoonInfo;