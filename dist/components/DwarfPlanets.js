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
import { getDwarfPlanets } from "../api-adapter";
const DwarfPlanets = () => {
    const [allDwarfs, setAllDwarfs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function fetchDwarfs() {
            return __awaiter(this, void 0, void 0, function* () {
                const dwarfs = yield getDwarfPlanets();
                setAllDwarfs(dwarfs);
            });
        }
        fetchDwarfs();
    }, []);
    function clickedBack() {
        navigate("/");
    }
    console.log(allDwarfs);
    return (React.createElement("div", { className: "dwarfPlanets" },
        React.createElement("h1", null, "Dwarf Planets"),
        allDwarfs.map((dwarf) => (React.createElement("div", { key: dwarf.id, className: "dwarfInfo" },
            React.createElement("h3", null, dwarf.name),
            React.createElement("section", { className: "infoBoxStats" },
                React.createElement("div", { className: "stats1" },
                    React.createElement("span", { className: "planetRad" },
                        "Radius: ",
                        dwarf.radius,
                        " km "),
                    React.createElement("span", { className: "spacer" }, " | "),
                    React.createElement("span", { className: "planetDist" },
                        "Distance from Sun: ",
                        dwarf.sun_distance)),
                React.createElement("div", { className: "stats2" },
                    React.createElement("span", { className: "planetOrbit" },
                        "Orbit Time: ",
                        dwarf.orbit),
                    React.createElement("span", { className: "spacer" }, " | "),
                    React.createElement("span", { className: "planetRotation" },
                        "Rotation Time: ",
                        dwarf.rotation))),
            React.createElement("section", { className: "infoBoxTxt" },
                React.createElement("p", null, dwarf.name_origin),
                React.createElement("div", { className: "planetFacts" },
                    React.createElement("h3", null,
                        "More about ",
                        dwarf.name),
                    React.createElement("div", { className: "planetFactsTxt" }, dwarf.facts.map((fact, idx) => {
                        return (React.createElement("ul", { key: idx },
                            React.createElement("li", null, fact)));
                    })))),
            dwarf.name !== "Eris" ? React.createElement("hr", { className: "solid" }) : null))),
        React.createElement("button", { className: "backToHome", onClick: clickedBack }, "\u2190 Back to The Solar System")));
};
export default DwarfPlanets;
//# sourceMappingURL=DwarfPlanets.js.map