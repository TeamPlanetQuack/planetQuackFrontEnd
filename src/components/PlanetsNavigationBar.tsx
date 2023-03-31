import React
  // { useState } 
 from "react";
import PlanetInfoBox from "./PlanetInfoBox";

 interface PlanetsNavigationBarProps {
  allPlanets: Array<Object>;
  selectedPlanet: planet | null;
  setSelectedPlanet: Function;
}

type planet = {
  id: number;
  name: string;
  name_origin: string;
  description: string;
  facts: Array<string>;
  moon_num: number;
  radius: string;
  sun_distance: string;
  orbit: string;
  rotation: string;
}


const PlanetsNavigationBar: React.FC<PlanetsNavigationBarProps> = (props: PlanetsNavigationBarProps) => {
    const allPlanets = props.allPlanets;
    const selectedPlanet = props.selectedPlanet;
    const setSelectedPlanet = props.setSelectedPlanet;
    

    const handleInfoBox = (planet: planet) => {
      setSelectedPlanet(planet)
    
    }


    return (
      <div id="planets">
        <div id="planetsNavBar">
        {allPlanets ? allPlanets.map((planet: any) => {
          return (
            <div className="planetImg" key={planet.id}>
              <div className="planetImg" id={planet.name} onClick={() => handleInfoBox(planet)}></div>
            </div>
          );
         }) : 'Loading...'}</div>
         {selectedPlanet && (
            <PlanetInfoBox selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} />
           

         )}
      </div>
    );
  };
  
  export default PlanetsNavigationBar;