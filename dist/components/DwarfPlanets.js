var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDwarfPlanets } from "../api-adapter";
const DwarfPlanets = () => {
    const [allDwarfs, setAllDwarfs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function fetchDwarfs() {
            return __awaiter(this, void 0, void 0, function* () {
                const dwarfs = yield getDwarfPlanets();
                setAllDwarfs(dwarfs);
            });
        }
        fetchDwarfs();
    }, []);
    function clickedBack() {
        navigate("/");
    }
    console.log(allDwarfs);
    return (React.createElement("div", { className: "dwarfPlanets" },
        React.createElement("h1", null, "Dwarf Planets"),
        allDwarfs.map((dwarf) => (React.createElement("h3", null, dwarf.name))),
        React.createElement("button", { className: "backToHome", onClick: clickedBack }, "\u2190 Back to The Solar System")));
};
export default DwarfPlanets;
//# sourceMappingURL=DwarfPlanets.js.map