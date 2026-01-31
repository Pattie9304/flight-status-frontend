import React from 'react';
import FlightCard from '../../components/UI/FlightCard/FlightCard.jsx';
import './Home.css';

const Home = ({ flights = [], error, loading }) => {
  // Limitamos la muestra a solo 6 tarjetas
  const flightPreview = flights.slice(0, 4);

  return (
    <section className="home">
      {/* SECCIÓN DE BIENVENIDA */}
      <header className="home__hero">
        <h1 className="home__title">Bienvenido a JetDevs</h1>
        <p className="home__subtitle">
          Tu ventana al tráfico aéreo global en tiempo real. 
          Explora los vuelos activos y mantente informado.
        </p>

        <div className="home__info-box">
          <p className="home__info-text">
            Los siguientes vuelos son una muestra de nuestro catálogo. 
            Dirígete a <strong>Vuelos</strong> para ver el listado completo.
          </p>
        </div>
      </header>

{/* MANEJO DE ESTADOS ACTUALIZADO */}
<div className="home__container">
        {/* Eliminamos el bloque de {loading ? ...} */}
        
        {error ? (
          <div className="home__status-container">
            <p className="home__message home__message--error">⚠️ {error}</p>
          </div>
        ) : (
          <div className="home__grid">
            {flightPreview.length > 0 ? (
              flightPreview.map((flight, index) => (
                <div key={flight.flight?.iata || index} className="home__card-wrapper">
                  <FlightCard data={flight} />
                </div>
              ))
            ) : (
              /* Mostramos esto solo si NO está cargando y no hay vuelos */
              !loading && <p className="home__message">No hay vuelos disponibles.</p>
            )}
          </div>
        )}
      </div>
    </section>
    );
};

export default Home;