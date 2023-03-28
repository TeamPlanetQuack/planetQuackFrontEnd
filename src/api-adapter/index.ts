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

