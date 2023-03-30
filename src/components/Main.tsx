import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlanetsNavigationBar, SolarSystemHeader, HomePage, StarBg } from "./";
import { getAllPlanets } from "../api-adapter";

const Main = () => {

  const [allPlanets, setAllPlanets] = useState<Array<Object>>([])
  const [selectedPlanet, setSelectedPlanet] = useState<any>(null)

  useEffect(()=>{
    async function fetchPlanets(){
      const allFetchedPlanets = await getAllPlanets();
      setAllPlanets(allFetchedPlanets)
    }
    fetchPlanets();
  }, [])


  return (
    <Router>
      <div id="main">
        <div className="space">
        <StarBg />
        <SolarSystemHeader />
        <PlanetsNavigationBar allPlanets={allPlanets} selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet}/>
        {!selectedPlanet ? <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>: null}
        
      </div>
    </div>
    </Router>
  );
};

export default Main;
