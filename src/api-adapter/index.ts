// all API fetch requests go here
export async function getAllPlanets () {
    try {
        const response = await fetch ('http://localhost:8080/api/planets');
        const planets = await response.json();
        return planets;
    } catch (error) {
        throw error;
    }
}
export async function getTenQuizQuestions() {
    try {
        const response = await fetch ('http://localhost:8080/api/questions/ten');
        const tenQuestions = await response.json();
        return tenQuestions;
    } catch (error) {
        throw error;
    }}

export async function getMoonsByPlanetId(planetId: number) {  
    try {
        const response = await fetch (`http://localhost:8080/api/moons/planet/${planetId}`);
        const moons = await response.json();
        console.log(moons);
        return moons;
    } catch (error) {
        throw error;
    }
}  