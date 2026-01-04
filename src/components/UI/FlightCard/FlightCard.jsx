import React from 'react';
import './FlightCard.css';

const FlightCard = ({ airline, flightNumber, origin, destination, status }) => {
  // Normalizamos el estado para que coincida con nuestras clases CSS (ej: 'active', 'scheduled', 'cancelled')
  const statusClass = status ? status.toLowerCase() : 'scheduled';

  return (
    /* Aplicamos un modificador a la tarjeta principal según el estado para el borde lateral */
    <article className={`flight-card flight-card--${statusClass}`}>
      
      {/* Encabezado: Nombre de aerolínea y código de vuelo */}
      <header className="flight-card__header">
        <h3 className="flight-card__airline">{airline}</h3>
        <span className="flight-card__number">{flightNumber}</span>
      </header>

      {/* Cuerpo: La ruta del vuelo con diseño visual de aeropuerto */}
      <div className="flight-card__route">
        <div className="flight-card__point">
          <span className="flight-card__label">Origen</span>
          <span className="flight-card__airport">{origin}</span>
        </div>
        
        <div className="flight-card__icon">
          <span className="flight-card__arrow">✈</span>
        </div>

        <div className="flight-card__point">
          <span className="flight-card__label">Destino</span>
          <span className="flight-card__airport">{destination}</span>
        </div>
      </div>

      {/* Pie: Etiqueta de estado dinámica */}
      <footer className="flight-card__footer">
        <span className={`flight-card__status flight-card__status--${statusClass}`}>
          {status || 'Programado'}
        </span>
      </footer>

    </article>
  );
};

export default FlightCard;