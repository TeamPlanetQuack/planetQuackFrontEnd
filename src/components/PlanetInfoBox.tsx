import React, { useState, useEffect } from 
"react";
import { useNavigate } from "react-router-dom";
import { MoonInfo } from "./"
import { getMoonsByPlanetId } from "../api-adapter";

interface PlanetsNavigationBarProps {
  selectedPlanet: planet | null;
  setSelectedPlanet: Function;
}

type planet = {
  id: number;
  name: string;
  name_origin: string;
  type: string;
  facts: Array<string>;
  moon_num: number;
  radius: string;
  sun_distance: string;
  orbit: string;
  rotation: string;
};


const PlanetInfoBox: React.FC<PlanetsNavigationBarProps> = (
  props: PlanetsNavigationBarProps
) => {
  const selectedPlanet = props.selectedPlanet;
  const setSelectedPlanet = props.setSelectedPlanet;
  const [moons, setMoons] = useState<Array<Object>>([])
  // const setMoons = props.setMoons;
  console.log(moons);

  const navigate = useNavigate();

  function clickedBack() {
    setSelectedPlanet(null);
    navigate("/");
  }

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
    <div className="infoBox">
      <div className="infoBoxHeader">
        <div className="infoBoxHeaderTitle">
          <h1>{selectedPlanet!.name}</h1>
        </div>
        <section className="infoBoxStats">
            <div className="stats1">
          <span className="planetRad">Radius: {selectedPlanet!.radius} km </span>
          <span className="spacer"> | </span>
          <span className="planetDist">
            Distance from Sun: {selectedPlanet!.sun_distance}
          </span></div>
          <div className="stats2">
          <span className="planetOrbit">Orbit Time: {selectedPlanet!.orbit}</span>
          <span className="spacer">  |  </span>
          <span className="planetRotation">
            Rotation Time: {selectedPlanet!.rotation}
          </span></div>
          <p>{selectedPlanet!.name} is a {selectedPlanet!.type==="rocky" ? "terrestrial": "jovian"} planet meaning it is {selectedPlanet!.type==="gas"? "a gas giant" : "rocky"} and it is the {selectedPlanet!.id}{selectedPlanet!.id===1 ? "st" : null}{selectedPlanet!.id===2 ? "nd" : null}{selectedPlanet!.id===3 ? "rd" : null}{selectedPlanet!.id>=4 ? "th" : null} planet from the sun.</p>
          <p>{selectedPlanet!.name_origin}</p>
        </section>
        <section className="infoBoxTxt">
          <div className="planetFacts">
            <div className="planetFactsTitle">
              <h3>More about {selectedPlanet!.name}</h3>
            </div>
            <div className="planetFactsTxt">
              {selectedPlanet!.facts.map((fact: string, idx: number) => {
                return (
                  <ul key={idx}>
                    <li>{fact}</li>
                  </ul>
                );
              })}
            </div>
          </div>
        </section>
        <details>
        <summary className="moonCnt">{selectedPlanet!.name} has {selectedPlanet!.moon_num} Moon{selectedPlanet!.moon_num===1 ? null: "s"}: </summary>

            <div className="allMoons">
              {selectedPlanet!.moon_num > 0 ? (
                <>
                  { moons && Array.isArray(moons) ? moons.map((moon: any) => {
                    console.log(moon);
                    return (
                        <MoonInfo key={moon!.id} moon={moon}/>
                    );
                  }): 'Loading...'}
                </>

              ): 'This planet has no moons.'}
            </div>
          </details>
      </div>
      <button className="backToHome" onClick={clickedBack}>
        ← Back to The Solar System
      </button>
    </div>
  );
};

export default PlanetInfoBox;
