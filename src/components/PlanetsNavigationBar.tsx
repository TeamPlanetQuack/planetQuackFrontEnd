import React
//  { useState, useEffect } 
 from "react";

 interface PlanetsNavigationBarProps {
  allPlanets: Array<Object>;
}


const PlanetsNavigationBar: React.FC<PlanetsNavigationBarProps> = (props: PlanetsNavigationBarProps) => {
    const allPlanets = props.allPlanets;

    return (
      <div id="planetsNavBar">
        {allPlanets ? allPlanets.map((planet: any) => {
          return (
            <div className="planet" key={planet.id}>
              <div className="planetImg" id={planet.name} ></div>
              <p>{planet.name}</p>
            </div>
          );
         }) : 'Loading...'}
      </div>
    );
  };
  
  export default PlanetsNavigationBar;