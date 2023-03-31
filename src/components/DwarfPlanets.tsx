import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDwarfPlanets } from "../api-adapter";

const DwarfPlanets: React.FC = () => {
  const [allDwarfs, setAllDwarfs] = useState<Array<Object>>([]);
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
      <button className="backToHome" onClick={clickedBack}>
        ← Back to The Solar System
      </button>
    </div>
  );
};

export default DwarfPlanets;
