import React from "react";
interface PlanetsNavigationBarProps {
    selectedPlanet: planet | null;
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
};
declare const PlanetInfoBox: React.FC<PlanetsNavigationBarProps>;
export default PlanetInfoBox;
