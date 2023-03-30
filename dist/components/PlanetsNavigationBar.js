import React 
// { useState } 
from "react";
import PlanetInfoBox from "./PlanetInfoBox";
const PlanetsNavigationBar = (props) => {
    const allPlanets = props.allPlanets;
    const selectedPlanet = props.selectedPlanet;
    const setSelectedPlanet = props.setSelectedPlanet;
    const handleInfoBox = (planet) => {
        setSelectedPlanet(planet);
    };
    return (React.createElement("div", { id: "planets" },
        React.createElement("div", { id: "planetsNavBar" }, allPlanets ? allPlanets.map((planet) => {
            return (React.createElement("div", { className: "planetImg", key: planet.id },
                React.createElement("div", { className: "planetImg", id: planet.name, onClick: () => handleInfoBox(planet) })));
        }) : 'Loading...'),
        selectedPlanet && (React.createElement(PlanetInfoBox, { selectedPlanet: selectedPlanet }))));
};
export default PlanetsNavigationBar;
//# sourceMappingURL=PlanetsNavigationBar.js.map