var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MoonInfo } from "./";
import { getMoonsByPlanetId } from "../api-adapter";
const PlanetInfoBox = (props) => {
    const selectedPlanet = props.selectedPlanet;
    const setSelectedPlanet = props.setSelectedPlanet;
    const [moons, setMoons] = useState([]);
    // const setMoons = props.setMoons;
    console.log(moons);
    const navigate = useNavigate();
    function clickedBack() {
        setSelectedPlanet(null);
        navigate("/");
    }
    useEffect(() => {
        function fetchMoons() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!selectedPlanet) {
                    return;
                }
                else {
                    const fetchedMoons = yield getMoonsByPlanetId(selectedPlanet.id);
                    setMoons(fetchedMoons);
                }
            });
        }
        fetchMoons();
    }, [selectedPlanet]);
    return (React.createElement("div", { className: "infoBox" },
        React.createElement("h1", null, selectedPlanet.name),
        React.createElement("section", { className: "infoBoxStats" },
            React.createElement("div", { className: "stats1" },
                React.createElement("span", { className: "planetRad" },
                    "Radius: ",
                    selectedPlanet.radius,
                    " km",
                    " "),
                React.createElement("span", { className: "spacer" }, " | "),
                React.createElement("span", { className: "planetDist" },
                    "Distance from Sun: ",
                    selectedPlanet.sun_distance)),
            React.createElement("div", { className: "stats2" },
                React.createElement("span", { className: "planetOrbit" },
                    "Orbit Time: ",
                    selectedPlanet.orbit),
                React.createElement("span", { className: "spacer" }, " | "),
                React.createElement("span", { className: "planetRotation" },
                    "Rotation Time: ",
                    selectedPlanet.rotation))),
        React.createElement("section", { className: "infoBoxTxt" },
            React.createElement("p", null,
                selectedPlanet.name,
                " is a",
                " ",
                selectedPlanet.type === "rocky" ? "terrestrial" : "jovian",
                " planet meaning it is",
                " ",
                selectedPlanet.type === "gas" ? "a gas giant" : "rocky",
                " and it is the ",
                selectedPlanet.id,
                selectedPlanet.id === 1 ? "st" : null,
                selectedPlanet.id === 2 ? "nd" : null,
                selectedPlanet.id === 3 ? "rd" : null,
                selectedPlanet.id >= 4 ? "th" : null,
                " planet from the sun."),
            React.createElement("p", null, selectedPlanet.name_origin),
            React.createElement("div", { className: "planetFacts" },
                React.createElement("h3", null,
                    "More about ",
                    selectedPlanet.name),
                React.createElement("div", { className: "planetFactsTxt" }, selectedPlanet.facts.map((fact, idx) => {
                    return (React.createElement("ul", { key: idx },
                        React.createElement("li", null, fact)));
                })))),
        React.createElement("details", null,
            React.createElement("summary", { className: "moonCnt" },
                selectedPlanet.name,
                " has ",
                selectedPlanet.moon_num,
                " Moon",
                selectedPlanet.moon_num === 1 ? null : "s",
                ":",
                " "),
            React.createElement("div", { className: "allMoons" }, selectedPlanet.moon_num > 0 ? (React.createElement(React.Fragment, null, moons && Array.isArray(moons)
                ? moons.map((moon) => {
                    console.log(moon);
                    return React.createElement(MoonInfo, { key: moon.id, moon: moon });
                })
                : "Loading...")) : ("This planet has no moons."))),
        React.createElement("button", { className: "backToHome", onClick: clickedBack }, "\u2190 Back to The Solar System")));
};
export default PlanetInfoBox;
//# sourceMappingURL=PlanetInfoBox.js.map