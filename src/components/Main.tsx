import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  PlanetsNavigationBar,
  SolarSystemHeader,
  HomePage,
  StarBg,
  Quiz,
  DwarfPlanets,
} from "./";
import { getAllPlanets } from "../api-adapter";

const Main = () => {
  const [allPlanets, setAllPlanets] = useState<Array<Object>>([]);
  const [selectedPlanet, setSelectedPlanet] = useState<any>(null);

  useEffect(() => {
    async function fetchPlanets() {
      const allFetchedPlanets = await getAllPlanets();
      setAllPlanets(allFetchedPlanets);
    }

    fetchPlanets();
  }, []);

  return (
    <Router>
      <div id="main">
        <div className="space">
          <StarBg />
          <div className="spaceMinusStars">
            <SolarSystemHeader setSelectedPlanet={setSelectedPlanet} />
            <PlanetsNavigationBar
              allPlanets={allPlanets}
              selectedPlanet={selectedPlanet}
              setSelectedPlanet={setSelectedPlanet}
            />
            {!selectedPlanet ? (
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/dwarfplanets" element={<DwarfPlanets />} />
              </Routes>
            ) : null}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
