import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Estilos */
import './Main.css';

/* Componentes */
import Loader from '../UI/Preloader/Preloader.jsx'; // Ruta corregida a carpeta UI
import Header from '../Header/Header.jsx';
import About from '../About/About.jsx';
import FlightCard from '../UI/FlightCard/FlightCard.jsx';
import Footer from '../Footer/Footer.jsx';
import PageNotFound from '../NotFound/NotFound.jsx'; // Asegúrate de importar tu 404

/* Utils */
import { getFlightSchedules } from '../../utils/aviationApi';

function Main() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getFlightSchedules();
        setFlights(data || []);
      } catch (err) {
        setError("Error de conexión con la torre de control. Por favor, reintente.");
      } finally {
        setFading(true);
        setTimeout(() => setLoading(false), 1000);
      }
    };
    loadData();
  }, []);

return (
    <div className="main">
      {/* 1. El Preloader se muestra mientras loading sea true */}
      {loading && <Loader fading={fading} />}

      {/* 2. El envoltorio principal */}
      {/* Usamos un template literal para añadir la clase --visible cuando termine de cargar */}
      <div className={`main-wrapper ${!loading ? 'main-wrapper--visible' : ''}`}>
        
        <Header />
        
        <main className="main__content">
          <Routes>
            <Route path="/" element={<Home flights={flights} error={error} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </div>
  );
}

export default Main;