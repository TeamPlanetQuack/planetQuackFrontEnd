import React
//  { useState, useEffect } 
 from "react";

const HomePage: React.FC = () => {
    return (
      <div>
        <h1>Our Solar System</h1>
        <p>A solar system consists of planets orbiting a star. Our solar system consists of the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Neptune, and Uranus orbiting the Sun. There is also an asteroid belt between Mars and Jupiter. The asteroid belt contains thousands of space rocks that are not quite big enough to be planets themselves, but they also orbit our sun.</p>
        <p className="vocab">Orbit - to travel around an object in space in a circular or elliptical path</p>
        <p>In our solar system, we classify planets as either terrestrial or jovian. Another word for terrestrial is rocky. The first four planets closest to the sun, Mercury, Venus, Earth, and Mars are terrestrial planets. In general terrestrial planets are small, dense, warm, and have very few moons. The four planets furthest from the sun, Jupiter, Saturn, Uranus, and Neptune, are jovian planets, also known as gas and ice giants. In general jovian planets are large, less dense, cold, and have many moons orbiting them.</p>
        <p className="didYouKnow">In the past, humans thought the Earth was the center of the Universe and that all other planets and the sun orbited the Earth. This is easy to understand because from our perspective it does look like the sun is rotating around us, rising in the East and setting in the West. This was known as geocentric theory. We now know that the sun is the center of our solar system, and this is known as Heliocentric theory.</p>
        <p>Our solar system is part of the Milky Way galaxy. There are other solar systems in the Milky Way galaxy as well! The Milky Way galaxy is a spiral shaped galaxy.</p>
        <p className="vocab">Galaxy - a large system in space containing gas, dust, and billions of stars and solar systems being held together by gravity</p>
        <p>All of the planets in our solar system orbit around the sun in a counter-clockwise direction. Each of the planets also rotates, or spins, around its own axis while it is orbiting. Many of the planets have moons that orbit around them as well.</p>
        <p>There are also several dwarf planets in our solar system that don't quite meet the definition of a planet. Many of the dwarf planets in our solar system, including Pluto, extend deep into the Kuiper Belt. The Kuiper Belt is the deepest reaches of our solar system containing countless objects that are rocky or icy.</p>
        <p className="vocab">Dwarf Planet - an object in space that is similar to a planet but they do not have an orbital path that is clear of other materials</p>

        <h3>Click each of the planets to learn more!</h3>

        <p> Would you like to check your knowledge on our solar system? After exploring the different planets and moons in the solar system come back to see what you've learned with the quiz below!</p>
        {/* Component here for quiz! */}
      </div>
    );
  };
  
  export default HomePage;