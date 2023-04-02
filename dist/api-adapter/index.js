var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// all API fetch requests go here
export function getAllPlanets() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://planet-server.onrender.com/api/planets");
            const planets = yield response.json();
            return planets;
        }
        catch (error) {
            throw error;
        }
    });
}
export function getTenQuizQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://planet-server.onrender.com/api/questions/ten");
            const tenQuestions = yield response.json();
            return tenQuestions;
        }
        catch (error) {
            throw error;
        }
    });
}
export function getMoonsByPlanetId(planetId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://planet-server.onrender.com/api/moons/planet/${planetId}`);
            const moons = yield response.json();
            return moons;
        }
        catch (error) {
            throw error;
        }
    });
}
export function getDwarfPlanets() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://planet-server.onrender.com/api/dwarf_planets");
            const dwarfs = yield response.json();
            return dwarfs;
        }
        catch (error) {
            throw error;
        }
    });
}
//# sourceMappingURL=index.js.map