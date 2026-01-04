const API_KEY = 'TU_API_KEY_AQUÍ'; // Reemplaza con tu clave de Aviationstack
const BASE_URL = 'http://api.aviationstack.com/v1';

export const getFlightSchedules = async () => {
  try {
    const response = await fetch(`${BASE_URL}/flights?access_key=${API_KEY}&limit=10`);
    
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