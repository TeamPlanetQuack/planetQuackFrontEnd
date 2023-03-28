import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  PlanetsNavigationBar, 
  SolarSystemHeader,
} from './'

const Main = () => {
    return (
      <Router>
      <div id="main">
        <SolarSystemHeader />
        <PlanetsNavigationBar />
        <Routes>

        </Routes>

      </div>
      </Router>
    );
  };
  
  export default Main;