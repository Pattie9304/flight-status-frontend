const API_KEY = import.meta.env.VITE_FLIGHT_API_KEY;
const BASE_URL = 'http://api.aviationstack.com/v1';

export const getFlightSchedules = async () => {
  console.log("Mi clave es:", API_KEY);
  try {
    const url = `${BASE_URL}/flights?access_key=${API_KEY}`;
    console.log("Intentando conectar a:", url); // Para verificar que la URL es correcta

    const response = await fetch(url);
    
    // Si la respuesta no es 200-299
    if (!response.ok) {
      const errorDetail = await response.json(); // Intentamos leer el error de la API
      console.error("Detalle del error de AviationStack:", errorDetail);
      throw new Error(`Error ${response.status}: ${errorDetail.error?.message || 'Fallo desconocido'}`);
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error capturado en el catch:", error);
    throw error;
  }
};