import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className="about-container">
      {/* Sección Hero */}
      <header className="about-header">
        <h1>Sobre el proyecto</h1>
        <p className="subtitle">Flight status es una aplicación desarrollada para el Bootcamp de Triple Ten. Contiene dos páginas.</p>
        <div className="underline"></div>
      </header>

      <section className="about-content">
        {/* Introducción breve */}
        <div className='about-full-grid'>
          <div className="about-text">
            <p>La primera, se llama "Inicio". Contiene la infromación obtenido la API "aviationstack".</p>
            <p>La segund, se llama "Sobre el Proyecto". Contiene una descipción básica del proyecto, tal como su nombre lo indica.</p>
          </div>
        </div>
        {/* Descripción Principal */}
        <div className="about-grid">
          <div className="about-text">
            <h2>Acerca de la API</h2>
            <p>Para este proyecto se utiliza la API de Aviationstack.</p>
            <p>La API de Aviationstack es un servicio RESTful basado en JSON, diseñado para proporcionar datos globales de aviación: estado de vuelos en tiempo real, datos históricos, horarios futuros e información completa de búsqueda sobre aerolíneas, aeropuertos, aviones, rutas y más.
              Más de 5000 empresas de todo el mundo confían en ella para plataformas de reserva, sistemas de seguimiento, visualizaciones y aplicaciones de análisis.</p>
            <p>Para propósitos del Bootcamp, sólo se usará el endpoint llamado "Flight schedules".</p>
          </div>

          {/* Flight Schedules*/}
          <div className="about-cards">
            <div className="stat-card">
              <FontAwesomeIcon icon="fa-solid fa-rocket" className="card-icon" />
              <h3>Velocidad</h3>
              <p>Optimización máxima en cada línea de código.</p>
            </div>
            <div className="stat-card">
              <FontAwesomeIcon icon="fa-solid fa-cloud" className="card-icon" />
              <h3>Escalabilidad</h3>
              <p>Arquitecturas preparadas para el crecimiento constante.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;