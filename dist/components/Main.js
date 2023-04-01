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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlanetsNavigationBar, SolarSystemHeader, HomePage, StarBg, Quiz, DwarfPlanets, } from "./";
import { getAllPlanets } from "../api-adapter";
const Main = () => {
    const [allPlanets, setAllPlanets] = useState([]);
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    useEffect(() => {
        function fetchPlanets() {
            return __awaiter(this, void 0, void 0, function* () {
                const allFetchedPlanets = yield getAllPlanets();
                setAllPlanets(allFetchedPlanets);
            });
        }
        fetchPlanets();
    }, []);
    return (React.createElement(Router, null,
        React.createElement("div", { id: "main" },
            React.createElement("div", { className: "space" },
                React.createElement(StarBg, null),
                React.createElement("div", { className: "spaceMinusStars" },
                    React.createElement(SolarSystemHeader, { setSelectedPlanet: setSelectedPlanet }),
                    React.createElement(PlanetsNavigationBar, { allPlanets: allPlanets, selectedPlanet: selectedPlanet, setSelectedPlanet: setSelectedPlanet }),
                    !selectedPlanet ? (React.createElement(Routes, null,
                        React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
                        React.createElement(Route, { path: "/quiz", element: React.createElement(Quiz, null) }),
                        React.createElement(Route, { path: "/dwarfplanets", element: React.createElement(DwarfPlanets, null) }))) : null)))));
};
export default Main;
//# sourceMappingURL=Main.js.map