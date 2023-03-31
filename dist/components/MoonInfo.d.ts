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
};
declare const MoonInfo: React.FC<PlanetsNavigationBarProps>;
export default MoonInfo;
