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
  description: string;
  facts: Array<string>;
  moon_num: number;
  radius: string;
  sun_distance: string;
  orbit: string;
  rotation: string;
};

// type moon = {
//     id: number;
//     planet_id: number;
//     moon_name: string;
//     discovered: string;
//     history: string;
//     moon_radius: string;
//   }

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
          <h3>{selectedPlanet!.name_origin}</h3>
        </div>
        <section className="infoBoxStats">
          <div className="planetRad">Radius: {selectedPlanet!.radius}km</div>
          <div className="planetDist">
            Distance from Sun: {selectedPlanet!.sun_distance}
          </div>
          <div className="planetOrbit">Orbit Time: {selectedPlanet!.orbit}</div>
          <div className="planetRotation">
            Rotation Time:{selectedPlanet!.rotation}
          </div>
        </section>
        <section className="infoBoxTxt">
          <p>{selectedPlanet!.description}</p>
          <div className="planetFacts">
            <div className="planetFactsTitle">
              <h3>Interesting Facts</h3>
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
        <summary className="moonCnt">{selectedPlanet!.name} has {selectedPlanet!.moon_num} Moon{selectedPlanet!.moon_num>1 ? "s": null}: </summary>
          <div className="moonInfoBox">
            <div className="allMoons">
              {selectedPlanet!.moon_num > 0 ? (
                <div className="moonTxt">
                  { moons && Array.isArray(moons) ? moons.map((moon: any) => {
                    console.log(moon);
                    return (
                        <MoonInfo key={moon!.id} moon={moon}/>
                    );
                  }): 'Loading...'}
                </div>

              ): 'This planet has no moons.'}
            </div>
          </div></details>
      </div>
      <button className="backToHome" onClick={clickedBack}>
        ← Back to The Solar System
      </button>
    </div>
  );
};

export default PlanetInfoBox;
