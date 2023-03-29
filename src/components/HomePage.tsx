import React from //  { useState, useEffect }
"react";
import {Quiz} from "./"

const HomePage: React.FC = () => {

function defineOrbit () {
    const definition: HTMLElement = document.getElementById("orbitDef")!
    if (definition.classList.contains("hidden")) {
        definition.classList.remove("hidden")
    } else {
        definition.classList.add("hidden")
    }
}

function defineGalaxy () {
    const definition: HTMLElement = document.getElementById("galaxyDef")!
    if (definition.classList.contains("hidden")) {
        definition.classList.remove("hidden")
    } else {
        definition.classList.add("hidden")
    }
}

function defineDwarf () {
    const definition: HTMLElement = document.getElementById("dwarfDef")!
    if (definition.classList.contains("hidden")) {
        definition.classList.remove("hidden")
    } else {
        definition.classList.add("hidden")
    }
}

function clickDidYouKnow () {
    const didYouKnowBefore: HTMLElement = document.getElementById("didYouKnowBefore")!
    const didYouKnowAfter: HTMLElement = document.getElementById("didYouKnowAfter")!

    if (didYouKnowAfter.classList.contains("hidden")){
        didYouKnowAfter.classList.remove("hidden")
        didYouKnowBefore.classList.add("hidden")} else {
            didYouKnowBefore.classList.remove("hidden")
        didYouKnowAfter.classList.add("hidden")
        }
    }


  return (
    <div>
      <h1>Our Solar System</h1>
      <p>
        A solar system consists of planets orbiting a star. Our solar system
        consists of the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn,
        Neptune, and Uranus orbiting the <a href="#">Sun</a>. There is also an
        asteroid belt between Mars and Jupiter. The asteroid belt contains
        thousands of space rocks that are not quite big enough to be planets
        themselves, but they also <span className="vocab" onClick={defineOrbit}>orbit</span> our sun.
      </p>
      <div className="definition hidden" id="orbitDef">
        Orbit - to travel around an object in space in a circular or elliptical
        path
      </div>
      <p>
        In our solar system, we classify planets as either terrestrial or
        jovian. Another word for terrestrial is rocky. The first four planets
        closest to the sun, Mercury, Venus, Earth, and Mars are terrestrial
        planets. In general terrestrial planets are small, dense, warm, and have
        very few moons. The four planets furthest from the sun, Jupiter, Saturn,
        Uranus, and Neptune, are jovian planets, also known as gas and ice
        giants. In general jovian planets are large, less dense, cold, and have
        many moons orbiting them.
      </p>
      <div className="didYouKnow" onClick={clickDidYouKnow}> <div className="dYK">?</div><div id="didYouKnowBefore">Did You Know  ?</div><div className="hidden" id="didYouKnowAfter">
        In the past, humans thought the Earth was the center of the Universe and
        that all other planets and the sun orbited the Earth. This is easy to
        understand because from our perspective it does look like the sun is
        rotating around us, rising in the East and setting in the West. This was
        known as geocentric theory. We now know that the sun is the center of
        our solar system, and this is known as Heliocentric theory.</div>
      </div>
      <p>
        Our solar system is part of the Milky Way galaxy. There are other solar
        systems in the Milky Way galaxy as well! The Milky Way galaxy is a
        spiral shaped <span className="vocab" onClick={defineGalaxy}>galaxy</span>.
      </p>
      <div className="definition hidden" id="galaxyDef">
        Galaxy - a large system in space containing gas, dust, and billions of
        stars and solar systems being held together by gravity
      </div>
      <p>
        All of the planets in our solar system orbit around the sun in a
        counter-clockwise direction. Each of the planets also rotates, or spins,
        around its own axis while it is orbiting. Many of the planets have moons
        that orbit around them as well.
      </p>
      <p>
        There are also several <span className="vocab" onClick={defineDwarf}>dwarf planets</span> in
        our solar system that don't quite meet the definition of a planet. Many
        of the dwarf planets in our solar system, including Pluto, extend deep
        into the Kuiper Belt. The Kuiper Belt is the deepest reaches of our
        solar system containing countless objects that are rocky or icy.
      </p>
      <div className="definition hidden" id="dwarfDef">
        Dwarf Planet - an object in space that is similar to a planet but they
        do not have an orbital path that is clear of other materials
      </div>

      <h3>Click each of the planet icons to learn more!</h3>

      <p>
        {" "}
        Would you like to check your knowledge on our solar system? After
        exploring the different planets and moons in the solar system come back
        to see what you've learned with the quiz below!
      </p>
      <Quiz />
    </div>
  );
};

export default HomePage;
