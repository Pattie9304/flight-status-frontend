import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className="about-container">
      {/* Sección Hero */}
      <header className="about-header">
        <h1>Sobre Nosotros</h1>
        <p className="subtitle">Elevando tus proyectos a nuevas alturas</p>
        <div className="underline"></div>
      </header>

      <section className="about-content">
        {/* Descripción Principal */}
        <div className="about-grid">
          <div className="about-text">
            <h2>Nuestra Historia</h2>
            <p>
              Comenzamos con una idea simple: hacer que la web sea más dinámica y emocionante. 
              Al igual que nuestro avión de carga, nos dedicamos a transportar tus ideas 
              desde el concepto hasta la realidad con velocidad y precisión.
            </p>
            <p>
              Especializados en desarrollo Frontend con React, buscamos crear 
              experiencias que no solo funcionen, sino que cautiven.
            </p>
          </div>

          {/* Tarjetas de Valores o Stats */}
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

      {/* Sección de Tecnologías (Skills) */}
      <footer className="about-skills">
        <h3>Nuestro Stack Tecnológico</h3>
        <div className="skills-logos">
          <span>React</span>
          <span>JavaScript</span>
          <span>CSS3</span>
          <span>Vite</span>
        </div>
      </footer>
    </div>
  );
};

export default About;