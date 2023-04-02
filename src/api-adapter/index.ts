// all API fetch requests go here
export async function getAllPlanets() {
  try {
    const response = await fetch("https://planet-server.onrender.com/api/planets");
    const planets = await response.json();
    return planets;
  } catch (error) {
    throw error;
  }
}
export async function getTenQuizQuestions() {
  try {
    const response = await fetch("https://planet-server.onrender.com/api/questions/ten");
    const tenQuestions = await response.json();
    return tenQuestions;
  } catch (error) {
    throw error;
  }
}

export async function getMoonsByPlanetId(planetId: number) {
  try {
    const response = await fetch(
      `https://planet-server.onrender.com/api/moons/planet/${planetId}`
    );
    const moons = await response.json();
    return moons;
  } catch (error) {
    throw error;
  }
}

export async function getDwarfPlanets() {
  try {
    const response = await fetch("https://planet-server.onrender.com/api/dwarf_planets");
    const dwarfs = await response.json();
    return dwarfs;
  } catch (error) {
    throw error;
  }
}
