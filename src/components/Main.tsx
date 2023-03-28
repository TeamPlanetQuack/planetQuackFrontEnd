import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
import { PlanetsNavigationBar, SolarSystemHeader } from ".";
import { getAllPlanets } from "../api-adapter";

const Main = () => {

  const [allPlanets, setAllPlanets] = useState({})

  useEffect(()=>{
    async function fetchPlanets(){
      const allFetchedPlanets = await getAllPlanets();
      setAllPlanets(allFetchedPlanets)
    }
    fetchPlanets();
  }, [])

  console.log(allPlanets)

  return (
    // <Router>
      <div id="main">
        <SolarSystemHeader />
        <PlanetsNavigationBar />
        {/* <Routes> */}

        {/* </Routes> */}
      </div>
    // </Router>
  );
};

export default Main;
