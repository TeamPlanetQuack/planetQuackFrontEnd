import React from //  { useState, useEffect }
"react";
import { useNavigate } from "react-router-dom";

interface PlanetsNavigationBarProps {
  setSelectedPlanet: Function;
}

const SolarSystemHeader: React.FC<PlanetsNavigationBarProps> = (
  props: PlanetsNavigationBarProps
) => {
  const setSelectedPlanet = props.setSelectedPlanet;
  const navigate = useNavigate();

  function clickedHome() {
    setSelectedPlanet(null);
    navigate("/");
  }

  return (
    <div className="sunImg">
      <p onClick={clickedHome}>The Solar System</p>
    </div>
  );
};

export default SolarSystemHeader;
