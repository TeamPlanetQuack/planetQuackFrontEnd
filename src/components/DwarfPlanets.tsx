import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDwarfPlanets } from "../api-adapter";

type Dwarf = {
  facts: string[];
  id: number;
  name: string;
  name_origin: string;
  orbit: string;
  radius: string;
  rotation: string;
  sun_distance: string;
  type: string;
};

const DwarfPlanets: React.FC = () => {
  const [allDwarfs, setAllDwarfs] = useState<Array<Dwarf>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDwarfs() {
      const dwarfs = await getDwarfPlanets();
      setAllDwarfs(dwarfs);
    }
    fetchDwarfs();
  }, []);

  function clickedBack() {
    navigate("/");
  }



  return (
    <div className="dwarfPlanets">
      <h1>Dwarf Planets</h1>
      {allDwarfs.map((dwarf) => (
        <div key={dwarf.id} className="dwarfInfo">
          <h3>{dwarf.name}</h3>
          <section className="infoBoxStats">
            <div className="stats1">
              <span className="planetRad">Radius: {dwarf.radius} km </span>
              <span className="spacer"> | </span>
              <span className="planetDist">
                Distance from Sun: {dwarf.sun_distance}
              </span>
            </div>
            <div className="stats2">
              <span className="planetOrbit">Orbit Time: {dwarf.orbit}</span>
              <span className="spacer"> | </span>
              <span className="planetRotation">
                Rotation Time: {dwarf.rotation}
              </span>
            </div>
          </section>

          <section className="infoBoxTxt">
            <p>{dwarf.name_origin}</p>
            <div className="planetFacts">
              <h3>More about {dwarf.name}</h3>
              <div className="planetFactsTxt">
                {dwarf.facts.map((fact: string, idx: number) => {
                  return (
                    <ul key={idx}>
                      <li>{fact}</li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </section>
          {dwarf.name !== "Eris" ? <hr className="solid"></hr> : null}
        </div>
      ))}
      <button className="backToHome" onClick={clickedBack}>
        ← Back to The Solar System
      </button>
    </div>
  );
};

export default DwarfPlanets;
