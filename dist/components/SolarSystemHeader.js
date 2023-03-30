import React 
//  { useState, useEffect } 
from "react";
import { useNavigate } from "react-router-dom";
const SolarSystemHeader = (props) => {
    const setSelectedPlanet = props.setSelectedPlanet;
    const navigate = useNavigate();
    function clickedHome() {
        setSelectedPlanet(null);
        navigate("/");
    }
    return (React.createElement("div", { className: "sunImg" },
        React.createElement("p", { onClick: clickedHome }, "The Solar System")));
};
export default SolarSystemHeader;
//# sourceMappingURL=SolarSystemHeader.js.map