import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (React.createElement("div", { id: "footer" },
        React.createElement("p", null,
            React.createElement(NavLink, { to: "/" }, "Home"),
            " | ",
            React.createElement(NavLink, { to: "/dwarfplanets" }, "Dwarf Planets"),
            " | ",
            React.createElement(NavLink, { to: "/quiz" }, "Quiz")),
        React.createElement("p", null,
            "All information provided on this site was sourced from",
            " ",
            React.createElement("a", { href: "https://solarsystem.nasa.gov/", target: "_blank" }, "https://solarsystem.nasa.gov/")),
        React.createElement("p", null, "Made by TeamPlanetQuack"),
        React.createElement("ul", null,
            React.createElement("li", null,
                "Nelson Luna - ",
                React.createElement("a", { href: "https://github.com/xKurieita", target: "_blank" }, "Github"),
                " - ",
                React.createElement("a", { href: "https://www.linkedin.com/in/nelson-luna/", target: "_blank" }, "LinkedIn")),
            React.createElement("li", null,
                "Lex Mullin - ",
                React.createElement("a", { href: "https://github.com/alemulli", target: "_blank" }, "Github"),
                " - ",
                React.createElement("a", { href: "https://www.linkedin.com/in/alexa-mullin/", target: "_blank" }, "LinkedIn")),
            React.createElement("li", null,
                "Jessy Piesco - ",
                React.createElement("a", { href: "https://github.com/JessyPiesco", target: "_blank" }, "Github"),
                " - ",
                React.createElement("a", { href: "https://www.linkedin.com/in/jessypiesco/", target: "_blank" }, "LinkedIn")),
            React.createElement("li", null,
                "Maaya Yamauchi - ",
                React.createElement("a", { href: "https://github.com/mayamauchi", target: "_blank" }, "Github"),
                " - ",
                React.createElement("a", { href: "https://www.linkedin.com/in/maaya-yamauchi/", target: "_blank" }, "LinkedIn")))));
};
export default Footer;
//# sourceMappingURL=Footer.js.map