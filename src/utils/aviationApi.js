const API_KEY = import.meta.env.VITE_FLIGHT_API_KEY;
const BASE_URL = 'http://api.aviationstack.com/v1';

export const getFlightSchedules = async () => {
  try {
    const response = await fetch(`${BASE_URL}/flights?access_key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la aviación');
    }
    
    const data = await response.json();
    return data.data; // La API devuelve un objeto con una propiedad 'data' que es el array
  } catch (error) {
    console.error("Error en aviationApi:", error);
    throw error;
  }
};