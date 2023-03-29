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
import { PlanetsNavigationBar, SolarSystemHeader, HomePage } from "./";
import { getAllPlanets } from "../api-adapter";
const Main = () => {
    const [allPlanets, setAllPlanets] = useState({});
    useEffect(() => {
        function fetchPlanets() {
            return __awaiter(this, void 0, void 0, function* () {
                const allFetchedPlanets = yield getAllPlanets();
                setAllPlanets(allFetchedPlanets);
            });
        }
        fetchPlanets();
    }, []);
    console.log(allPlanets);
    return (React.createElement(Router, null,
        React.createElement("div", { id: "main" },
            React.createElement(SolarSystemHeader, null),
            React.createElement(PlanetsNavigationBar, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) })))));
};
export default Main;
//# sourceMappingURL=Main.js.map