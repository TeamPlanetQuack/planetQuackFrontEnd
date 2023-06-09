import React from "react";
interface PlanetsNavigationBarProps {
    selectedPlanet: planet | null;
    setSelectedPlanet: Function;
}
type planet = {
    id: number;
    name: string;
    name_origin: string;
    type: string;
    facts: Array<string>;
    moon_num: number;
    radius: string;
    sun_distance: string;
    orbit: string;
    rotation: string;
};
declare const PlanetInfoBox: React.FC<PlanetsNavigationBarProps>;
export default PlanetInfoBox;
