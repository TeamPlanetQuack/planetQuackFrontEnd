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
     (
        <ul>
        <li>{moon!.moon_name}</li>
      </ul>   ) 
    
  : 'Loading...'}
    </>)
}
  export default MoonInfo;