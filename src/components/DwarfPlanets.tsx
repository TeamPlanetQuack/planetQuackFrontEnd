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

  console.log(allDwarfs)

  return (
    <div className="dwarfPlanets">
        <h1>Dwarf Planets</h1>
        {allDwarfs.map((dwarf) => (<h3>{dwarf.name}</h3>))}
      <button className="backToHome" onClick={clickedBack}>
        ← Back to The Solar System
      </button>
    </div>
  );
};

export default DwarfPlanets;
