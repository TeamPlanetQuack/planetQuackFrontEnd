import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PlanetsNavigationBar = () => {
    return (
      <div id="planetsNavBar">
        <div className="planetImg mercuryImg"></div>
        <div className="planetImg venusImg"></div>
        <div className="planetImg earthImg"></div>
        <div className="planetImg marsImg"></div>
        <div className="planetImg jupiterImg"></div>
        <div className="planetImg saturnImg"></div>
        <div className="planetImg uranusImg"></div>
        <div className="planetImg neptuneImg"></div>
      </div>
    );
  };
  
  export default PlanetsNavigationBar;