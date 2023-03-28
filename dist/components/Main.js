import React 
// { useState, useEffect } 
from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { PlanetsNavigationBar, SolarSystemHeader, } from '.';
const Main = () => {
    return (React.createElement(Router, null,
        React.createElement("div", { id: "main" },
            React.createElement(SolarSystemHeader, null),
            React.createElement(PlanetsNavigationBar, null),
            React.createElement(Routes, null))));
};
export default Main;
//# sourceMappingURL=Main.js.map