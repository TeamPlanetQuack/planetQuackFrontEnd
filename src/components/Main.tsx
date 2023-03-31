import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { PlanetsNavigationBar, SolarSystemHeader, HomePage, StarBg, Quiz } from "./";
import { getAllPlanets, getMoonsByPlanetId } from "../api-adapter";


const Main = () => {

  const [allPlanets, setAllPlanets] = useState<Array<Object>>([])
  const [selectedPlanet, setSelectedPlanet] = useState<any>(null)
  const [moons, setMoons] = useState<Array<Object>>([])

  useEffect(()=>{
    async function fetchPlanets(){
      const allFetchedPlanets = await getAllPlanets();
      setAllPlanets(allFetchedPlanets)
    }
    
    fetchPlanets();
      
  }, [])

  useEffect(() => {
    async function fetchMoons(){
      if (!selectedPlanet) {
        return;
      } else {
        const fetchedMoons = await getMoonsByPlanetId(selectedPlanet.id);
        setMoons(fetchedMoons);
      }
    }
    fetchMoons();
  }, [selectedPlanet]);


  return (
    <Router>
      <div id="main">
        <div className="space">
        <StarBg />
        <div className="spaceMinusStars">
        <SolarSystemHeader setSelectedPlanet={setSelectedPlanet}/>
        <PlanetsNavigationBar allPlanets={allPlanets} selectedPlanet={selectedPlanet} setSelectedPlanet={setSelectedPlanet} moons={moons} setMoons={setMoons}/>
        {!selectedPlanet ? <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>: null}
        </div>
      </div>
    </div>
    </Router>
  );
};

export default Main;
