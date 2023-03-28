import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const PlanetsNavigationBar = () => {
    return (
      <div id="planetsNavBar">
        <div className="planetImg mercuryImg">1</div>
        <div className="planetImg venusImg">2</div>
        <div className="planetImg earthImg">3</div>
        <div className="planetImg marsImg">4</div>
        <div className="planetImg jupiterImg">5</div>
        <div className="planetImg saturnImg">6</div>
        <div className="planetImg uranusImg">7</div>
        <div className="planetImg neptuneImg">8</div>
      </div>
    );
  };
  
  export default PlanetsNavigationBar;