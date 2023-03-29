import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PlanetsNavigationBar, SolarSystemHeader, HomePage } from "./";
import { getAllPlanets } from "../api-adapter";

const Main = () => {

  const [allPlanets, setAllPlanets] = useState<Array<Object>>([])

  useEffect(()=>{
    async function fetchPlanets(){
      const allFetchedPlanets = await getAllPlanets();
      setAllPlanets(allFetchedPlanets)
    }
    fetchPlanets();
  }, [])

  console.log(allPlanets)

  return (
    <Router>
      <div id="main">
        <SolarSystemHeader />
        <PlanetsNavigationBar allPlanets={allPlanets}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;
