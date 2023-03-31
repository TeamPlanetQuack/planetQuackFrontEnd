import React from "react";
import { Footer } from "./";
import { NavLink } from "react-router-dom";
const HomePage = () => {
    function defineOrbit() {
        const definition = document.getElementById("orbitDef");
        if (definition.classList.contains("hidden")) {
            definition.classList.remove("hidden");
        }
        else {
            definition.classList.add("hidden");
        }
    }
    function defineGalaxy() {
        const definition = document.getElementById("galaxyDef");
        if (definition.classList.contains("hidden")) {
            definition.classList.remove("hidden");
        }
        else {
            definition.classList.add("hidden");
        }
    }
    function defineDwarf() {
        const definition = document.getElementById("dwarfDef");
        if (definition.classList.contains("hidden")) {
            definition.classList.remove("hidden");
        }
        else {
            definition.classList.add("hidden");
        }
    }
    function clickDidYouKnow() {
        const didYouKnowBefore = document.getElementById("didYouKnowBefore");
        const didYouKnowAfter = document.getElementById("didYouKnowAfter");
        if (didYouKnowAfter.classList.contains("hidden")) {
            didYouKnowAfter.classList.remove("hidden");
            didYouKnowBefore.classList.add("hidden");
        }
        else {
            didYouKnowBefore.classList.remove("hidden");
            didYouKnowAfter.classList.add("hidden");
        }
    }
    return (React.createElement("div", null,
        React.createElement("h1", null, "Our Solar System"),
        React.createElement("p", null,
            "A solar system consists of planets orbiting a star. Our solar system consists of the planets Mercury, Venus, Earth, Mars, Jupiter, Saturn, Neptune, and Uranus orbiting the Sun. There is also an asteroid belt between Mars and Jupiter. The asteroid belt contains thousands of space rocks that are not quite big enough to be planets themselves, but they also ",
            React.createElement("span", { className: "vocab", onClick: defineOrbit }, "orbit"),
            " our sun."),
        React.createElement("div", { className: "definition hidden", id: "orbitDef" }, "Orbit - to travel around an object in space in a circular or elliptical path"),
        React.createElement("p", null, "In our solar system, we classify planets as either terrestrial or jovian. Another word for terrestrial is rocky. The first four planets closest to the sun, Mercury, Venus, Earth, and Mars are terrestrial planets. In general terrestrial planets are small, dense, warm, and have very few moons. The four planets furthest from the sun, Jupiter, Saturn, Uranus, and Neptune, are jovian planets, also known as gas and ice giants. In general jovian planets are large, less dense, cold, and have many moons orbiting them."),
        React.createElement("div", { className: "didYouKnow", onClick: clickDidYouKnow },
            " ",
            React.createElement("div", { className: "dYK" }, "?"),
            React.createElement("div", { id: "didYouKnowBefore" }, "Did You Know  ?"),
            React.createElement("div", { className: "hidden", id: "didYouKnowAfter" }, "In the past, humans thought the Earth was the center of the Universe and that all other planets and the sun orbited the Earth. This is easy to understand because from our perspective it does look like the sun is rotating around us, rising in the East and setting in the West. This was known as geocentric theory. We now know that the sun is the center of our solar system, and this is known as Heliocentric theory.")),
        React.createElement("p", null,
            "Our solar system is part of the Milky Way galaxy. There are other solar systems in the Milky Way galaxy as well! The Milky Way galaxy is a spiral shaped ",
            React.createElement("span", { className: "vocab", onClick: defineGalaxy }, "galaxy"),
            "."),
        React.createElement("div", { className: "definition hidden", id: "galaxyDef" }, "Galaxy - a large system in space containing gas, dust, and billions of stars and solar systems being held together by gravity"),
        React.createElement("p", null, "All of the planets in our solar system orbit around the sun in a counter-clockwise direction. Each of the planets also rotates, or spins, around its own axis while it is orbiting. Many of the planets have moons that orbit around them as well."),
        React.createElement("p", null,
            "There are also several ",
            React.createElement("span", { className: "vocab", onClick: defineDwarf }, "dwarf planets"),
            " in our solar system that don't quite meet the definition of a planet. Many of the dwarf planets in our solar system, including Pluto, extend deep into the Kuiper Belt. The Kuiper Belt is the deepest reaches of our solar system containing countless objects that are rocky or icy."),
        React.createElement("div", { className: "definition hidden", id: "dwarfDef" }, "Dwarf Planet - an object in space that is similar to a planet but they do not have an orbital path that is clear of other materials"),
        React.createElement("h3", null, "Click each of the planet icons to learn more!"),
        React.createElement("div", { id: "quizContainer" },
            React.createElement("p", null,
                "Would you like to check your knowledge on our solar system? After exploring the different planets and moons in the solar system ",
                React.createElement(NavLink, { to: "/quiz" }, "try this quiz"),
                " to see what you've learned!")),
        React.createElement(Footer, null)));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map