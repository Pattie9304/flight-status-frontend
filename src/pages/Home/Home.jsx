import FlightCard from '../../components/UI/FlightCard/FlightCard.jsx';
import './Home.css';

const Home = ({ flights, error }) => {
  return (
    <div className="home">
      {/* Sección Hero: Impacto visual inicial */}
      <section className="home__hero">
        <div className="home__hero-container">
          <h1 className="home__hero-title">Terminal de Vuelos Real-Time</h1>
          <p className="home__hero-subtitle">
            Visualiza los horarios y estados de los vuelos globales actualizados desde la torre de control.
          </p>
          <div className="home__hero-divider"></div>
        </div>
      </section>

      {/* Sección de Resultados: Grid de vuelos */}
      <section className="home__flights">
        <div className="home__flights-container">
          <h2 className="home__flights-title">Vuelos Programados</h2>
          
          {error ? (
            <div className="home__error-container">
              <p className="home__error-message">{error}</p>
            </div>
          ) : (
            <div className="home__grid">
              {flights.length > 0 ? (
                flights.map((flight, index) => (
                  <FlightCard
                    key={flight.flight?.iata || index} // Usamos el código de vuelo como key si existe
                    airline={flight.airline?.name || "Línea Aérea Desconocida"}
                    flightNumber={flight.flight?.iata || "N/A"}
                    origin={flight.departure?.iata || "---"}
                    destination={flight.arrival?.iata || "---"}
                    status={flight.flight_status}
                  />
                ))
              ) : (
                <p className="home__empty-state">
                  No se han encontrado vuelos en este momento. Por favor, revisa más tarde.
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;