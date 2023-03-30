import React from //  { useState, useEffect }
 "react";
import { useNavigate } from "react-router-dom";
const PlanetInfoBox = (props) => {
    const selectedPlanet = props.selectedPlanet;
    const setSelectedPlanet = props.setSelectedPlanet;
    const navigate = useNavigate();
    function clickedBack() {
        setSelectedPlanet(null);
        navigate("/");
    }
    return (React.createElement("div", { className: "infoBox" },
        React.createElement("div", { className: "infoBoxHeader" },
            React.createElement("div", { className: "infoBoxHeaderTitle" },
                React.createElement("h1", null, selectedPlanet.name),
                React.createElement("h3", null, selectedPlanet.name_origin)),
            React.createElement("section", { className: "infoBoxStats" },
                React.createElement("div", { className: "moonCnt" },
                    "Moons: ",
                    selectedPlanet.moon_num),
                React.createElement("div", { className: "planetRad" },
                    "Radius: ",
                    selectedPlanet.radius,
                    "km"),
                React.createElement("div", { className: "planetDist" },
                    "Distance from Sun: ",
                    selectedPlanet.sun_distance),
                React.createElement("div", { className: "planetOrbit" },
                    "Orbit Time: ",
                    selectedPlanet.orbit),
                React.createElement("div", { className: "planetRotation" },
                    "Rotation Time:",
                    selectedPlanet.rotation)),
            React.createElement("section", { className: "infoBoxTxt" },
                React.createElement("p", null, selectedPlanet.description),
                React.createElement("div", { className: "planetFacts" },
                    React.createElement("div", { className: "planetFactsTitle" },
                        React.createElement("h3", null, "Interesting Facts")),
                    React.createElement("div", { className: "planetFactsTxt" }, selectedPlanet.facts.map((fact, idx) => {
                        return (React.createElement("ul", { key: idx },
                            React.createElement("li", null, fact)));
                    }))))),
        React.createElement("button", { className: "backToHome", onClick: clickedBack }, "\u2190 Back to The Solar System")));
};
export default PlanetInfoBox;
//# sourceMappingURL=PlanetInfoBox.js.map