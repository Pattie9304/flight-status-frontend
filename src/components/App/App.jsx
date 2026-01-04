import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes de Layout
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Páginas
import Home from '../../pages/Home/Home';
import Main from '../../pages/Main/Main';
import About from '../../pages/About/About';

// Servicios (Asumiendo que tienes tu función de API aquí)
import { getFlightSchedules } from '../../utils/aviationApi';

function App() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los datos
  const fetchFlights = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFlightSchedules();
      setFlights(data || []);
    } catch (err) {
      setError('No se pudo conectar con el radar. Intenta más tarde.');
    } finally {
      setLoading(false);
    }
  };

  // Carga inicial al abrir la app
  useEffect(() => {
    fetchFlights();
  }, []);

  return (
      <div className="app-container">
        {/* El Header recibe la función de refrescar y el estado de carga */}
        <Header onRefresh={fetchFlights} isLoading={loading} />
        
        {/* Contenedor dinámico de rutas */}
        <main className="content">
          <Routes>
            {/* 1. INICIO: Muestra bienvenida + 6 tarjetas */}
            <Route 
              path="/" 
              element={<Home flights={flights} loading={loading} error={error} />} 
            />

            {/* 2. VUELOS: Muestra el listado completo con paginación */}
            <Route 
              path="/main" 
              element={<Main flights={flights} loading={loading} error={error} />} 
            />

            {/* 3. ACERCA DE */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
  );
}

export default App;