import React from "react";
import { NavLink } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <div id="footer">
      <p><NavLink to="/">Home</NavLink> | <NavLink to="/dwarfplanets">Dwarf Planets</NavLink> | <NavLink to="/quiz">Quiz</NavLink></p>
      <p>
        All information provided on this site was sourced from{" "}
        <a href="https://solarsystem.nasa.gov/" target="_blank">
          https://solarsystem.nasa.gov/
        </a>
      </p>
      <p>Made by TeamPlanetQuack</p>
      <ul>
        <li>Nelson Luna - <a href="https://github.com/xKurieita" target="_blank">Github</a> - <a href="https://www.linkedin.com/in/nelson-luna/" target="_blank">LinkedIn</a></li>
        <li>Lex Mullin - <a href="https://github.com/alemulli" target="_blank">Github</a> - <a href="https://www.linkedin.com/in/alexa-mullin/" target="_blank">LinkedIn</a></li>
        <li>Jessy Piesco - <a href="https://github.com/JessyPiesco" target="_blank">Github</a> - <a href="https://www.linkedin.com/in/jessypiesco/" target="_blank">LinkedIn</a></li>
        <li>Maaya Yamauchi - <a href="https://github.com/mayamauchi" target="_blank">Github</a> - <a href="https://www.linkedin.com/in/maaya-yamauchi/" target="_blank">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Footer;
