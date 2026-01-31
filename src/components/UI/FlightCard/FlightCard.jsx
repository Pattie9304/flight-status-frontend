import React from 'react';
import './FlightCard.css';

const FlightCard = ({ data }) => {
  console.log("Vuelo individual:", data);
  // 1. Extraemos los datos con valores por defecto por si fallan
  const flightNumber = data.flight?.iata || data.flight?.number || "N/A";
  const airline = data.airline?.name || "Línea desconocida";
  const origin = data.departure?.iata || "---"; // Usamos IATA (ej: MAD) para el look de ticket
  const destination = data.arrival?.iata || "---";
  const status = data.flight_status;

  return (
    <div className={`flight-card flight-card--${status}`}>
      <div className="flight-card__header">
        <span className="flight-card__airline">{airline}</span>
        <span className="flight-card__number">{flightNumber}</span>
      </div>

      <div className="flight-card__content">
        <div className="flight-card__city">
          <span className="flight-card__iata">{origin}</span>
          <small className="flight-card__label">Origen</small>
        </div>
        <div className="flight-card__icon">
          <div className="flight-card__line"></div>
          <span className="flight-card__plane">✈️</span>
        </div>
        <div className="flight-card__city">
          <span className="flight-card__iata">{destination}</span>
          <small className="flight-card__label">Destino</small>
        </div>
      </div>
      
      <div className="flight-card__footer">
        <div className={`flight-card__status flight-card__status--${status}`}>
          {status === 'scheduled' ? 'Programado' : status}
        </div>
      </div>
    </div>
  );
};

export default FlightCard;