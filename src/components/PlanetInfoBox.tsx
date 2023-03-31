import React from //  { useState, useEffect }
"react";
import { useNavigate } from "react-router-dom";

interface PlanetsNavigationBarProps {
  selectedPlanet: planet | null;
  setSelectedPlanet: Function;
  moons: Array<Object>;
  setMoons: Function;
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
//   id: number;
//   name: string;
//   name_origin: string;
// }

const PlanetInfoBox: React.FC<PlanetsNavigationBarProps> = (
  props: PlanetsNavigationBarProps
) => {
  const selectedPlanet = props.selectedPlanet;
  const setSelectedPlanet = props.setSelectedPlanet;
  const moons = props.moons;
  // const setMoons = props.setMoons;
  console.log(moons);

  const navigate = useNavigate();

  function clickedBack() {
    setSelectedPlanet(null);
    navigate("/");
  }

  return (
    <div className="infoBox">
      <div className="infoBoxHeader">
        <div className="infoBoxHeaderTitle">
          <h1>{selectedPlanet!.name}</h1>
          <h3>{selectedPlanet!.name_origin}</h3>
        </div>
        <section className="infoBoxStats">
          <div className="moonCnt">Moons: {selectedPlanet!.moon_num}</div>
          <div className="moonInfoBox">
            <div className="allMoons">
              {selectedPlanet!.moon_num > 0 ? (
                <div className="moonTxt">
                  { Array.isArray(moons) ? moons.map((moon: any) => {
                    return (
                      <ul key={moon.id}>
                        <li>{moon.moon_name}</li>
                      </ul>
                    );
                  }): 'Loading...'}
                </div>

              ): 'This planet has no moons.'}
            </div>
          </div>
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
      </div>
      <button className="backToHome" onClick={clickedBack}>
        ← Back to The Solar System
      </button>
    </div>
  );
};

export default PlanetInfoBox;
