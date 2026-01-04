import React, { useState, useEffect } from 'react';
import FlightCard from '../../components/UI/FlightCard/FlightCard.jsx';
import './Main.css';

const Main = ({ flights = [], loading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 12; 

  useEffect(() => {
    setCurrentPage(1);
  }, [flights.length]);

  const totalFlights = flights.length;
  const totalPages = Math.ceil(totalFlights / flightsPerPage);
  
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  // Cálculos para el indicador de cantidad
  const rangeStart = totalFlights === 0 ? 0 : indexOfFirstFlight + 1;
  const rangeEnd = Math.min(indexOfLastFlight, totalFlights);

  return (
    <div className="flights-page">
      <header className="flights-page__hero">
        <h1 className="flights-page__title">Listado de Vuelos</h1>
        <p className="flights-page__subtitle">
          Listado completo de operaciones aéreas. Monitoreo en tiempo real.
        </p>
        <div className="flights-page__divider"></div>
        
        {/* INDICADOR DE CANTIDAD TOTAL */}
        {!loading && totalFlights > 0 && (
          <div className="flights-page__count-indicator">
            Mostrando <strong>{rangeStart} - {rangeEnd}</strong> de <strong>{totalFlights}</strong> vuelos encontrados
          </div>
        )}
      </header>

      <section className="flights-page__container">
        {loading && totalFlights === 0 ? (
          <div className="flights-page__status">
            <div className="flights-page__loader"></div>
            <p>Sincronizando radar...</p>
          </div>
        ) : error ? (
          <div className="flights-page__status">
            <p className="flights-page__error">⚠️ {error}</p>
          </div>
        ) : (
          <>
            <div className="flights-page__grid">
              {currentFlights.map((flight, index) => (
                <div key={flight.flight?.iata || index} className="flights-page__card-item">
                  <FlightCard data={flight} />
                </div>
              ))}
            </div>

            <nav className="flights-page__pagination">
              <button 
                className="flights-page__page-btn" 
                onClick={() => setCurrentPage(p => p - 1)}
                disabled={currentPage === 1}
              >
                &larr; Anterior
              </button>
              
              <span className="flights-page__page-info">
                Página <strong>{currentPage}</strong> de {totalPages || 1}
              </span>

              <button 
                className="flights-page__page-btn" 
                onClick={() => setCurrentPage(p => p + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Siguiente &rarr;
              </button>
            </nav>
          </>
        )}
      </section>
    </div>
  );
};

export default Main;